<template>
  <div class="container">
    <h1>Editar pelicula</h1>
    <b-form @submit.prevent="onEdit()">
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
            disabled
            v-model="pelicula.genero_id"
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
import Vue from "vue";

export default {
  name: "Editar",
  components: {
    Table,
    Input,
  },
  data() {
    return {
      pelicula: {
        titulo: undefined,
        director: undefined,
        año: undefined,
        genero_id: undefined,
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
        this.pelicula.genero_id !== undefined
      );
    },
  },
  methods: {
    ...mapActions(["agregarPelicula", "setGeneros" , "obtenerPelicula", "editarPelicula"]),
    onEdit() {
      console.log
      (
 this.validacionNombre ,
        this.validacionDirector ,
        this.validacionAño ,
        this.validacionGenero
      )
      if (
        this.validacionNombre &&
        this.validacionDirector &&
        this.validacionAño &&
        this.validacionGenero
      ) {
        this.erroresValidacion = false;
        console.log(this.pelicula);
        this.editarPelicula({
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
