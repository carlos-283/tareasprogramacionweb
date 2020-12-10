import Vue from 'vue'
import VueRouter from 'vue-router'
import Peliculas from '../views/Peliculas.vue'
import Generos from '../views/Generos.vue'
import Inicio from '../views/Inicio.vue'
import Agregar from '../views/Agregar.vue'
import Editar from '../views/Editar.vue'
import AgregarGenero from '../views/AgregarGenero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: Peliculas
  },
  {
    path: '/generos',
    name: 'Generos',
    component: Generos
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/agregar',
    name: 'Agregar',
    component: Agregar,
  }
  ,
  {
    path: '/agregargenero',
    name: 'AgregarGenero',
    component: AgregarGenero,
  }
  ,
  {
    path: '/editar',
    name: 'Editar',
    component: Editar,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
