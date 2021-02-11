<template>
  <div class="itikara">

    <h1>app-1〜app-5</h1>

    <hr><br>

    <div id="app-1">
      {{ message1 }}
    </div><br><hr><br>

    <div id="app-2">
      <span v-bind:title="message2">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!<br>
        翻訳：マウスを数秒間私の上に置くと、動的にバインドされたタイトルが表示されます。
      </span><br>
    </div><br><hr><br>

    <div id="app-3">
      <button @click='seen = !seen'>変更</button>
      状態：{{ seen }}<br>
      <span v-if="seen">
        Now you see me
      </span>
    </div><br><hr><br>

    <div id="app-4">
      <ul>
        <li v-for="todo in todos" v-bind:key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div><br><hr><br>

    <div id="app-5">
      <p>{{ message3 }}</p>
      <button v-on:click="reverseMessage">Reverse Message</button>
    </div><br><hr><br>

  </div>
</template>

<script>
export default {
  name: 'itikara',
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

      message3: 'Hello Vue.js!'

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