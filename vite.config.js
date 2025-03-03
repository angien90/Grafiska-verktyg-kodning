import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'https://github.com/Medieinstitutet/fed24d-grafiska-verktyg-panterkameleonterna',
});
