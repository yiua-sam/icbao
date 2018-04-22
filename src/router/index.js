import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Home',
      component: Home
    }
  ]
})
