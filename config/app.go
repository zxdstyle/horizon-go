package config

import (
	"github.com/zxdstyle/bloghub/pkg/config"
	"github.com/zxdstyle/bloghub/pkg/container"
	"github.com/zxdstyle/bloghub/pkg/db"
	"github.com/zxdstyle/bloghub/pkg/http"
)

func init() {
	container.Provide(nil, new(config.Config))
	container.Provide(nil, db.Service("db"))
	container.Provide(nil, db.Service("clickhouse"))
	container.Provide(nil, http.Service())
}
