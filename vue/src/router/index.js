import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Itikara from '@/components/itikara'
import Rokukara from '@/components/rokukara'
import BMI from '@/components/bmi'
import Instance from '@/components/instance'
import Syntax from '@/components/syntax'
import Calculated from '@/components/calculated'
import Other from '@/components/other'

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
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: BMI
    },
    {
      path: '/instance',
      name: 'instance',
      component: Instance
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: Syntax
    },
    {
      path: '/calculated',
      name: 'calculated',
      component: Calculated
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
