import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/index'
import store from './store/index'
import 'vant/lib/index.css'
import {Icon, Swipe, SwipeItem} from 'vant'
import SearchBar from './components/SearchBar.vue'
import Part from './components/Part.vue'
import Shop from './components/Shop.vue'

const pinia = createPinia()
const app = createApp(App)
    .component('SearchBar', SearchBar)
    .component('Part', Part)
    .component('Shop', Shop)
    .component('Icon', Icon)
    .component('Swipe', Swipe)
    .component('SwipeItem', SwipeItem)


app.use(router)
    .use(store)
    .use(pinia)
    .mount('#app')
