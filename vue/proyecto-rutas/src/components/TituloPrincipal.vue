<template>
  <h1>
{{texto}}
  </h1>
</template>

<script>
export default {
name:'Titulo principal',
props:{
texto:String
},
components:{},
}
</script>

<style scoped>

h1{
    color:orange
}
</style>