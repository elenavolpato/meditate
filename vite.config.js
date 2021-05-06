import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      manifest: {
          "name": "meditation timer",
          "short_name": "meditate",
          "lang": "en-US",
          "start_url": "/",
      },
    })
  ]
})
