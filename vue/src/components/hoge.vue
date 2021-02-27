<template>
  <div>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/"  exact-active-class='active' class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link  exact-active-class='active' to="/hello" class="nav-link">Welcome</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/itikara">1~5</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/rokukara">6~7</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/bmi">BMI</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/other">Other</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/instance">Instance</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/syntax">Syntax</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/calculatedwatcher">Calculated-Watcher</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/binding">Binding</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/list">list</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/todo">Todo</router-link>
      </li>
      <li>
        <router-link exact-active-class='active' class="nav-link" to="/vuex">Vuex</router-link>
      </li>
    </ul>

    <br>

  </div>
</template>

<script>
export default {
  name: 'hoge',
}
</script>