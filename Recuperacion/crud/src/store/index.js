import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: []
  },
  mutations: {
    SET_TAREAS(state, dataTareas) {
      state.tareas = dataTareas
    }
  },
  actions: {
    setTareas({ commit }) {
      axios.get('http://localhost:3000/').then(response => {
        console.log(response.data)
        commit('SET_TAREAS', response.data)
      }
      )
    },
    obtenerTarea({ commit }, { id, onComplete, onError }) {
      axios.get(`http://localhost:3000/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    eliminarTarea({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/${id}`)
        .then(onComplete)
        .catch(onError)
    },
  },
  modules: {
  }
  ,
  getters: {
    allTareas: ({ tareas }) => (tareas)
  }
})
