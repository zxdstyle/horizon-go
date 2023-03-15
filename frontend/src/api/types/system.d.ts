type Layout = 'auth' | 'admin' | 'blank';

interface RouteItem {
	path: string;
	component: string | Layout;
	children?: RouteItem[];
	meta: RouteMeta;
}

interface RouteMeta {
	/** 路由标题(可用来作document.title或者菜单的名称) */
	title: string;
	/** 菜单和面包屑对应的图标 */
	icon?: string;
	/** 是否为首页 */
	isHome?: boolean;
	/** 是否为公开页面，不登录即可访问 **/
	isPublic?: boolean;
}

interface ILoginByPwd {
	email: string;
	password: string;
}

interface ILoginResponse {
	username: string;
	token: string;
}
