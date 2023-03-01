package http

import (
	"github.com/zxdstyle/bloghub/pkg/container"
)

type Command struct {
}

func (c Command) Name() string {
	return "serve"
}

func (c Command) Description() string {
	return "Start an http server"
}

func (c Command) Execute(args ...string) error {
	name := defaultServerName
	if len(args) > 0 {
		name = args[0]
	}

	s := container.InvokeNamed[*Server](nil, "server."+name)

	s.Run()
	return nil
}
