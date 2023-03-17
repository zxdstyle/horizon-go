package logic

import (
	"context"
	"github.com/zxdstyle/horizon/pkg/base/model"
)

type restful[M model.IModel, K model.Keyable] struct {
}

func NewRestful[M model.IModel, K model.Keyable]() Restful[M, K] {
	return &restful[M, K]{}
}

func (r restful[M, K]) Show(ctx context.Context, primaryKey K) error {
	//TODO implement me
	panic("implement me")
}
