package config

import (
	"github.com/zxdstyle/horizon/pkg/config"
	"github.com/zxdstyle/horizon/pkg/container"
	"github.com/zxdstyle/horizon/pkg/db"
	"github.com/zxdstyle/horizon/pkg/http"
)

func init() {
	container.Provide(nil, new(config.Config))
	container.Provide(nil, db.Service("db"))
	//container.Provide(nil, db.Service("clickhouse"))
	container.Provide(nil, http.Service())
}
