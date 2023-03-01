package slog

func OnlyShowError() {
	getWriter().OnlyShowError()
}

func Info(message any) {
	getWriter().Info(message)
}

func Infof(message any, fields ...Field) {
	getWriter().Infof(message, fields...)
}

func Error(err error) {
	getWriter().Error(err)
}

func Errorf(err error, fields ...Field) {
	getWriter().Errorf(err, fields...)
}
