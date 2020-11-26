import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Peliculas from '../views/Peliculas.vue'
import DetallePelicula from '../views/DetallePelicula.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: Peliculas
  },
  {
    path: '/peliculas/:id',
    name: 'Detalle pelicula',
    component: DetallePelicula
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
