<template>
    <div>
      <a href='/peliculas' >Regresar</a>
        <h1>Detalle</h1>
        <h2>Titulo:</h2>
        <p>{{pelicula.title}}</p>
          <h2>Director:</h2>
        <p>{{pelicula.director}}</p>
    </div>
</template>

<script>
export default {
 name:'DetallePelicula',
data(){
    return{
    pelicula:{}}
},


  methods: {
    async consumirPelicula() {
      try {
        console.log("entro");
        const res = await fetch(`https://ghibliapi.herokuapp.com/films/${this.$route.params.id}`);
        const data = await res.json();
        this.pelicula=data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
    this.consumirPelicula();
  }

 
}

</script>

<style>

</style> 