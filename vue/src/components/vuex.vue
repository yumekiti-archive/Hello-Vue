<template>
  <div class="vuex">

    <h1>Vuex</h1>

    <hr>

    <h2>State - Mutations</h2>
    
    <p> {{ count1 }} </p>

    <button @click="increment"> increment </button>

    <br><hr>

    <h2>Getters</h2>

    <p>doneTodos Todos: {{ doneTodos }}</p>
    <p>doneTodosCount Todos: {{ doneTodosCount }}</p>
    <p>getTodoById Todos: {{ getTodoById }}</p>

    <hr>

    <h2>Actions</h2>

    <p> {{ count }} </p>

    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>

    <hr>

    <h2>Modules</h2>

    <!--
      const moduleA = {
        state: () => ({ ... }),
        mutations: { ... },
        actions: { ... },
        getters: { ... }
      }

      const moduleB = {
        state: () => ({ ... }),
        mutations: { ... },
        actions: { ... }
      }

      const store = new Vuex.Store({
        modules: {
          a: moduleA,
          b: moduleB
        }
      })

      store.state.a // -> `moduleA` のステート
      store.state.b // -> `moduleB` のステート
    -->

    <hr>

    <h2>localstorage</h2>

    <button @click="reset"> reset </button>

    <br><hr>

    <misskey-timeline />

  </div>
</template>

<script>
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex';
import MisskeyTimeline from '../components/MisskeyTimeline';

export default {
  components: { MisskeyTimeline },
  name: 'vuex',
  computed: {
    
    count1 () {
      return this.$store.state.count
    },

    ...mapGetters([
      'doneTodos', 'doneTodosCount', 'getTodoById'
    ]),

    ...mapState([ 'count' ]),

  },
  methods: {

    reset: function() {
//      this.$store.commit('RESET_VUEX_STATE')
      this.$store.dispatch('resetCount');
    },

    ...mapActions([
      'increment'
    ]),


    decrement () {
      this.$store.commit('decrement');
    },
    testAction () {
      this.$store.dispatch('actionA').then(() => {
      })
    }

  }
}
</script>
