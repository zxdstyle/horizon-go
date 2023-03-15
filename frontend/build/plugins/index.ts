import type { PluginOption } from 'vite';
import compress from './compress';
import visualizer from './visualizer';
import react from '@vitejs/plugin-react-swc';
import icon from './icon';

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins: PluginOption[] = [react(), icon];

	if (viteEnv.VITE_COMPRESS === 'Y') {
		plugins.push(compress(viteEnv));
	}

	if (viteEnv.VITE_VISUALIZER === 'Y') {
		plugins.push(visualizer as PluginOption);
	}

	return plugins;
}
