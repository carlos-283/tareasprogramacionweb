<template>
  <div>
    <p>adasdasd</p>
  <div v-for="t in doneTodos" :key="t.id">
    {{t.title}}
    <p> {{t.completed}} </p>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
name:'About' , 
computed:{
  ...mapGetters(['doneTodos'])
}
}
</script>

<style>

</style>