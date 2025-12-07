import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// Defaults are fine: outputs to "build"
			// pages: 'build',
			// assets: 'build',
			// fallback: undefined
		}),

		// If the site will be at:
		//   https://<user>.github.io/MZLMACHINES
		// then base must be '/MZLMACHINES' in production.
		//
		// Replace "MZLMACHINES" with your repo name if different.
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/MZLMACHINES'
		},

		// Make sure everything is statically generated
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
