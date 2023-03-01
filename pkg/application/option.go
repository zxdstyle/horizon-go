package application

type (
	Option struct {
		Name string
	}

	OptionFunc func(app *Application)
)

func WithNamed(name string) OptionFunc {
	return func(app *Application) {
		app.option.Name = name
	}
}
