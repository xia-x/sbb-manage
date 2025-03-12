import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"
// scss
import '@/styles/index.scss'
// import 'virtual:svg-icons-register';
import "uno.css"


createApp(App).use(createPinia()).mount('#app')
