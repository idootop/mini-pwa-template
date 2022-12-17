import preact from '@preact/preset-vite';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [preact()],
  envPrefix: 'k',
  build: { outDir: 'build' },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
