package routes

import (
	"context"
	"github.com/zxdstyle/horizon/internal/handler/posts"
	"github.com/zxdstyle/horizon/pkg"
	"github.com/zxdstyle/horizon/pkg/horizon/widgets"
	"github.com/zxdstyle/horizon/pkg/http/requests"
	"github.com/zxdstyle/horizon/pkg/http/responses"
)

func InitRoutes() {
	s := pkg.Server()

	s.POST("/", posts.Post.Create)
	s.GET("/api/v1/routes", posts.Post.List)

	s.POST("/api/v1/login", func(ctx context.Context, req requests.IRequest) responses.Response {
		button := widgets.NewButton()
		return responses.Success(button)
	})
}
