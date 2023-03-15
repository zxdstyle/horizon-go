import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { getViewComponent } from '@/router/utils/component';
import CheckLogin from '../guard/CheckLogin';
import Exception from '@/views/exception/Exception';
import InvalidPage from '@/views/exception/InvalidPage';

export function transformRoutes(routes: RouteItem[]): RouteObject[] {
	let homeRoutePath = '';

	const handleHomeRoute = (path: string) => {
		homeRoutePath = path;
	};

	const res = routes.map(item => transformRoute(item, handleHomeRoute));
	if (homeRoutePath.length > 0) {
		const homeRoute: RouteObject = {
			index: true,
			element: <Navigate to={homeRoutePath} />,
		};

		return [homeRoute, ...res];
	}
	console.log(res);
	return res;
}

export function transformRoute(route: RouteItem, handler: (path: string) => void): RouteObject {
	const { meta, path, component, children } = route;

	try {
		const comp = getViewComponent(component);

		let element: JSX.Element = comp;

		// 只有叶子路由（也就是没有子路由）才需要登录校验，中间路由不做校验
		if (!children || children.length === 0) {
			if (meta?.isPublic !== true) {
				element = <CheckLogin>{comp}</CheckLogin>;
			}
		}

		const item: RouteObject = { element, path };

		if (meta && meta?.isHome) {
			handler(path);
		}

		if (children && children.length > 0) {
			item.children = children.map(item => transformRoute(item, handler));
		}

		return item;
	} catch (error) {
		console.error((error as Error).message);
		return { path, element: <InvalidPage route={route} /> };
	}
}

/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteItem[] = []): RouteItem | undefined => {
	for (const item of routes) {
		if (item.path === path) return item;
		if (item.children) {
			const res = searchRoute(path, item.children);
			if (!res) return;
			if (Object.keys(res).length) {
				return res;
			}
		}
	}
};

export function transformMenu(routes: RouteItem[]) {}
