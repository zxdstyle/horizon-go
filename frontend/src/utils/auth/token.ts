import { EnumStorageKey } from '@/enums';
import { setLocal, getLocal, removeLocal } from '../storage';

/** 设置token */
export function setToken(token: string) {
	setLocal(EnumStorageKey.token, token);
}

/** 获取token */
export function getToken() {
	return getLocal<string>(EnumStorageKey.token) || '';
}

/** 去除token */
export function removeToken() {
	removeLocal(EnumStorageKey.token);
}
