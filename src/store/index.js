import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    User
  },
  state: {
    isInputRequiredData: false
  },
  mutations: {
    UPDATE_iS_IPUT_REQUIRED_DATA (state, value) {
      state.isInputRequiredData = value
    }
  }
})

export default store