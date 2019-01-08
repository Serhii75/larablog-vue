import axios from 'axios'
import config from '../../config'

const state = {
  posts: {
    data: [],
    links: null,
    meta: null
  }
}

const getters = {
  posts: state => {
    return state.posts
  }
}

const actions = {
  fetchPosts: ({ commit }, { context }) => {
    let endpoint = config.uri + 'posts'
    return axios.get(endpoint).then(response => {
      commit('setData', response.data)
    })
  }
}

const mutations = {
  setData: (state, data) => {
    state.posts = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
