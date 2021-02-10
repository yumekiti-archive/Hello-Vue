<template>
  <div class="Home">

    <h1>
      <router-link to='/hello'>Welcome</router-link>
    </h1>
    
    <h3>
      <a href="https://jp.vuejs.org/v2/guide/index.html" target="_blank">はじめに</a>
    </h3>

    <div id="app-1">
      {{ message1 }}
    </div><br>

    <div id="app-2">
      <span v-bind:title="message2">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!<br>
        翻訳：マウスを数秒間私の上に置くと、動的にバインドされたタイトルが表示されます。
      </span><br>
    </div><br>

    <div id="app-3">
      <button @click='seen = !seen'>変更</button>
      状態：{{ seen }}<br>
      <span v-if="seen">
        Now you see me
      </span>
    </div>

    <div id="app-4">
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>

    <div id="app-5">
      <p>{{ message3 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div>

    <div id="app-6">
      <p>{{ message4 }}</p>
      <input v-model="message4">
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
    
      message1: 'Hello Vue!',

      message2: 'You loaded this page on ' + new Date().toLocaleString(),

      seen: true,

      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],

      message3: 'Hello Vue.js!',

      message4: 'Hello Vue!'


    }
  },
  methods: {
    reverseMessage: function () {
      this.message3 = this.message3.split('').reverse().join('')
    }
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
</style>