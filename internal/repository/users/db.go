package users

import (
	"github.com/zxdstyle/horizon/internal/model"
	"github.com/zxdstyle/horizon/pkg/base/repo"
)

type dbRepository struct {
	*repo.GormRepository[model.User, uint]
}

func New() Repository {
	return &dbRepository{
		GormRepository: repo.New[model.User, uint](nil),
	}
}
