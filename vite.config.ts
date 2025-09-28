import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [svelte()],
  build: {
    target: 'esnext',
  },
  esbuild: {
    drop: ['console'],
  },
  server: {
    open: true,
  },
})
