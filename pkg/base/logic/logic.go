package logic

import (
	"context"
	"github.com/zxdstyle/horizon/pkg/base/model"
)

type (
	Base interface {
	}

	Restful[M model.IModel, K model.Keyable] interface {
		Show(ctx context.Context, primaryKey K) error
	}
)
