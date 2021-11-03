import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userState: {}
  },
  getters: {
    getUser(state) {
      return state.userState
    },
  },
  mutations: {
    changeUserValue(state, user) {
      state.userState = user
    },
  },
  actions: {},
  modules: {},
})

export default store
