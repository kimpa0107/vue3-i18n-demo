import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const resolve = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  alias: {
    '/@/': resolve('./src'),
    '/components/': resolve('./src/components'),
    '/locales/': resolve('./src/locales'),
  },
  plugins: [
    vue(),
  ],
});
