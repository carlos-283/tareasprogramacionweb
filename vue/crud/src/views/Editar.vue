<template>
  <div class="container">
    <h1>Agregar pelicula</h1>
    <b-form @submit.prevent="guardarPelicula()">
      <Input v-model="pelicula.id" label="ID" id="a" disabled />
      <Input
        v-model="pelicula.titulo"
        label="Titulo"
        placeholder="Ingrese titulo de la pelicula"
        id="a"
        :error="erroresValidacion && !validacionNombre"
      />
      <Input
        v-model="pelicula.director"
        label="Director"
        placeholder="Ingrese director de la pelicula"
        id="a"
      />
      <Input
        v-model="pelicula.año"
        label="Año"
        placeholder="Ingrese año de la pelicula"
        id="a"
      />
      <Input
        v-model="pelicula.genero"
        label="Genero"
        placeholder="Ingrese genero de la pelicula"
        id="a"
        disabled
      />
      <b-button type="submit" variant="success" class="float-right mt-3">
        Guardar
      </b-button>
    </b-form>
  </div>
</template>

<script>
import Vue from "vue";
import Input from "../components/Input";
import { mapActions } from "vuex";
export default {
  name: "Editar",
  components: {
    Input,
  },
  data() {
    return {
      pelicula: {
        id: "",
        titulo: "",
        director: "",
        año: "",
        genero: "",
      },
      erroresValidacion: false,
    };
  },
  computed: {
    validacionNombre() {
      return (
        this.pelicula.titulo !== undefined && this.pelicula.titulo.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["obtenerPelicula", "editarPelicula"]),
    guardarPelicula() {
      if (this.validacionNombre) {
        this.erroresValidacion = false;
        console.log(this.pelicula);
        //Editar persona
        this.editarPelicula({
          id: this.pelicula.id,
          params: this.pelicula,
          onComplete: (response) => {
            this.$notify({
              type: "success",
              title: response.data.mensaje,
            });
            this.$router.push({
              name: "Home",
            });
          },
          onError: (error) => {
            this.$notify({
              type: "error",
              title: error.response.data.mensaje,
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
    this.obtenerPelicula({
      id: this.$route.params.id,
      onComplete: (response) => {
        console.log("info", response.data.data[0]);
        Vue.set(this, "pelicula", response.data.data[0]);
      },
    });
  },
};
</script>

<style>
</style>