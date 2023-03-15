package config

import (
	"github.com/zxdstyle/horizon/pkg/consoles"
	"github.com/zxdstyle/horizon/pkg/http"
)

var Consoles = []consoles.Command{
	new(http.Command),
}
