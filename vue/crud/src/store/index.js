import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personas: []
  },
  mutations: {
    SET_PERSONAS(state, dataPersonas) {
      state.personas = dataPersonas
    }
  },
  actions: {
    setPersonas({ commit }) {
      axios.get('http://localhost:3000/').then(response => {
        console.log(response.data)
        commit('SET_PERSONAS', response.data)
      }
      )
    },
    agregarPersona({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/', params).then(onComplete).catch
        (onError)
    }
  },
  modules: {
  }
  ,
  getters: {
    allPersonas: (state) => (state.personas)
  }
})
