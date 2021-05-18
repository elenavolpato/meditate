const cacheName = "meditate-v1";
const filesToChache = [
  "./index.html",
  "./App.vue",
  "./src/Meditate.vue",
  "./src/Home.vue",
  "./src/AboutApp.vue",
  "fonts.css",
  "index.css",
  ".public/noun_wrong_1890786.svg",
  "./public/noun_play_559093.svg",
  "./public/noun_Question_1955781.svg",
  "./public/noun_Stop_559095.svg",
  "./public/android-chrome-192x192.png",
  "./public/android-chrome-256x256.png",
  "./public/apple-touch-icon.png",
  "./public/browserconfig.xml",
  "./public/favicon-16x16.png",
  "./public/favicon-32x32.png",
  "./public/favicon.ico",
  "./public/mstile-150x150.png",
  "./public/safari-pinned-tab.svg",
  "./public/site.webmanifest",
  "./public/fonts",
  "./src/router/index.js"
  
];
// Perform install steps
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  caches.open(cacheName).then(function(cache) {
    console.log("[ServiceWorker] Caching app shell");
    return cache.addAll(filesToCache);
  })
});

self.addEventListener("activate", function(event) {
  console.log("[Servicework] Activate");
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log("[ServiceWorker] Removing old cache shell", key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] Fetch");
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );

});