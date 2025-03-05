import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: 'https://github.com/Medieinstitutet/fed24d-grafiska-verktyg-panterkameleonterna',

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./scss/_variables.scss";`,
      },
    },
  },
})
