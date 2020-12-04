import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {}
  },
  mutations: {
    SET_TAREAS(state, dataTareas) {
      state.tareas = dataTareas
    }
  },
  actions: {
    setUsuario({ commit }, { id, onComplete, onError }) {
      axios.get('https://randomuser.me/api/')
        .then(onComplete)
        .catch(onError)
    },
  },
  modules: {
  }
  ,
  getters: {
    usuarioActual: ({ usuario }) => (usuario)
  }
})
