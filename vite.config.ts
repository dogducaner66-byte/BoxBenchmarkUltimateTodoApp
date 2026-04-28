import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const rootDirectory = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.join(rootDirectory, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: path.join(rootDirectory, 'src', 'test', 'setup.ts'),
  },
});
