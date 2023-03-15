package posts

import (
	"context"
	"github.com/zxdstyle/horizon/internal/model"
	"github.com/zxdstyle/horizon/pkg"
	"github.com/zxdstyle/horizon/pkg/http/requests"
	"github.com/zxdstyle/horizon/pkg/http/responses"
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
