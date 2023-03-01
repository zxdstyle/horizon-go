package main

import (
	"github.com/zxdstyle/bloghub/config"
	"github.com/zxdstyle/bloghub/internal/routes"
	"github.com/zxdstyle/bloghub/pkg/application"
	"log"
)

func main() {
	app := application.New()

	app.Command(config.Consoles...)

	routes.InitRoutes()

	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
	//db := pkg.DB().WithContext(context.TODO())
	//
	//dto.SetDefault(db)
	//dto.Post.WithContext(context.TODO()).Where(dto.Post.Title.Like("as")).First()

	//g := gen.NewGenerator(gen.Config{
	//	OutPath:      "./dto",
	//	Mode:         gen.WithDefaultQuery,
	//	ModelPkgPath: "./model",
	//})
	//
	//g.UseDB(db)
	//
	//g.ApplyBasic(g.GenerateAllTable()...)
	//
	//g.Execute()
}
