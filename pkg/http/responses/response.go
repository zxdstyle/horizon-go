package responses

import "github.com/gin-gonic/gin"

type Response interface {
	Do(ctx *gin.Context) error
}
