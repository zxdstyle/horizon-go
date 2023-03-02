package drivers

import (
	"fmt"
	"github.com/zxdstyle/horizon/pkg/db/options"
	"gorm.io/driver/clickhouse"
	"gorm.io/gorm"
	"strings"
)

type Clickhouse struct {
}

func (*Clickhouse) Connect(option options.Option) (*gorm.DB, error) {
	dsn := fmt.Sprintf("clickhouse://%s:%s@%s:%d/%s", option.Username, strings.TrimSpace(option.Password), option.Host, option.Port, option.Database)
	return gorm.Open(clickhouse.Open(dsn), &gorm.Config{})
}
