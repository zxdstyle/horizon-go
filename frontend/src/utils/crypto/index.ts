import CryptoJS from 'crypto-js';

const CryptoSecret = '__cryptojs_secret_random__';

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypto(data: any) {
	const newData = JSON.stringify(data);
	return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypto(cipherText: string) {
	const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);
	if (originalText) {
		return JSON.parse(originalText);
	}
	return null;
}
