import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',   // IMPORTANT for GitHub Pages
  plugins: [
    vue(),
  ],
})