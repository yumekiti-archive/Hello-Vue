<template>
  <div class="syntax">

    <h1>TemplateSyntax</h1>

    <hr><br>

    <div id="syntax-1">
      <span>Message: {{ msg }}</span><br>
      <span v-once>This will never change: {{ msg }}</span>
      <button @click="msg = 'piyo'">変更</button>
    </div><br><hr><br>

    <div id="syntax-2">
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div><br><hr>

    <div id="syntax-3">

      <h3>abridgement</h3>

      <p>v-bind</p>
      <!-- 完全な構文 -->
      <a v-bind:href="url"> ... </a><br>

      <!-- 省略記法 -->
      <a :href="url"> ... </a><br>

      <!-- 動的引数の省略記法 -->
      <a :[key]="url"> ... </a><br>

      <p>v-on</p>
      <!-- 完全な構文 -->
      <a v-on:click="doSomething"> ... </a><br>

      <!-- 省略記法 -->
      <a @click="doSomething"> ... </a><br>

      <!-- 動的引数の省略記法 -->
      <a @[event]="doSomething"> ... </a><br>

    </div><br><hr><br>
    
  </div>
</template>

<script>
export default {
  name: 'syntax',
  data() {
    return{

      msg:'hoge',

      rawHtml: '<span style="color: red">This should be red.</span>',

      url: '#/',

      doSomething: ''

    }
  }
}
</script>