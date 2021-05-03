import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import './index.css'
import './fonts.css'
import 'es6-promise/auto'




createApp(App).use(router).use(Vuex).mount('#app')
