<template>
  <div id="app">
    <hoge/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
tr {
  list-style-type: none;
  padding: 0;
}
td {
  display: inline-block;
  margin: 0 10px;
}
#link{
  color: #42b983;
}
</style>

<style>
  li {
    list-style: none;
  }
</style>