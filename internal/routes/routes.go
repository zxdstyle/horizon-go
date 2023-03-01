package routes

import (
	"context"
	"github.com/zxdstyle/bloghub/internal/handler/posts"
	"github.com/zxdstyle/bloghub/pkg"
	"github.com/zxdstyle/bloghub/pkg/http/requests"
	"github.com/zxdstyle/bloghub/pkg/http/responses"
)

func InitRoutes() {
	s := pkg.Server()

	s.POST("/", posts.Post.Create)
	s.GET("/api/v1/routes", posts.Post.List)

	s.POST("/api/v1/login", func(ctx context.Context, req requests.IRequest) responses.Response {
		return responses.Success(map[string]any{
			"username": "zxdstyle",
			"token":    "12312312312312312312312312312",
		})
	})
}
