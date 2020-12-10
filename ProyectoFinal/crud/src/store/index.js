import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peliculas: [],
    generos: []
  },
  mutations: {
    SET_PELICULAS(state, _peliculas) {
      state.peliculas = _peliculas
    },
    SET_GENEROS(state, _generos) {
      state.generos = _generos
    }
  },
  actions: {

    setPeliculas({ commit }) {
      axios.get('http://localhost:3000/').then(response => {
        commit('SET_PELICULAS', response.data)
      })
    },
    agregarPelicula({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/', params).then(onComplete).catch
        (onError)
    },
    editarPelicula({ commit }, { params, onComplete, onError }) {
      axios.put(`http://localhost:3000/${params.id}`, params).then(onComplete).catch
        (onError)
    },
    obtenerPelicula({ commit }, { id, onComplete, onError }) {
      axios.get(`http://localhost:3000/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    eliminarPelicula({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/${id}`)
        .then(onComplete)
        .catch(onError)
    },




    setGeneros({ commit }) {
      axios.get('http://localhost:3000/generos').then(response => {
        commit('SET_GENEROS', response.data)
      })
    },
    agregarGenero({ commit }, { params, onComplete, onError }) {
      axios.post('http://localhost:3000/generos', params).then(onComplete).catch
        (onError)
    },
    editarGenero({ commit }, { params, onComplete, onError }) {
      axios.put(`http://localhost:3000/generos/${params.id}`, params).then(onComplete).catch
        (onError)
    },
    obtenerGenero({ commit }, { id, onComplete, onError }) {
      axios.get(`http://localhost:3000/generos/${id}`)
        .then(onComplete)
        .catch(onError)
    },
    eliminarGenero({ commit }, { id, onComplete, onError }) {
      axios.delete(`http://localhost:3000/generos/${id}`)
        .then(onComplete)
        .catch(onError)
    },




  },
  modules: {
  }
  ,
  getters: {
    allPeliculas: (state) => (state.peliculas),
    allGeneros: (state) => (state.generos)
  }
})
