import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: './',
  server: {
    port: 4000,
    host: '172.20.10.2',//本机ip
    cors: true
  }
})
