package posts

import (
	"context"
	"github.com/zxdstyle/bloghub/internal/model"
	"github.com/zxdstyle/bloghub/pkg"
	"github.com/zxdstyle/bloghub/pkg/http/requests"
	"github.com/zxdstyle/bloghub/pkg/http/responses"
)

func (*apiPost) Create(ctx context.Context, req requests.IRequest) responses.Response {
	var data model.Post
	if err := req.Bind(&data); err != nil {
		return responses.Error(err)
	}
	err := pkg.DB().WithContext(ctx).Create(data).Error
	if err != nil {
		return responses.Error(err)
	}
	return responses.Success(data)
}
