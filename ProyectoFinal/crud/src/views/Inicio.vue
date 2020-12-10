<template>
  <div class="Home">
    <h1>Inicio</h1>
    <b-form-select
      v-model="generoActual"
      :options="
        allGeneros.map(({ id, genero }) => {
          return { value: id, text: genero };
        })
      "
    ></b-form-select>
    <hr />

   <Tarjeta
      v-for="pelicula in peliculasActuales"
      v-bind:key="pelicula.id"
      :id="pelicula.id"
      :titulo="pelicula.titulo"
      :director="pelicula.director"
      :genero="pelicula.genero"
      :ano="pelicula.año"
    />

  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Tarjeta from "../components/Tarjeta.vue";
 
export default {
  name: "Home",
  components: {
    Tarjeta,
  },
  data() {
    return {
      generoActual: -1,
      fields: [
        { key: "id", label: "clave" },
        { key: "titulo", label: "Titulo" },
        { key: "director", label: "Director" },
        {
          key: "año",
          label: "Año",
        },
        { key: "genero", label: "Genero" },
      ],
    };
  },
  computed: {
    ...mapGetters(["allPeliculas", "allGeneros"]),
    peliculasActuales() {
      if (this.generoActual === -1) return this.allPeliculas;
      return this.allPeliculas.filter(
        ({ genero_id }) => genero_id === this.generoActual
      );
    },
  },
  methods: {
    ...mapActions(["setPeliculas", "eliminarPelicula", "setGeneros"]),
    onEditar(item) {
      console.log(item);
      this.$router.push({
        name: "Editar",
        params: {
          id: item.item.id,
        },
      });
    },
    onEliminar(item) {
      this.eliminarPelicula({
        id: item.item.id,
        onComplete: (response) => {
          this.$notify({
            type: "success",
            title: response.data.mensaje,
          });
          setTimeout(() => this.setPeliculas(), 1000);
        },
        onError: (error) => {
          this.$notify({
            type: "error",
            title: error.response.data.mensaje,
          });
        },
      });
    },
  },
  created() {
    console.log("entro");
    this.setPeliculas();
    this.setGeneros();
  },
};
</script>
