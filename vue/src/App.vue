<template>
  <div id="app">
    <table>
      <tr>
        <td><router-link id="link" to="/">Home</router-link></td>
        <td><router-link id="link" to="/hello">Welcome</router-link></td>
        <td><router-link id="link" to="/itikara">1~5</router-link></td>
        <td><router-link id="link" to="/rokukara">6~7</router-link></td>
        <td><router-link id="link" to="/bmi">BMI</router-link></td>
        <td><router-link id="link" to="/other">Other</router-link></td>
        <td><router-link id="link" to="/instance">Instance</router-link></td>
        <td><router-link id="link" to="/syntax">Syntax</router-link></td>
        <td><router-link id="link" to="/calculatedwatcher">Calculated-Watcher</router-link></td>
      </tr>
    </table>
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
