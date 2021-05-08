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
          "short_name": "meditation timer",
          "lang": "en-US",
          "start_url": "/",
          "display": "standalone",
          "description": "The perfect timer to keep track of your meditation.",
          "background_color": "#610c8c",
      },
      /* workbox: {

      } */
    }),
    
  ]
})
