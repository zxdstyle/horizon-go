import { defineConfig, loadEnv } from 'vite';
import { getRootPath, getSrcPath, setupVitePlugins, createViteProxy } from './build';
import { getServiceEnvConfig } from '.env-config';

// https://vitejs.dev/config/
export default defineConfig(configEnv => {
	const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv;

	const rootPath = getRootPath();
	const srcPath = getSrcPath();

	const envConfig = getServiceEnvConfig(viteEnv);

	const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'Y';

	return {
		resolve: {
			alias: {
				'~': rootPath,
				'@': srcPath,
			},
		},
		plugins: setupVitePlugins(viteEnv),
		server: {
			host: '0.0.0.0',
			port: 3200,
			open: true,
			proxy: createViteProxy(isOpenProxy, envConfig),
		},
		build: {
			reportCompressedSize: false,
		},
	};
});
