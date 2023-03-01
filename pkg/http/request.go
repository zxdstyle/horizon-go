package http

import "github.com/gin-gonic/gin"

type Request struct {
}

func newRequest(ctx *gin.Context) Request {
	return Request{}
}
