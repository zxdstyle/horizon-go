package http

import (
	"github.com/gin-gonic/gin"
	"github.com/zxdstyle/bloghub/pkg/http/requests"
)

type (
	Router struct {
		engine gin.IRouter
	}
)

func (r Router) GET(path string, handler HandlerFunc) Router {
	r.engine.GET(path, r.wrapHandler(handler))
	return r
}

func (r Router) POST(path string, handler HandlerFunc) Router {
	r.engine.POST(path, r.wrapHandler(handler))
	return r
}

func (r Router) PUT(path string, handler HandlerFunc) Router {
	r.engine.PUT(path, r.wrapHandler(handler))
	return r
}

func (r Router) DELETE(path string, handler HandlerFunc) Router {
	r.engine.DELETE(path, r.wrapHandler(handler))
	return r
}

func (r Router) Group(path string, handler HandlerFunc) Router {
	group := r.engine.Group(path, r.wrapHandler(handler))
	return Router{
		engine: group,
	}
}

func (r Router) wrapHandler(handler HandlerFunc) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		req := requests.NewRequest(ctx)
		resp := handler(req.Context(), req)
		if resp != nil {
			resp.Do(ctx)
		}
	}
}
