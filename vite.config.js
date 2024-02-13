import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://sarabranco92.github.io/Portfolio/', // Adjust based on deployment
  plugins: [react()],
  build: {
    outDir: 'build',
  },

});
