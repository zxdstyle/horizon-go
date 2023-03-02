package container

import "github.com/zxdstyle/horizon/pkg/co"

type (
	Container struct {
		services *co.Map[string, any]
	}
)

func New() *Container {
	return &Container{
		services: co.NewMap[string, any](),
	}
}

func (c *Container) set(key string, service any) {
	c.services.Set(key, service)
}

func (c *Container) get(key string) any {
	return c.services.Get(key)
}

func (c *Container) search(key string) (any, bool) {
	return c.services.Search(key)
}

func (c *Container) del(key string) {
	c.services.Remove(key)
}

func (c *Container) keys() []string {
	return c.services.Keys()
}
