<template>
  <div class="container">
    <h1>Agregar pelicula</h1>
    <b-form @submit.prevent="guardarPelicula()">
      <div class="row">
        <div class="col">
          <Input
            v-model="pelicula.titulo"
            label="Titulo"
            placeholder="Ingrese titulo de la pelicula"
            id="a"
            :error="erroresValidacion && !validacionNombre"
            mensajeError="El titulo es obligatorio y de maximo 120 caracteres"
          />
        </div>
        <div class="col">
          <Input
            v-model="pelicula.director"
            label="Director"
            placeholder="Ingrese director de la pelicula"
            id="a"
            :error="erroresValidacion && !validacionDirector"
            mensajeError="El director es obligatorio y de maximo 100 caracteres"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Input
            v-model="pelicula.año"
            label="Año"
            placeholder="Ingrese año de la pelicula"
            id="a"
            :error="erroresValidacion && !validacionAño"
            mensajeError="El año es obligatorio y debe tener 4 digitos"
          />
        </div>
        <div class="col">
          <label> Genero </label>
          <b-form-select
            :options="
              allGeneros.map(({ id, genero }) => {
                return { value: id, text: genero };
              })
            "
          ></b-form-select>
        </div>
      </div>

      <b-button type="submit" variant="success" class="float-right mt-3">
        Guardar
      </b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table.vue";
import Input from "../components/Input.vue";

export default {
  name: "Agregar",
  components: {
    Table,
    Input,
  },
  data() {
    return {
      options: [
        { text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
      pelicula: {
        titulo: undefined,
        director: undefined,
        año: undefined,
        genero: undefined,
      },
      erroresValidacion: false,
    };
  },
  computed: {
    ...mapGetters(["allPeliculas", "allGeneros"]),
    validacionNombre() {
      return (
        this.pelicula.titulo !== undefined &&
        this.pelicula.titulo.trim() !== "" &&
        this.pelicula.titulo.length <= 120
      );
    },

    validacionDirector() {
      return (
        this.pelicula.director !== undefined &&
        this.pelicula.director.trim() !== "" &&
        this.pelicula.director.length <= 100
      );
    },

    validacionAño() {
      return (
        this.pelicula.año !== undefined &&
        this.pelicula.año.trim() !== "" &&
        this.pelicula.año.length === 4
      );
    },

    validacionGenero() {
      return (
        this.pelicula.genero !== undefined && this.pelicula.genero.trim() !== ""
      );
    },
  },
  methods: {
    ...mapActions(["agregarPelicula", "setGeneros"]),
    guardarPelicula() {
      if (
        this.validacionNombre &&
        this.validacionDirector &&
        this.validacionAño &&
        this.validacionGenero
      ) {
        this.erroresValidacion = false;
        console.log(this.pelicula);
        this.agregarPelicula({
          params: this.pelicula,
          onComplete: (response) => {
            console.log(response);

            this.$router.push({
              name: "Home",
            });
          },
          onError: (error) => {
            this.$notify({
              title: error.response.data,
              type: "error",
            });
          },
        });
      } else {
        this.erroresValidacion = true;
      }
    },
  },
  created() {
    this.setGeneros();
  },
};
</script>
