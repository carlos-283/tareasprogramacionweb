<template>
  <div class="container">
    <TituloPrincial texto="Peliculas" />
    <Tarjeta 
    v-for="(p) in peliculas"
    :key="p.id"
    :titulo="p.title"
    :id="p.id" />
    <Tarjeta 
    titulo=""
    id=""/>
  </div>
</template>

<script>
import TituloPrincial from "../components/TituloPrincipal";
import Tarjeta from "../components/Tarjeta";

export default {
  name: "Peliculas",
  components: {
    TituloPrincial,
    Tarjeta,
  },
  data() {
    return { peliculas: [] };
  },
  methods: {
    async consumirPeliculas() {
      try {
        console.log("entro");
        const res = await fetch("https://ghibliapi.herokuapp.com/films/");
        const data = await res.json();
        this.peliculas=data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
    this.consumirPeliculas();
  }
};
</script>

<style>
</style>