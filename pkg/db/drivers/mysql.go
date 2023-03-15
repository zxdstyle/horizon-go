package drivers

import (
	"github.com/zxdstyle/horizon/pkg/db/options"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Mysql struct {
}

func (*Mysql) Connect(option options.Option) (*gorm.DB, error) {
	db, err := gorm.Open(mysql.Open(option.MysqlDSN()), &gorm.Config{})
	if err != nil {
		return nil, err
	}

	if option.Debug {
		db = db.Debug()
	}

	return db, nil
}
