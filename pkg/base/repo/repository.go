package repo

import (
	"context"
	"github.com/zxdstyle/horizon/pkg/base/model"
)

type (
	Repository[M model.IModel, K model.Keyable] interface {
		First(ctc context.Context, primaryKey uint, mo *M) error
		FirstWithSlug(ctx context.Context, slugName string, slugValue any, mo *M) error
		Create(ctx context.Context, mo *M) error
		CreateInBatch(ctx context.Context, mos *[]M) error
		Update(ctx context.Context, primaryKey K, mo *M) error
		UpdateWithSlug(ctx context.Context, slugName string, slugValue any, mo *M) error
		Destroy(ctx context.Context, primaryKey K) error
		DestroyWithSlug(ctx context.Context, slugName string, slugValue any) error
	}

	RestfulRepository interface {
		Index(ctx context.Context)
		Store(ctx context.Context)
		Edit(ctx context.Context)
		Show(ctx context.Context)
		Delete(ctx context.Context)
	}
)
