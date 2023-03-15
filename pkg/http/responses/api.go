package responses

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type apiResponse struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
	Data    any    `json:"data"`
}

func (r apiResponse) Do(ctx *gin.Context) error {
	ctx.Status(r.Code)
	ctx.JSON(r.Code, r.Data)
	return nil
}

func Success(data any, messages ...string) Response {
	msg := "success"
	if len(messages) > 0 {
		msg = messages[0]
	}

	return apiResponse{
		Code:    http.StatusOK,
		Data:    data,
		Message: msg,
	}
}

func Error(err error) Response {
	return apiResponse{
		Code:    http.StatusBadRequest,
		Message: err.Error(),
		Data:    nil,
	}
}
