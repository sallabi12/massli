import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/maasli/',   // IMPORTANT for GitHub Pages
  plugins: [
    vue(),
  ],
})