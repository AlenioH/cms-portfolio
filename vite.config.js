import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 5173,
    fs: {
      allow: ['services'], // Add 'services' to the allow list if necessary
    },
  },
});
