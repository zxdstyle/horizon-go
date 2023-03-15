import { request } from '@/utils/request';

export function loginByPwd(params: ILoginByPwd) {
	return request.post<ILoginResponse>('/api/v1/login', params);
}
