import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// GitHub Pages serves /404.html for unknown routes; use it as SPA fallback
			fallback: '404.html'
		}),

		paths: {
			// '' in dev, '/mzlmachines' when built in Actions
			base: process.env.NODE_ENV === 'development' ? '' : '/mzlmachines'
		}
	}
};

export default config;
