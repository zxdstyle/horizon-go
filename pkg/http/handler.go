package http

import (
	"context"
	"github.com/zxdstyle/horizon/pkg/http/requests"
	"github.com/zxdstyle/horizon/pkg/http/responses"
)

type HandlerFunc func(ctx context.Context, req requests.IRequest) responses.Response
