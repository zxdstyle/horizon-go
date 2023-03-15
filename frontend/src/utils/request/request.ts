import NProgress from '@/utils/nprogress';
import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse, AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { handleBackendError } from './handler';
import { AxiosCanceler } from './canceler';
import { store } from '@/store';

const axiosCanceler = new AxiosCanceler();

class RequestHttp {
	service: AxiosInstance;

	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				NProgress.start();

				// * 将当前请求添加到 pending 中
				axiosCanceler.addPending(config);

				const token = store.getState().auth.token;

				const headers = config.headers || new AxiosHeaders();

				headers.set({ authorization: token });

				return { ...config, headers };
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				// * 在请求结束后，移除本次请求(关闭loading)
				NProgress.done();

				const { data, config } = response;

				axiosCanceler.removePending(config);

				// * 成功请求（在页面上除非特殊情况，否则不用处理失败逻辑）
				return data.data;
			},
			async (error: AxiosError) => {
				NProgress.done();

				handleBackendError(error);

				return Promise.reject(error.response);
			}
		);
	}

	get<T>(url: string, params = {}): Promise<T> {
		return this.service.get(url, { params });
	}
	post<T>(url: string, params = {}): Promise<T> {
		return this.service.post(url, params);
	}
	put<T>(url: string, params = {}): Promise<T> {
		return this.service.put(url, params);
	}
	delete<T>(url: string, params = {}): Promise<T> {
		return this.service.delete(url, { params });
	}
}

export function createRequest(config: AxiosRequestConfig) {
	return new RequestHttp(config);
}
