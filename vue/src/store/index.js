import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
        state.count--
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('someMutation')
          resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
        return dispatch('actionA').then(() => {
          commit('someOtherMutation')
        })
    },
    async actionC ({ commit }) {
        commit('gotData', await getData())
    },
    async actionD ({ dispatch, commit} ) {
      await dispatch('actionC')
      commit('gotOtherData', await getOtherData())
    }
  },
  modules: {
  }
})
