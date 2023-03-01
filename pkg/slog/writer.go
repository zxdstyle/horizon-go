package slog

import "sync"

type Writer interface {
	Info(message any)
	Infof(message any, fields ...Field)
	Error(err error)
	Errorf(err error, fields ...Field)
	OnlyShowError()
}

var writer = new(atomicWriter)

func getWriter() Writer {
	w := writer.Load()
	if w == nil {
		w = writer.StoreIfNil(newLogrusWriter())
	}
	return w
}

type atomicWriter struct {
	lock   sync.RWMutex
	writer Writer
}

func (a *atomicWriter) Load() Writer {
	a.lock.Lock()
	defer a.lock.Unlock()

	return a.writer
}

func (a *atomicWriter) Store(w Writer) {
	a.lock.Lock()
	defer a.lock.Unlock()
	a.writer = w
}

func (a *atomicWriter) StoreIfNil(w Writer) Writer {
	a.lock.Lock()
	defer a.lock.Unlock()

	if a.writer == nil {
		a.writer = w
	}

	return a.writer
}
