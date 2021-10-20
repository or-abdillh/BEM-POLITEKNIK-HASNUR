import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueSplide from '@splidejs/vue-splide'

import './index.css'
import '@splidejs/splide/dist/css/splide.min.css'
import './style/reset.css'

createApp(App)
    .use(router)
    .use(VueSplide)
    .mount('#app')