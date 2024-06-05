import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import 'primevue/resources/themes/aura-light-green/theme.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(PrimeVue, { ripple: true })

app.use(router)

app.directive('ripple', Ripple)

app.mount('#app')
