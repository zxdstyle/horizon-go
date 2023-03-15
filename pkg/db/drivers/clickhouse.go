package drivers

import (
	"github.com/zxdstyle/horizon/pkg/db/options"
	"gorm.io/gorm"
)

type Clickhouse struct {
}

func (*Clickhouse) Connect(option options.Option) (*gorm.DB, error) {
	return nil, nil
}
