import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',   // because the site is at https://maasli.ai
  plugins: [
    vue(),
  ],
})