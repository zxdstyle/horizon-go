import React, { FC } from 'react';
import { views } from '@/views';
import { Auth, Blank, AdminLayout } from '@/layouts';

const layoutComponent: Record<string, FC> = {
	auth: Auth,
	admin: AdminLayout,
	blank: Blank,
};

/**
 * 获取导入的组件
 * @param routeKey - 路由key
 */
export function getViewComponent(routeKey: string) {
	const Component = layoutComponent[routeKey] || views[routeKey];

	if (!Component) {
		throw new Error(`路由“${routeKey}”没有对应的组件文件！`);
	}

	return <Component />;
}
