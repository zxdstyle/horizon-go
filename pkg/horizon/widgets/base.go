package widgets

import json "github.com/json-iterator/go"

type baseWidget struct {
	options map[string]any
}

func newBaseWidget(name string) *baseWidget {
	w := &baseWidget{
		options: make(map[string]any),
	}
	w.Set("component", name)
	return w
}

func (w *baseWidget) Set(key string, value string) {
	w.options[key] = value
}

func (w *baseWidget) MarshalJSON() ([]byte, error) {
	return json.Marshal(w.options)
}
