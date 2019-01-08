import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import localforage from 'localforage'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import './assets/sass/app.scss'

// Vue.use(VueAxios, axios)

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'larablog_vue'
})

Vue.config.productionTip = false

store
  .dispatch('auth/setToken')
  .then(() => {
    store.dispatch('auth/fetchUser').catch(() => {
      store.dispatch('auth/clearAuth')
      router.replace({ name: 'login' })
    })
  })
  .catch(() => {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
