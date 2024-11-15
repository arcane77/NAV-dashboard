// vite.config.js
import { fileURLToPath, URL } from 'url';

export default {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))  // Alias '@' to './src'
    }
  }
};
