<template>
  <div class="rokukara">

    <hr><br>

    <div id="app-6">
      <p>{{ message4 }}</p>
      <input v-model="message4">
    </div><br><hr><br>

    <div id="app-7">
      <ul>
        <!--
          各 todo-item の内容を表す todo オブジェクトを与えます。
          これにより内容は動的に変化します。
          また後述する "key" を各コンポーネントに提供する必要があります。
        -->
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todo-item>
      </ul>
    </div><br><hr><br>

  </div>
</template>

<script>
export default {
  name: 'rokukara',
  data: function() {
    return {
      message4: 'Hello Vue!',

      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]

    }
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
</style>