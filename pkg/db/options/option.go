package options

import "fmt"

type Option struct {
	Driver   string `cfg:"driver" default:"mysql"`
	Host     string `cfg:"host" default:"127.0.0.1"`
	Port     int    `cfg:"port" default:"3306"`
	Database string `cfg:"database" default:"default"`
	Username string `cfg:"username" default:"root"`
	Password string `cfg:"password"`
	Debug    bool   `cfg:"debug" default:"false"`
}

func (c Option) MysqlDSN() string {
	return fmt.Sprintf("%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local", c.Username, c.Password, c.Host, c.Port, c.Database)
}
