import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import node from "@sveltejs/adapter-node";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte()
]
})
