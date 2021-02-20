<template>
  <div class="todo">

    <h1>Todo</h1>

    <hr><br>

    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        />
        <button>Add</button>
      </form>
      <ul>
        <todo-item-2
          v-for="(todo, index) in todos"
          :key="todo.id"
          :title="todo.title"
          @remove="todos.splice(index, 1)"
        ></todo-item-2>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ],
      nextTodoId: 4
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
}
</script>

<style>
  li {
    list-style: none;
  }
</style>