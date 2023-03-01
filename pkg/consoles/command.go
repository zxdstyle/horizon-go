package consoles

type (
	Command interface {
		Name() string
		Description() string
		Execute(args ...string) error
	}

	BootedCommand interface {
		Boot() error
	}
)
