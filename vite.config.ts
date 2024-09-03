import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
//import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.34.129.34:8080',
        changeOrigin: true,
        secure: false,
      },
      '/oauth2': {
        target: 'http://3.34.129.34:8080',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
