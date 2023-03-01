package slog

import "github.com/sirupsen/logrus"

type logrusWriter struct {
	logger *logrus.Logger
}

func newLogrusWriter() *logrusWriter {
	logger := logrus.New()
	logger.SetFormatter(&logrus.JSONFormatter{})

	return &logrusWriter{
		logger: logger,
	}
}

func (w logrusWriter) OnlyShowError() {
	w.logger.SetLevel(logrus.ErrorLevel)
}

func (w logrusWriter) Info(message any) {
	w.logger.Info(message)
}

func (w logrusWriter) Error(err error) {
	w.logger.Error(err)
}

func (w logrusWriter) Infof(message any, fields ...Field) {
	fs := make(logrus.Fields)
	for _, val := range fields {
		fs[val.Key] = val.Value
	}

	w.logger.WithFields(fs).Info(message)
}

func (w logrusWriter) Errorf(err error, fields ...Field) {
	fs := make(logrus.Fields)
	for _, val := range fields {
		fs[val.Key] = val.Value
	}

	w.logger.WithFields(fs).Error(err)
}
