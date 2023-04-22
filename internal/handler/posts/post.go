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
						Icon:     "mdi:home",
					},
				},
				{
					Path:      "/profile",
					Component: "admin_profile",
					Meta: Meta{
						Title: "Profile",
						Icon:  "mdi:account",
					},
				},
				{
					Path:      "/marketplace",
					Component: "admin_marketplace",
					Meta: Meta{
						Title: "Marketplace",
						Icon:  "mdi:cart-outline",
					},
				},
				{
					Path:      "/datatable",
					Component: "admin_datatable",
					Meta: Meta{
						Title: "Datatable",
						Icon:  "mdi:bar-chart",
					},
				},
				{
					Path:      "/table",
					Component: "admin_table",
					Meta: Meta{
						Title: "Table",
						Icon:  "mdi:bar-chart",
					},
				},
				{
					Path:      "/users",
					Component: "admin_users",
					Meta: Meta{
						Title: "Users",
						Icon:  "mdi:user",
					},
				},
				{
					Path:      "/tasks",
					Component: "tasks",
					Meta: Meta{
						Title: "任务",
						Icon:  "mdi:user",
					},
				},
			},
		},
	}

	return responses.Success(routes)
}
