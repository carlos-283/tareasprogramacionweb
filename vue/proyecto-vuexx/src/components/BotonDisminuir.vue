<template>
  <button @click="accionDisminuir(1)">
    Disminuir
  </button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
name:'BotonDisminuir'
,
methods:{
      ...mapActions(['accionDisminuir'])
},
computed:{
}
}
</script>

<style>

</style>