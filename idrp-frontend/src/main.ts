import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import './style.css'

// Create app instance
const app = createApp(App)

// Create store instance (better for future plugins)
const pinia = createPinia()

const head = createHead()

// Register plugins
app.use(pinia)
app.use(router)
app.use(head)

// Mount app
app.mount('#app')

app.config.errorHandler = (err, instance, info) => {
  console.error('Global Error:', err)
}
