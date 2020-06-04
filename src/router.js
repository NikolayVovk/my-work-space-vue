import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/v-modal',
      component: () => import('./pages/V-modal.vue')
    },
    {
      path:'/LocalStorage',
      component: () => import('./pages/LocalStorage.vue')
    },
    {
      path:'/v-for',
      component: () => import('./pages/V-for.vue')
    },
    {
      path:'/v-if',
      component: () => import('./pages/V-ifV-show.vue')
    },
    {
      path:'/pixi',
      component: () => import('./pages/Pixi.vue')
    },
    {
      path:'/json',
      component: () => import('./pages/Json.vue')
    }
  ]
})
