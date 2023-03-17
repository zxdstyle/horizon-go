package model

import "github.com/zxdstyle/horizon/pkg/types"

type (
	Keyable interface {
		types.Number | string
	}

	Key interface {
		int | int64
	}

	IModel interface {
		PrimaryKeyName() string
	}

	Model[K Keyable] struct {
		ID K `json:"id"`
	}
)

func (m Model[K]) PrimaryKeyName() string {
	return "id"
}
