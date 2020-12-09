import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Agregar from '../views/Agregar.vue'
import Editar from '../views/Editar.vue'
import Generos from '../views/Generos.vue'
import AgregarGenero from '../views/AgregarGenero.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/generos',
    name: 'Generos',
    component: Generos
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
