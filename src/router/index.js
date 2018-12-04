import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/home/home'
import login from '@/components/login/login'
Vue.use(VueRouter)
var router = new VueRouter({
  routes: [
    {path: '/home', component: home}, {path: '/login', component: login}
  ]
})
export default router
