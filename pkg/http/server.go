package http

import (
	"context"
	"github.com/gin-gonic/gin"
	"github.com/gookit/config/v2"
	"github.com/zxdstyle/bloghub/pkg/slog"
	"log"
	"net/http"
	"os"
	"os/signal"
)

var defaultServerName = "app"

type Server struct {
	name   string
	cfg    Config
	engine *gin.Engine
	Router
}

func Service(name ...string) *Server {
	n := defaultServerName
	if len(name) > 0 {
		n = name[0]
	}
	return &Server{
		name: n,
	}
}

func (s *Server) Name() string {
	return "server." + s.name
}

func (s *Server) Boot() error {
	var cfg Config
	if err := config.BindStruct(s.name, &cfg); err != nil {
		return err
	}
	s.cfg = cfg

	gin.SetMode(gin.ReleaseMode)
	engine := gin.New()

	s.engine = engine
	s.Router = Router{engine: engine}

	return nil
}

func (s *Server) Key() string {
	return "serve"
}

func (s *Server) Run() {
	srv := &http.Server{
		Addr:    s.cfg.Addr,
		Handler: s.engine,
	}
	go func() {
		// 服务连接
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit
	slog.Info("Shutdown Server ...")

	ctx := context.Background()
	if err := srv.Shutdown(ctx); err != nil {
		slog.Errorf(err, slog.NewField("event", "server shutdown"))
	}
	slog.Info("Server exiting")
	return
}
