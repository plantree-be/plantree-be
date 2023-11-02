import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import eslintPlugin from 'vite-plugin-eslint'
// eslintPlugin()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    port: 3000,
  },
})