import autoprefixer from 'autoprefixer';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	root: 'src',
    base: '/logs',
	css: {
		postcss: {
			plugins: [autoprefixer]
		}
	},
	build: {
		outDir: fileURLToPath(new URL('dist/', import.meta.url)),
		chunkSizeWarningLimit: 1_000, // 1 MB
		emptyOutDir: true,
		rollupOptions: {
			output: {
				entryFileNames: `assets/[name].js`,
				chunkFileNames: `assets/[name].js`,
				assetFileNames: `assets/[name].[ext]`
			}
		}
	}
});
