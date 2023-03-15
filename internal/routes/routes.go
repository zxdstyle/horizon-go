package routes

import (
	"context"
	"github.com/zxdstyle/horizon/model"
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

		api.GET("v1/users", func(ctx context.Context, req requests.IRequest) responses.Response {
			var users []model.User
			pkg.DB().WithContext(ctx).Limit(10).Find(&users)
			return responses.Success(users)
		})
	}
}
