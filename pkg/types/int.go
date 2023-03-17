package types

type (
	Int interface {
		~int | ~int8 | ~int16 | ~int32 | ~int64
	}

	Uint interface {
		~uint | ~uint8 | ~uint16 | ~uint32
	}

	Float interface {
		~float32 | ~float64
	}

	Number interface {
		Int | Uint | Float
	}
)
