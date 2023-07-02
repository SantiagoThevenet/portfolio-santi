import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: "/portfolio-santi/",
  build: {
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()',
    },
  },
});
