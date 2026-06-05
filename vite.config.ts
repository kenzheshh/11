import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, PluginOption} from 'vite';

// Inline the (small) built CSS into <head> and drop the render-blocking
// <link rel="stylesheet">. The prerender step then carries the inlined
// <style> into each route's static HTML. (Adapted from a teammate's plugin.)
function inlineCssPlugin(): PluginOption {
  return {
    name: 'inline-css',
    enforce: 'post',
    generateBundle(_options, bundle) {
      let css = '';
      for (const key in bundle) {
        if (key.endsWith('.css')) {
          const chunk = bundle[key];
          if (chunk.type === 'asset' && typeof chunk.source === 'string') {
            css += chunk.source;
            delete bundle[key];
          }
        }
      }
      if (!css) return; // SSR build has no CSS — no-op

      const htmlChunk = bundle['index.html'];
      if (htmlChunk && htmlChunk.type === 'asset' && typeof htmlChunk.source === 'string') {
        let html = htmlChunk.source;
        html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/gi, '');
        html = html.replace('</head>', `<style>${css}</style>\n</head>`);
        htmlChunk.source = html;
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
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
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'vendor-react';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              if (id.includes('lucide')) {
                return 'vendor-lucide';
              }
              return 'vendor';
            }
          }
        }
      }
    }
  };
});
