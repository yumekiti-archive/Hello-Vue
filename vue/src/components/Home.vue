<template>
  <div class="Home">

    <h1>Study Vue</h1>
    
    <h2>Home</h2>

    <h3>
      <a href="https://jp.vuejs.org/v2/guide/index.html" target="_blank">Reference</a><br>
      <a href="https://v3.ja.vuejs.org/guide/introduction.html" target="_blank">Reference v3</a>
    </h3>

    <hr>
    <h4>vuex</h4>
    <p> {{ count }} </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
}
</script>