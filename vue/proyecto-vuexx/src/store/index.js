import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    total: 200,
  },
  mutations: {
    aumentar(state, num) {
      state.total = state.total + num;
    },
    disminuir(state, num) {
      state.total = state.total - num;
    }
  },
  actions: {
    accionAumentar({ commit }, num) {
      commit('aumentar', num);
    },
    accionDisminuir({ commit }, num) {
      commit('disminuir', num);
    },
  },
  modules: {
  }
})
