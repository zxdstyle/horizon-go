package application

import (
	"github.com/zxdstyle/bloghub/pkg/consoles"
	"github.com/zxdstyle/bloghub/pkg/container"
)

var (
	defaultAppName = "app"
)

type Application struct {
	console *consoles.Console
	option  *Option
}

func New(fns ...OptionFunc) *Application {
	opt := &Option{
		Name: defaultAppName,
	}
	app := &Application{
		option: opt,
	}

	for _, fn := range fns {
		fn(app)
	}
	app.console = consoles.New(opt.Name)
	app.Command(consoles.Version{})

	return app
}

func (a *Application) Command(commands ...consoles.Command) {
	a.console.AddCommand(commands...)
}

func (a *Application) Service(services ...container.Service) {
	for i := range services {
		container.Provide(nil, services[i])
	}
}

func (a *Application) Run() error {
	return a.console.Execute()
}
