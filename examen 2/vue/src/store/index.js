import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
    ,
    todo: {
      id: "",
      name: "",
      tipos: [],
      prioridad: "",
      horas: 0,
    }
  },
  mutations: {

    SET_LIBROS(state, libros) {
      console.log("entro");
      state.todos = libros;
    },

    SET_TODOS(state, newTodo) {
      state.todos.push(newTodo);
    },
    SET_TODO(state, id) {
      state.todo = state.todos.find((item) => item.id === id)
    }
    ,
    DELETE_TODO(state, id) {
      console.log("ENTRO A DELETE");
      state.todos = state.todos.filter((item) => item.id !== id)
    }
    ,
    UPDATE_TODO(state, todo) {
      let todoEncontrado = state.todos.find((item) => item.id === todo.id);
      todoEncontrado = todo;

    }


  },
  actions: {
    setLibros({ commit }) {
      console.log("entro a action");
      axios.get('http://localhost:3000/obtenerlibros').then(
        (response) => {
          console.log("aaaaaa");
          commit('SET_LIBROS', response.data)
        }
      )
    }
    ,
    deleteTodo({ commit }, id) {
      commit('DELETE_TODO', id);
    }
    ,
    setTodo({ commit }, id) {
      commit('SET_TODO', id);
    },
    updateTodo({ commit }, todo) {
      commit('UPDATE_TODO', todo);
    }
  },
  getters: {
    allTodos: (state) => {
      return (state.todos)
    }
    ,
    singleTodo: (state) => (state.todo),
  },
  modules: {
  }
})
