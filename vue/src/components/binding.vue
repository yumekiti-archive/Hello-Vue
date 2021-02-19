<template>
  <div class="binding">

    <h1>Binding</h1>

    <hr><br>

    <div class="binding-1">
      <button @click="classObject.isActive = !classObject.isActive">変更：{{ classObject.isActive }}</button>
      <div :class="classObject"><p>文字が変化</p></div>
    </div><hr>

    <div class="binding-2">
      <p :class="hoge">Hoge</p>
      <p :class="[hoge, piyo]">Piyo</p>
    </div><hr><br>
    
  </div>
</template>

<script>
export default {
  name: 'binding',
  data() {
    return {

      classObject: {
        isActive: true,
      },

      hoge: 'active-1',
      piyo: 'active-2'

    }
  }
}
</script>

<style>

.isActive{
    color:red;
}

.active-1{
  color:blue;
}

.active-2{
  font-size: 30px;
}

</style>
