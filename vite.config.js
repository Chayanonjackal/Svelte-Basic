import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// import smelte from 'smelte/rollup-plugin-smelte'
// import {pcss} from 'smelte/rollup-plugin-smelte'
// import production from process.env.ROLLUP_WATCH
// import production from '@fullhuman/postcss-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte()
]
})
