package main

import (
	"context"
	"fmt"
	"github.com/go-mysql-org/go-mysql/canal"
	"github.com/golang-module/carbon/v2"
	"github.com/zxdstyle/horizon/config"
	"github.com/zxdstyle/horizon/internal/routes"
	"github.com/zxdstyle/horizon/model"
	"github.com/zxdstyle/horizon/pkg"
	"github.com/zxdstyle/horizon/pkg/application"
	"log"
)

var queue = make(chan *canal.RowsEvent, 1024)

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

	cfg := canal.NewDefaultConfig()
	cfg.Addr = "127.0.0.1:3306"
	cfg.User = "root"
	cfg.Password = "a8968640"
	cfg.Dump.TableDB = "aries"
	cfg.Dump.Tables = []string{"users"}

	c, err := canal.NewCanal(cfg)
	if err != nil {
		log.Fatal(err)
	}

	c.SetEventHandler(new(MyEventHandler))

	for i := 10; i > 0; i-- {
		go do()
	}

	c.Run()
}

type MyEventHandler struct {
	canal.DummyEventHandler
}

func do() {
	data := make([]model.User, 0)
	for {
		select {
		case e := <-queue:
			for _, row := range e.Rows {
				user := model.User{}
				for i, column := range e.Table.Columns {
					fmt.Sprintln(" %s: %v", column.Name, row[i])

					switch column.Name {
					case "id":
						user.ID = row[i].(uint64)
					case "username":
						user.Username = row[i].(string)
					case "created_at":
						user.CreatedAt = carbon.Parse(row[i].(string)).Carbon2Time()
					case "updated_at":
						user.UpdatedAt = carbon.Parse(row[i].(string)).Carbon2Time()
					}
				}
				data = append(data, user)
			}

			if len(data) >= 1000 {
				pkg.DB("clickhouse").WithContext(context.TODO()).Debug().CreateInBatches(data, 1000)
				data = make([]model.User, 0)
			}
		}
	}
}

func (h *MyEventHandler) OnRow(e *canal.RowsEvent) error {
	if e.Action != "insert" {
		return nil
	}

	queue <- e

	return nil
}
