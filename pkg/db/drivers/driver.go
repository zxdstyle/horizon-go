package drivers

import (
	"fmt"
	"github.com/zxdstyle/bloghub/pkg/db/options"
	"gorm.io/gorm"
)

type Driver interface {
	Connect(option options.Option) (*gorm.DB, error)
}

func GetDriver(name string) (Driver, error) {
	switch name {
	case "mysql":
		return new(Mysql), nil
	case "clickhouse":
		return new(Clickhouse), nil
	default:
		return nil, fmt.Errorf("暂不支持%s驱动", name)

	}
}
