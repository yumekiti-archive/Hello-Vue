<template>
  <div class="calculated">

    <h1>Calculated property</h1>

    <hr><br>

    <div id="computed-1">
      <p>Has published books:</p>
      <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    </div><br><hr><br>

    <div id="computed-2">
      <div id="computed-basics">
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
      </div>
    </div><br><hr><br>

    <div id="computed-3">
      <p>{{ calculateBooksMessage }}</p>
    </div><br><hr><br>

    <div id="computed-4">
      <input v-model="firstName"><br>
      <input v-model="lastName">
      <p>{{ fullName }}</p>
    </div><hr>

    <h1>watcher</h1><hr><br>

    <div id="watch-1">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div><br><hr>

    <h2>Calculated vs Watcher</h2><hr><br>

    <div id="demo">{{ fullName }}</div><br><hr><br>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'calculatedwatcher',
  data() {
    return {

      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },

      firstName: 'Sato',
      lastName: 'Taro',

      question: '',
      answer: 'Questions usually contain a question mark. ;-)',

      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',

      firstName: 'Foo',
      lastName: 'Bar'

    }
  },
  computed: {

    // 算出 getter 関数
    publishedBooksMessage() {
      // `this` は vm インスタンスを指す
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    calculateBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },

    fullName: {
      // getter 関数
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter 関数
      set(newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },

    computed: {
      fullName() {
        return this.firstName + ' ' + this.lastName
      }
    }

  },

  watch: {

      // question が変わるたびに、この関数が実行される
      question(newQuestion, oldQuestion) {
        if (newQuestion.indexOf('?') > -1) {
          this.getAnswer()
        }
      },

      firstName(val) {
        this.fullName = val + ' ' + this.lastName
      },
      lastName(val) {
        this.fullName = this.firstName + ' ' + val
      }

    },

    methods: {
      getAnswer() {
        this.answer = 'Thinking...'
        axios
          .get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }

}
</script>