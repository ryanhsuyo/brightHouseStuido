import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'   // 需安装此模块

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3030,
    proxy: {
      '^/Api': {
        target: "http://localhot: 3000",
        changeOrigin: true,
        rewrite: (path) => path.replace('/^/Api/', '')

      }
    }
  }
})
