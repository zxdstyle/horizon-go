package consoles

import "fmt"

type Version struct {
}

func (Version) Name() string {
	return "version"
}

func (Version) Description() string {
	return "Version"
}

func (Version) Execute(args ...string) error {
	fmt.Println("v0.0.1")
	return nil
}
