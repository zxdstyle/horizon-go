package model

import "time"

type User struct {
	ID        uint   `json:"id"`
	Username  string `json:"username"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
