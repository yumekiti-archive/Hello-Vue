<template>
  <div class="other">

    <h1>Other</h1>

    <hr><br>

    <div id="other-1">
      <button v-on:click.once="myClick">click me!</button>
    </div><br><hr>

    <div id="other-2">
      <p>内容：{{ naiyou }}</p>
      <p>選択：{{ sel }}</p>
      <textarea rows="4" cols="40" v-model="naiyou" @select="selected"></textarea>
    </div>

  </div>
</template>

<script>
export default {
  name: 'other',
  data() {
    return{
      sel:"",
      naiyou:""
    }
  },
  methods: {
    myClick() {
      alert("click!!")
    },
    selected: function() {
      this.sel = window.getSelection().toString();
    }
  }
}
</script>