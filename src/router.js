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
      path: '/categories',
      name: 'categories',
      component: () => import('./views/Home'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: () => import('./views/Home'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/posts/:id',
      name: 'posts.show',
      component: () => import('./views/posts/Post.vue'),
      meta: {
        layout: 'default'
      }
    },
    {
      path: '/posts/new',
      name: 'posts.new',
      component: () => import('./views/posts/NewPost.vue'),
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
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/auth/Register.vue'),
      meta: {
        layout: 'auth'
      }
    }
  ]
})
