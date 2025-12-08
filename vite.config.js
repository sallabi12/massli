import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/massli/',   // IMPORTANT for GitHub Pages
  plugins: [
    vue(),
  ],
})