import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store'
import './index.css'
import './fonts.css'

createApp(App).use(router).use(store).mount('#app')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('src/service-worker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

/* 
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('src/service-worker.js');
  console.log('Service Worker registered');
}; */