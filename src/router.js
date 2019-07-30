import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chicago from './views/Chicago.vue'
import Seattle from './views/Seattle.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dog',
      name: 'dog',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Dog.vue')
    },
    {
      path: '/chicago',
      name: 'chicago',
      component: Chicago
    },
    {
      path: '/seattle',
      name: 'seattle',
      component: Seattle
    },
  ]
})