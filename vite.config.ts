import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      {
        enforce: 'pre', ...mdx({
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
          providerImportSource: "@mdx-js/react"
        })
      },
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'prompt',
        includeAssets: ['favicon.svg', '*.pdf'],
        manifest: {
          name: 'The True Seed | Church of Christ',
          short_name: 'True Seed',
          description: 'A dynamic exploration of divine biblical prophecy.',
          theme_color: '#0f172a',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: 'favicon.svg',
              sizes: '192x192 512x512',
              type: 'image/svg+xml',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,pdf,json,ttf,woff2}'],
          maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50MB to accommodate PDFs
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  };
});
