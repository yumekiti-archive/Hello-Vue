<template>
  <div class="bmi">

    <h1>BMI</h1>

    <hr><br>

    <span>身長：</span>
    <input v-model="height"><br>

    <span>体重：</span>
    <input v-model="weight"><br>

    <button @click="BMIcalc">calc</button><br><hr><br>

    <span>BMI: {{ BMI }} </span><br><br><hr>

  </div>
</template>

<script>
export default {
  name: 'bmi',
  data() {
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

      if(isNaN(this.BMI)) this.BMI = 0;
      if(!isFinite(this.BMI)) this.BMI = 0;
    }
  }
}
</script>