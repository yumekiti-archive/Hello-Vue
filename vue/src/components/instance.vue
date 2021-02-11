<template>
  <div class="instance">

    <h1>Instance</h1>

    <hr><br>

    <div id="instance-1">
      {{ data.a }}
    </div><br><hr><br>

    <div id="instance-2">
      <span>initial value</span><br>
      {{ newTodoText }}<br>
      {{ visitCount }}<br>
      {{ hideCompletedTodos }}<br>
      {{ todos }}<br>
      {{ error }}<br>
    </div><br><hr><br>

    <div id="instance-3">
      <p>{{ obj.foo }}</p>
      <!-- これでは `foo` は更新されません！ -->
      <button v-on:click="obj.foo = 'baz'">Change it</button>
      <p> $data.a ： {{ $data.data.a }} </p>
    </div><hr><br>

    <div id="instance-4">
      console：a is: {{ data.a }}
    </div><br><hr>

  </div>
</template>

<script>

const data = { a: 1 }

const obj = {
  foo: 'bar'
}

Object.freeze(obj)

export default {
  name: 'instance',
  data() {

    //return data

    return {

      data,

      newTodoText: '',
      visitCount: 0,
      hideCompletedTodos: false,
      todos: [],
      error: null,

      obj

    }
  },
  created() {
    // `this` は vm インスタンスを指します
    console.log('a is: ' + this.data.a) // => "a is: 1"
  }
}
</script>