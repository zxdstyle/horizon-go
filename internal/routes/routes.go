package routes

import (
	"context"
	"github.com/zxdstyle/horizon/internal/handler/posts"
	"github.com/zxdstyle/horizon/internal/model"
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
			var (
				users []model.User
				total int64
			)

			var query struct {
				Page     int64 `form:"page"`
				PageSize int64 `form:"pageSize"`
			}
			if err := req.BindQuery(&query); err != nil {
				return responses.Error(err)
			}
			offset := (query.Page - 1) * query.PageSize
			pkg.DB().WithContext(ctx).Limit(10).Offset(int(offset)).Find(&users)
			pkg.DB().WithContext(ctx).Model(model.User{}).Count(&total)
			return responses.Success(Pagination{
				Page:     1,
				Data:     users,
				PageSize: 0,
				Total:    total,
			})
		})
	}
}

type Pagination struct {
	Page     int64 `json:"page"`
	Data     any   `json:"data"`
	PageSize int64 `json:"pageSize"`
	Total    int64 `json:"total"`
}
