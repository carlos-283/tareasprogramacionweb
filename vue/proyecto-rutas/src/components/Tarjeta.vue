<template>
    <div class="alert alert-primary">
    <router-link :to="`/peliculas/${id}`"> 
    <p>{{titulo}}</p>
    </router-link>

    </div>
</template>

<script>
export default {
name:'Tarjeta' , 
props:{
    titulo:String,
    id:String,
}
}
</script>

<style>

</style>