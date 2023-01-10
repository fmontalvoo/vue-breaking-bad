import { createApp } from 'vue'

import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

import '@/store/characters.store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
// app.use(VueQueryPlugin)
VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 300,
                refetchOnReconnect: 'always',
            }
        }
    }
})

app.mount('#app')