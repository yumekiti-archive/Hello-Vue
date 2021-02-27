// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//icon
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import hoge from './components/hoge';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' // add
import 'bootstrap-vue/dist/bootstrap-vue.css' // add

//vuex localStorage
import { initialState } from './store'; //追加

Vue.use(BootstrapVue)
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

// アイコンを読み込み
library.add(fas, far, fab);

// Vueコンポーネントを作成
Vue.component('v-fa', FontAwesomeIcon);

Vue.component('hoge', hoge);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
  created() {
    // created時に初期StateをlocalStorageに保存しておく。
    //localStorage.setItem('initialState', JSON.stringify(initialState));
    this.$store.dispatch('initialLoad');
  },
})
