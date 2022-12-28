import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Desayunos from '../views/Desayunos.vue'
import Entrantes from '../views/Entrantes.vue'
import Bebidas from '../views/Bebidas.vue'
import Guarniciones from '../views/Guarniciones.vue'
import PlatoFuerte from '../views/PlatoFuerte.vue'
import Sopas from '../views/Sopas.vue'
import Postres from '../views/Postres.vue'
import Ruleta from '../views/Ruleta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/desayunos',
  //   name: 'desayunos',
  //   component: Desayunos
  // },
  {
    path: '/entrantes',
    name: 'entrantes',
    component: Entrantes
  },
  {
    path: '/bebidas',
    name: 'bebidas',
    component: Bebidas
  },
  {
    path: '/guarniciones',
    name: 'guarniciones',
    component: Guarniciones
  },
  {
    path: '/platoFuerte',
    name: 'platoFuerte',
    component: PlatoFuerte
  },
  {
    path: '/sopas',
    name: 'sopas',
    component: Sopas
  },
  {
    path: '/postres',
    name: 'postres',
    component: Postres
  },
  {
    path: '/ruleta',
    name: 'ruleta',
    component: Ruleta
  },
]

const router = new VueRouter({
  routes
})

export default router
