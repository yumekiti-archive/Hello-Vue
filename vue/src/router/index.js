import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Itikara from '@/components/itikara'
import Rokukara from '@/components/rokukara'
import BMI from '@/components/bmi'
import Instance from '@/components/instance'
import Syntax from '@/components/syntax'
import CalculatedWatcher from '@/components/calculatedwatcher'
import Other from '@/components/other'
import Binding from '@/components/binding'
import Conditions from '@/components/conditions'
import List from '@/components/list'
import Todo from '@/components/todo'
import Vuex from '@/components/vuex'

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
      path: '/calculatedwatcher',
      name: 'calculatedwatcher',
      component: CalculatedWatcher
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    },
    {
      path: '/binding',
      name: 'binding',
      component: Binding
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: Conditions
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    }
  ]
})
