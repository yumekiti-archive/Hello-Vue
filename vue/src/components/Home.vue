<template>
  <div class="Home">
    <router-link to='/hello'>HelloWorld</router-link>
    <p>{{ hoge }}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function() {
    return {
     hoge: 'test'
    }
  }
}
</script>

