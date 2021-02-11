import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Itikara from '@/components/itikara'
import Rokukara from '@/components/rokukara'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/itikara',
      name: 'Itikara',
      component: Itikara
    },
    {
      path: '/rokukara',
      name: 'rokukara',
      component: Rokukara
    }
  ]
})
