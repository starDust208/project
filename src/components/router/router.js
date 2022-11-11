import { createRouter, createWebHashHistory } from 'vue-router'

import MyHome from '../Body/component/MyHome.vue'
import Myself from '../Body/component/Myself.vue'
import Recommend from '../Body/component/Recommend.vue'
import Login from '../Login/Login.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: MyHome},
    { path: '/recommend', component: Recommend},
    { path: '/self', component: Myself},
    { path: '/login', component: Login}
  ]
})

export default router
