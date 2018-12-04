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
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})
export default router
