package users

import (
	"github.com/zxdstyle/horizon/internal/model"
	"github.com/zxdstyle/horizon/pkg/base/repo"
)

type Repository interface {
	repo.Repository[model.User, uint]
}
