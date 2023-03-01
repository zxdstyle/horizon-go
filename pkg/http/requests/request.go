package requests

import (
	"context"
	"github.com/gin-gonic/gin"
)

type IRequest interface {
	Context() context.Context
	Bind(data any) error
}

type request struct {
	stdCtx context.Context
	ctx    *gin.Context
}

func NewRequest(ctx *gin.Context) IRequest {
	return &request{
		stdCtx: context.Background(),
		ctx:    ctx,
	}
}

func (r *request) Context() context.Context {
	return r.stdCtx
}

func (r *request) Bind(data any) error {
	return r.ctx.ShouldBind(data)
}
