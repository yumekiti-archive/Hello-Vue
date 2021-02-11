<template>
  <div class="bmi">

    <h1>BMI</h1>

    <hr><br>

    <span>身長：</span>
    <input v-model="height" v-on:keyup="BMIcalc"><br>

    <span>体重：</span>
    <input v-model="weight" v-on:keyup="BMIcalc"><br><br><hr><br>

    <span>BMI: {{ BMI }} </span>

  </div>
</template>

<script>
export default {
  name: 'bmi',
  data: function() {
    return {
      height: null,
      weight: null,
      BMI: null
    }
  },
  methods: {
    BMIcalc: function () {
      //BMI ＝ 体重kg ÷ (身長m)2
      //センチなので100で割る
      this.BMI = this.weight / Math.pow(this.height/100,2)
    }
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
</style>