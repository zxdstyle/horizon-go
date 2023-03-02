package pkg

import (
	"fmt"
	"github.com/gookit/config/v2"
	"github.com/zxdstyle/horizon/pkg/container"
	"github.com/zxdstyle/horizon/pkg/db"
	"github.com/zxdstyle/horizon/pkg/http"
)

func App[T container.Service]() T {
	return container.Invoke[T](nil)
}

func IsDebug() bool {
	return config.Bool("APP_DEBUG", false)
}

func Server() *http.Server {
	return container.InvokeNamed[*http.Server](nil, "server.app")
}

func DB(name ...string) *db.DB {
	dbName := "db.db"
	if len(name) > 0 {
		dbName = fmt.Sprintf("db.%s", name[0])
	}
	return container.InvokeNamed[*db.DB](nil, dbName)
}
