interface ImportMeta {
	readonly env: ImportMetaEnv;
}

/*后台服务的环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type ServiceEnvType = 'dev' | 'test' | 'prod';

interface ImportMetaEnv {
	/** 后端服务的环境类型 */
	readonly VITE_SERVICE_ENV?: ServiceEnvType;
	/** 是否开启打包压缩 */
	readonly VITE_COMPRESS?: 'Y' | 'N';
	/** 压缩算法类型 */
	readonly VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';
	/** 开启请求代理 */
	readonly VITE_HTTP_PROXY?: 'Y' | 'N';
	/** 是否开启打包文件大小结果分析 */
	readonly VITE_VISUALIZER?: 'Y' | 'N';
}

/** 后台服务的环境配置 */
interface ServiceEnvConfig {
	/** 请求地址 */
	url: string;
	/** 匹配路径的正则字符串, 用于拦截地址转发代理(任意以 /开头 + 字符串, 单个/不起作用) */
	urlPattern: string;
}
