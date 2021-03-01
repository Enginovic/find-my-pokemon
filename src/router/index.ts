import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue')
  },
  {
    path: '/pokemon-list',
    name: 'PokemonList',
    component: () => import(/* webpackChunkName: "pokemonList" */ '../views/PokemonList/PokemonList.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'Pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/Pokemons/Pokemon/Pokemon.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
