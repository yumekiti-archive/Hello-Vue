<template>
  <div class="list">

    <h1>List</h1>

    <hr>

    <div class="list-1">
      <ul id="array-rendering">
        <li v-for="item in items" :key="item.id">
          {{ item.message }}
        </li>
      </ul>
    </div><hr>

    <div class="list-2">
      <ul id="array-with-index">
        <li v-for="(item, index) in items" :key="item.id">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </div><hr>

    <div class="list-3">
      <ul id="v-for-object" class="demo">
        <li v-for="(value, k) in myObject" :key="k">
          {{ k }} : {{ value }}
        </li>
      </ul>
    </div><hr>

    <div class="list-4">
      <li v-for="(n, k) in evenNumbers" :key="k">{{ n }}</li>
    </div><hr>

    <div class="list-5">
      <ul v-for="(numbers, k) in sets" :key="k">
        <li v-for="(n, k) in even(numbers)" :key="k">{{ k }} : {{ n }}</li>
      </ul>
    </div><hr><br>

    <div class="list-6">
      <div id="range" class="demo">
        <span v-for="(n, k) in 10" :key="k">{{ n }} </span>
      </div>
    </div><br><hr>

    <div class="list-7">
      <ul>
        <template v-for="(item, k) in items">
          <li :key="k">{{ item.message }}</li>
        </template>
      </ul>
    </div><hr>

    <div class="list-8">
      <ul v-if="todos.length">
        <li v-for="(todo, k) in todos" :key="k">
          <span v-if="todo.isComplete">
            {{ todo.todo }}
          </span>
        </li>
      </ul>
      <p v-else>No todos left!</p>
    </div><hr>

  </div>
</template>

<script>
export default {
  name: 'list',
  data(){
    return{

      parentMessage: 'Parent',

      items: [{ message: 'Foo', id: 1 }, { message: 'Bar', id: 2 }],

      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },

      numbers: [ 1, 2, 3, 4, 5 ],

      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]],

      todos: [{isComplete: true, todo:"hoge"}, {isComplete: false, todo:"piyo"}]

    }
  },

  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }//キャッシュが残るのでこちらを推薦
  },

  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>

<style>
  li {
    list-style: none;
  }
</style>