package config

import (
	"github.com/zxdstyle/bloghub/pkg/consoles"
	"github.com/zxdstyle/bloghub/pkg/http"
)

var Consoles = []consoles.Command{
	new(http.Command),
}
