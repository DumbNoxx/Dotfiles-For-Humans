import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue';
import ui from '@nuxt/ui/vue-plugin'

const app = createApp(App)
const head = createHead()

app.use(router)

app.use(ui)
app.use(head)

app.mount('#app')
