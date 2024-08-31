import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'src': path.resolve(__dirname)
		}
	},
	plugins: [sveltekit()]
});
