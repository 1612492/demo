import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src', 'assets'),
      '@components': resolve(__dirname, 'src', 'components'),
    },
  },
});
