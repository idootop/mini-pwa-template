import preact from '@preact/preset-vite';
import * as path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  envPrefix: 'k',
  plugins: [
    preact(),
    createHtmlPlugin({
      minify: true,
    }),
    VitePWA({
      // selfDestroying: true,
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,jpg,png,svg}'],
      },
      manifest: {
        name: 'PWA Test Name',
        short_name: 'PWA Test',
        description: 'description',
        theme_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    open: false,
  },
});
