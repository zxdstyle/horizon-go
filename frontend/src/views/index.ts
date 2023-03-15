import { FC, lazy, LazyExoticComponent } from 'react';

export const views: Record<string, LazyExoticComponent<FC>> = {
	auth_login: lazy(() => import('@/views/auth/login')),

	admin_default: lazy(() => import('@/views/admin/default')),
	admin_profile: lazy(() => import('@/views/admin/profile')),
	admin_datatable: lazy(() => import('@/views/admin/dataTables')),
	admin_table: lazy(() => import('@/views/admin/table')),
	admin_marketplace: lazy(() => import('@/views/admin/marketplace')),

	exception: lazy(() => import('@/views/exception/Exception')),
	exception_404: lazy(() => import('@/views/exception/NotFound')),
};
