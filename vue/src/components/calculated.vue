<template>
  <div class="calculated">

    <h1>Calculated property - Watcher</h1>

    <hr><br>

    <div id="computed-1">
      <p>Has published books:</p>
      <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    </div>

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
      }
    }
  }
}
</script>