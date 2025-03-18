import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"
import router  from "./router"
// scss
import '@/styles/index.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'virtual:svg-icons-register';
import "uno.css"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

createApp(App).use(createPinia()).use(router).mount('#app')

