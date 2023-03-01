package http

type Config struct {
	Addr string `cfg:"addr" default:":8080"`
}
