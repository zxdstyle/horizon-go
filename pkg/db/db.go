package db

import (
	"context"
	"fmt"
	"github.com/gookit/config/v2"
	"github.com/zxdstyle/horizon/pkg/db/drivers"
	"github.com/zxdstyle/horizon/pkg/db/options"
	"gorm.io/gorm"
)

type DB struct {
	name     string
	instance *gorm.DB
}

func Service(connection string) *DB {
	return &DB{
		name: connection,
	}
}

func (d *DB) Boot() error {
	if err := d.connect(); err != nil {
		return err
	}
	return nil
}

func (d *DB) Name() string {
	return fmt.Sprintf("db.%s", d.name)
}

func (d *DB) WithContext(ctx context.Context) *gorm.DB {
	return d.instance.WithContext(ctx)
}

func (d *DB) connect() error {
	var cfg options.Option
	if err := config.BindStruct(d.name, &cfg); err != nil {
		return fmt.Errorf("failed to fetch database `%s` config, err: %s", d.name, err)
	}

	driver, err := drivers.GetDriver(cfg.Driver)
	if err != nil {
		return err
	}
	instance, err := driver.Connect(cfg)
	if err != nil {
		return err
	}

	d.instance = instance
	return nil
}
