package posts

import (
	"context"
	"github.com/zxdstyle/horizon/pkg/http/requests"
	"github.com/zxdstyle/horizon/pkg/http/responses"
)

var Post = &apiPost{}

type apiPost struct {
}

type route struct {
	Path      string  `json:"path"`
	Component string  `json:"component"`
	Children  []route `json:"children"`
	Meta      Meta    `json:"meta"`
}

type Meta struct {
	IsHome   bool   `json:"isHome"`
	IsPublic bool   `json:"isPublic"`
	Title    string `json:"title"`
	Icon     string `json:"icon"`
}

func (*apiPost) List(ctx context.Context, req requests.IRequest) responses.Response {
	routes := []route{
		{
			Path:      "/",
			Component: "admin",
			Children: []route{
				{
					Path:      "/dashboard",
					Component: "admin_default",
					Meta: Meta{
						IsHome:   true,
						IsPublic: true,
						Title:    "Dashboard",
						Icon:     "",
					},
				},
				{
					Path:      "/profile",
					Component: "admin_profile",
					Meta: Meta{
						Title: "Profile",
						Icon:  "",
					},
				},
			},
		},
	}

	return responses.Success(routes)
}
