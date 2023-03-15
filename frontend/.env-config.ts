/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
    dev: {
        url: 'http://localhost:8080',
        urlPattern: '/api',
    },
    test: {
        url: 'http://localhost:8080',
        urlPattern: '/api',
    },
    prod: {
        url: 'http://localhost:8080',
        urlPattern: '/api',
    }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv) {
    const { VITE_SERVICE_ENV = 'dev' } = env;

    return serviceEnv[VITE_SERVICE_ENV];
}
