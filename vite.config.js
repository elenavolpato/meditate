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
          "display": "standalone",
          "theme_color": "#700c8c",
          "icons": [
            {
              "src": "/icon.png",
              "sizes": "192x142",
              "type": "image/png"
            }
          ],
          "background_color": "#700c8c",
      },
    })
  ]
})
