package widgets

type Button struct {
	base *baseWidget
}

func NewButton() *Button {
	return &Button{
		base: newBaseWidget("button"),
	}
}
