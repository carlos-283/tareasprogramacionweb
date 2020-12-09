<template>
  <div class="container">
    <h1>Agregar genero</h1>
    <b-form @submit.prevent="guardarGenero()">
      <Input
        v-model="genero.genero"
        label="Titulo"
        placeholder="Ingrese nombre del genero"
        id="a"
        :error="erroresValidacion && !validacionNombre"
        mensajeError="El titulo es obligatorio y de maximo 120 caracteres"
      />
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
  name: "AgregarGenero",
  components: {
    Table,
    Input,
  },
  data() {
    return {
      genero: {
        genero: undefined,
      },
      erroresValidacion: false,
    };
  },
  computed: {
    ...mapGetters(["allGeneros"]),

    validacionNombre() {
      return (
        this.genero.genero !== undefined &&
        this.genero.genero.trim() !== "" &&
        this.genero.genero.length <= 120
      );
    },

  },
  methods: {
    ...mapActions(["agregarGenero"]),
    guardarGenero() {
      if (
        this.validacionNombre
      ) {
        this.erroresValidacion = false;
        console.log(this.genero);
        this.agregarGenero({
          params: this.genero,
          onComplete: (response) => {
            console.log(response);

            this.$router.push({
              name: "Generos",
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
  // created(){
  //   console.log("entro")
  // this.setPersonas();
  // }
};
</script>
