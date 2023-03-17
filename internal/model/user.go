package model

import (
	"github.com/zxdstyle/horizon/pkg/base/model"
	"time"
)

type User struct {
	model.Model[uint]
	Username  string    `json:"username"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}
