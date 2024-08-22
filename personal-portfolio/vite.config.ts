import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'src/assets/data'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    }
  }
})
