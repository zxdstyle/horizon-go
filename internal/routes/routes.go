package routes

import (
	"context"
	_ "embed"
	"github.com/zxdstyle/horizon/internal/handler/posts"
	"github.com/zxdstyle/horizon/pkg"
	"github.com/zxdstyle/horizon/pkg/http/requests"
	"github.com/zxdstyle/horizon/pkg/http/responses"
)

func InitRoutes() {
	s := pkg.Server()

	api := s.Group("/api")
	{
		api.GET("/v1/routes", posts.Post.List)

		api.POST("/v1/login", func(ctx context.Context, req requests.IRequest) responses.Response {
			return responses.Success(map[string]any{
				"username": "zxdstyle",
				"token":    "12312312312312312312312312312",
			})
		})
	}
}
