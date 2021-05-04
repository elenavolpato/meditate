import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store'
import './index.css'
import './fonts.css'

createApp(App).use(router).use(store).mount('#app')
