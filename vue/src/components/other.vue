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
    </div><br><hr><br>

    <button type="button" class="twitter" @click="twitterShare">
      <v-fa class="white" :icon="['fab', 'twitter']" />
      ツイート
    </button>
    
    <v-fa icon="coffee" />

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
    },

    twitterShare(){
      //シェアする画面を設定
      var shareURL = 'https://twitter.com/intent/tweet?text=' + "ツイッターシェアボタンのサンプルコード" + '&url=' + "http://localhost:8080/";  
      //シェア用の画面へ移行
      location.href = shareURL
    }

  }
}
</script>

<style>
  .white{
    color: white;
  }
  .twitter{
    border: none;
    background-color: #1DA1F2;
    color: white;
  }
</style>