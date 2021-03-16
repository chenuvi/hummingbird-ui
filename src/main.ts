import { createApp } from 'vue'
import App from './App.vue'
import Chenuvi from './components/Chenuvi.vue'
import SecondPage from './components/second-page.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes:[
        {path:'/',component:Chenuvi},
        {path:'/second',component:SecondPage},
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
