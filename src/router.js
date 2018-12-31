import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue'),
      meta: {
        layout: 'auth'
      }
    }
  ]
})
