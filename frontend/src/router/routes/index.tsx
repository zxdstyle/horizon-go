import { constRoutes, rootRoute } from './consts';
import { RouteObject, useRoutes } from 'react-router-dom';
import { transformRoutes } from '@/router/utils';

export function useDynamicRoutes(dynamic: RouteItem[]) {
	const dynamicRoute = {
		...rootRoute,
		children: transformRoutes(dynamic),
	} as RouteObject;

	const routes = [...constRoutes, dynamicRoute];

	return useRoutes(routes);
}
