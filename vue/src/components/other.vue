<template>
  <div class="other">

    <h1>Other</h1>

    <hr><br>

    <div id="other-1">
      <button v-on:click.once="myClick">click me!</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'other',
  methods: {
    myClick() {
      alert("click!!")
    }
  }
}
</script>