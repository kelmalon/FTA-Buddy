import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svelte(),
        Icons({
            compiler: 'svelte',
        })
    ],
    base: "/app/",
    server: {
        proxy: {
            '/trpc': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
            '/ws': {
                target: 'http://localhost:3002',
                changeOrigin: true,
                ws: true
            }
        },
    }
})
