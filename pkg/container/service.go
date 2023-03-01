package container

type (
	Service interface {
		Boot() error
	}

	NamedService interface {
		Name() string
	}

	DeferredService interface {
		DeferredBoot()
	}
)
