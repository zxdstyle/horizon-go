import { request } from '@/utils/request';

export function getRoutes() {
	return request.get<RouteItem[]>('/api/v1/routes');
}
