<template>
  <div class="vuex">

    <h1>Vuex</h1>

    <hr><br>
    
    <p> {{ count }} </p>

    <button @click="increment"> increment </button>
    <button @click="commit"> commit </button>

    Completed Todos: {{ doneTodosCount }}

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex';

export default {
  name: 'vuex',
  computed: {
    
    count () {
      return this.$store.state.count
    },

    ...mapGetters([
      'doneTodos', 'doneTodosCount', 'getTodoById'
    ])

  },
  methods: {

    commit: function() {
      this.$store.commit('increment')
    },

    ...mapMutations([
      'increment',
    ])

  }
}
</script>
