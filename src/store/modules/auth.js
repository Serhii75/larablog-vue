import { isEmpty } from 'lodash'
import { setHttpToken } from '../../helpers'
import localforage from 'localforage'
import router from '../../router'
import config from '../../config'
import axios from 'axios'

// const uri = 'http://larablog.xx/'

const state = {
  user: {
    authenticated: false,
    data: null
  }
}

const getters = {
  user: state => {
    return state.user
  }
}

const actions = {
  register: ({ dispatch }, { payload, context }) => {
    let endpoint = config.uri + 'register'
    return axios
      .post(endpoint, payload)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        context.errors = error.response.data.errors
      })
  },

  login: ({ dispatch }, { payload, context }) => {
    let endpoint = config.uri + 'login'
    return axios
      .post(endpoint, payload)
      .then(response => {
        dispatch('setToken', response.data.token).then(() => {
          dispatch('fetchUser')
        })
      })
      .catch(error => {
        context.errors = error.response.data.errors
        context.message = error.response.data.message
      })
  },

  logout: ({ dispatch }) => {
    let endpoint = config.uri + 'logout'
    return axios
      .post(endpoint)
      .then(() => {
        dispatch('clearAuth')
        router.replace({ name: 'home' })
      })
      .catch(error => {
        console.log(error)
      })
  },

  fetchUser: ({ commit }) => {
    let endpoint = config.uri + 'me'
    return axios.get(endpoint).then(response => {
      commit('setAuthenticated', true)
      commit('setUserData', response.data.data)
    })
  },

  setToken: ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
      return dispatch('checkTokenExists').then(token => {
        setHttpToken(token)
      })
    }

    commit('setToken', token)
    setHttpToken(token)
  },

  checkTokenExists: () => {
    return localforage.getItem('access_token').then(token => {
      if (isEmpty(token)) {
        return Promise.reject('NO_STORAGE_TOKEN')
      }
      return Promise.resolve(token)
    })
  },

  clearAuth: ({ commit }) => {
    commit('setAuthenticated', false)
    commit('setUserData', null)
    commit('setToken', null)
    setHttpToken(null)
  }
}

const mutations = {
  setToken: (state, token) => {
    if (isEmpty(token)) {
      localforage.removeItem('access_token', token)
      return
    }

    localforage.setItem('access_token', token)
  },

  setAuthenticated: (state, trueOrFalse) => {
    state.user.authenticated = trueOrFalse
  },

  setUserData: (state, data) => {
    state.user.data = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
