// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.component('todo-item', {
  // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
  // このプロパティは todo と呼ばれます。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('todo-item-2', {
  template: `
    <li>
      {{ title }}
      <button @click="$emit('remove')">Remove</button>
    </li>
  `,
  props: ['title']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
