import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const initialState = {
  conunt: 0
}
let inStorageInitialState = window.localStorage.getItem('initialState');
if(inStorageInitialState == null || inStorageInitialState == ''){
  window.localStorage.setItem('initialState', JSON.stringify(initialState));
}


async function saveCount(count) {
  localStorage.setItem('count', JSON.stringify({count}));
}

async function loadCount() {
  let json = localStorage.getItem('count');
  let countObj = JSON.parse(json);

  if(!(countObj && countObj.count)){
    countObj = {
      count: 0
    };
  }
  console.log(countObj);

  return countObj
}

export default new Vuex.Store({
  state: {
    initialState,
    count2: 0,
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
    /*increment (state) {
      state.count++
  },*/
    decrement (state) {
        state.count--
    },
    INCREMENT(state) {
      state.count = state.count + 1;
    },
    DECREMENT(state){
      state.count = state.count - 1;
    },
    SET_COUNT(state, count) {
      state.count = count;
    },



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
    },

    async increment({ commit, state }) {

      // apiやLocalStorageやIndexedDBへの保存処理とCOMMITを行う

      commit('INCREMENT');
      console.log(state.count);
      await saveCount(state.count);


    },

    async decrement({commit, state}) {
      commit('DECREMENT');
    },

    initialLoad({commit}) {

      loadCount().then((count) => {
        commit('SET_COUNT', count.count);
      });
    },

    resetCount({commit, state}) {
      commit('SET_COUNT', 0);
      saveCount(state.count);
    }

  },
  modules: {
  },

  //vuex localstorage
  plugins: [createPersistedState()],
})
