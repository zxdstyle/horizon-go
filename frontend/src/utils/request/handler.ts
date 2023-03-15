import { AxiosError } from 'axios';
import useToast from '@/hooks/toast';

// 取消请求
const ErrCancel = 'ERR_CANCELED';

export function handleBackendError(err: AxiosError<Api.Response>) {
	console.error(err);

	const { code, response } = err;
	if (code === ErrCancel) return;
	if (!response) return;

	const { status, data } = response;

	const { error } = useToast(true);

	switch (status) {
		case 500:
			return error('500: 服务器内部错误~');
		case 422:
			return error(data.message);
		case 404:
			return error('404: 请求的资源不存在~');
		case 400:
			return error(data.message);
		default:
			return error('请求错误~');
	}
}
