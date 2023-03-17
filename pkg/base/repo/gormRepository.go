package repo

import (
	"context"
	"fmt"
	"github.com/zxdstyle/horizon/pkg/base/model"
	"github.com/zxdstyle/horizon/pkg/db"
	"gorm.io/gorm/clause"
)

type GormRepository[M model.IModel, K model.Keyable] struct {
	db *db.DB
}

func New[M model.IModel, K model.Keyable](db *db.DB) *GormRepository[M, K] {
	return &GormRepository[M, K]{
		db: db,
	}
}

func (repo *GormRepository[M, K]) First(ctx context.Context, primaryKey K, mo *M) error {
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", (*mo).PrimaryKeyName()), primaryKey).First(mo).Error
}

func (repo *GormRepository[M, K]) FirstWithSlug(ctx context.Context, slugName string, slugValue any, mo *M) error {
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", slugName), slugValue).First(mo).Error
}

func (repo *GormRepository[M, K]) Create(ctx context.Context, mo *M) error {
	return repo.db.WithContext(ctx).Omit(clause.Associations).Create(mo).Error
}

func (repo *GormRepository[M, K]) CreateInBatch(ctx context.Context, mos *[]M) error {
	return repo.db.WithContext(ctx).Omit(clause.Associations).Create(mos).Error
}

func (repo *GormRepository[M, K]) Update(ctx context.Context, primaryKey K, mo *M) error {
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", (*mo).PrimaryKeyName()), primaryKey).Updates(mo).Error
}

func (repo *GormRepository[M, K]) UpdateWithSlug(ctx context.Context, slugName string, slugValue any, mo *M) error {
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", slugName), slugValue).Updates(mo).Error
}

func (repo *GormRepository[M, K]) Destroy(ctx context.Context, primaryKey K) error {
	var mo M
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", mo.PrimaryKeyName()), primaryKey).Delete(mo).Error
}

func (repo *GormRepository[M, K]) DestroyWithSlug(ctx context.Context, slugName string, slugValue any) error {
	var mo M
	return repo.db.WithContext(ctx).Where(fmt.Sprintf("`%s` = ?", slugName), slugValue).Delete(mo).Error
}
