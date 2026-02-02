import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/yeuthuvandao/',
  plugins: [react()],
  build: {
    // Tối ưu cho production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
          }
        },
      },
    },
    // Tối ưu chunk size
    chunkSizeWarningLimit: 1000,
  },
  // Tối ưu cho dev
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
})
