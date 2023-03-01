package http

import (
	"context"
	"github.com/zxdstyle/bloghub/pkg/http/requests"
	"github.com/zxdstyle/bloghub/pkg/http/responses"
)

type HandlerFunc func(ctx context.Context, req requests.IRequest) responses.Response
