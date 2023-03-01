package container

import "fmt"

var (
	serviceContainer   = New()
	singletonContainer = New()
)

func Provide(container *Container, service Service) {
	if _, ok := service.(DeferredService); !ok {
		if err := service.Boot(); err != nil {
			panic(err)
		}
	}
	fetchContainer(container).set(guessServiceName(service), service)
}

func Invoke[T Service](container *Container) T {
	var s T
	c := fetchContainer(container)
	serAny := c.get(guessServiceName(s))
	if ser, ok := serAny.(T); ok {
		return ser
	}
	panic(fmt.Errorf("expect %T, found %T, all: %s", s, serAny, c.keys()))
}

func InvokeNamed[T Service](container *Container, name string) T {
	var s T
	c := fetchContainer(container)
	serAny := c.get(name)
	if ser, ok := serAny.(T); ok {
		return ser
	}
	panic(fmt.Errorf("expect %T, found %T, all: %s", s, serAny, c.keys()))
}

func Singleton[T Service](container *Container) T {
	var s T
	name := guessServiceName(s)
	var serAny any
	serAny, exists := singletonContainer.search(name)
	if !exists {
		serAny = fetchContainer(container).get(name)
	}

	if ser, ok := serAny.(T); ok {
		return ser
	}

	panic(fmt.Errorf("expect %T, found %T", s, serAny))
}

func guessServiceName(service any) string {
	ser, ok := service.(NamedService)
	if ok {
		return ser.Name()
	}
	return fmt.Sprintf("%T", ser)
}

func fetchContainer(container *Container) *Container {
	if container == nil {
		return serviceContainer
	}
	return container
}
