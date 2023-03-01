package config

import (
	"github.com/gookit/config/v2"
	"github.com/gookit/config/v2/yaml"
)

type Config struct {
}

func (Config) Boot() error {
	config.WithOptions(
		config.ParseDefault,
		func(options *config.Options) {
			options.DecoderConfig.TagName = "cfg"
		},
	)
	config.AddDriver(yaml.Driver)

	if err := config.LoadFiles("./config.yml"); err != nil {
		return err
	}

	return nil
}
