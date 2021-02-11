<template>
  <div class="calculated">

    <h1>Calculated property - Watcher</h1>

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
      <p>{{ fullName }}</p>
    </div><br><hr>

  </div>
</template>

<script>
export default {
  name: 'calculated',
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
      lastName: 'Taro'
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
    }

  }
}
</script>