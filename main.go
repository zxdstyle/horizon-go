package main

import (
	"github.com/zxdstyle/horizon/config"
	"github.com/zxdstyle/horizon/internal/routes"
	"github.com/zxdstyle/horizon/pkg/application"
	"log"
)

func main() {
	app := application.New()

	app.Command(config.Consoles...)

	routes.InitRoutes()

	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
}
