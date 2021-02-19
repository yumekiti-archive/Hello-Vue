<template>
  <div class="conditions">

    <h1>Conditions-Rendering</h1>

    <hr><br>

    <div class="conditions-1">
      <button @click="awesome = !awesome">変更： {{ awesome }} </button>
      <h1 v-if="awesome">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div><hr><br>

    <div class="conditions-2">
      <button @click="ok = !ok">変更： {{ ok }} </button>
      <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
    </div><br><hr><br>

    <div class="conditions-3">
      <button @click="rnd = Math.random()">ランダム変更</button><br><br>
      <div v-if=" rnd > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>
    </div><br><hr><br>

    <div class="conditions-4">
      <button @click="type = 'A'">Aに変更</button>
      <button @click="type = 'B'">Bに変更</button>
      <button @click="type = 'C'">Cに変更</button>
      <button @click="type = 'D'">Dに変更</button><br><br>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Not A/B/C
      </div>
    </div><br><hr>

    <div class="conditions-5">
      <button @click="ok_2 = !ok_2">変更： {{ ok_2 }} </button>
      <h1 v-show="ok_2">Hello!</h1>
    </div>

  </div>
</template>

<script>
export default {
  name: 'conditions',
  data(){
    return{
      awesome:true,

      ok:true,

      rnd:null,

      type:'A', 

      ok_2:true
    }
  }
}
</script>