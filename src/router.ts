import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/home.vue"
import Doc from "./views/doc.vue"
import DocDemo from './components/doc-demo.vue'
import Switch from './components/SwitchDemo.vue'
import Button from './components/ButtonDemo.vue'
import Dialog from './components/DialogDemo.vue'
import Tabs from './components/tabs.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', component: DocDemo },
                { path: 'switch', component: Switch },
                { path: 'button', component: Button },
                { path: 'dialog', component: Dialog },
                { path: 'tabs', component: Tabs }
            ]
        },
    ]
})

router.afterEach((to, from) => {
    console.log("路由切换了---------------------------");
    console.log('router to: ', to);
    console.log('router from: ', from);
  })
  