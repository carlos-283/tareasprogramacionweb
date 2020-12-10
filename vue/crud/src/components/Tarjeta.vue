<template>
  <div>
    <b-card border-variant="primary" class="mt-3">
      <h1>   {{ titulo }}</h1>
      <b-card-text>
        <strong> Clave: </strong> {{ id }}</strong>
        <strong> Director: </strong> {{ director }}<br/>
        <strong> Genero: </strong> {{ genero }}
        <strong> Año: </strong> {{ ano }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Tarjeta",
  props: {
    id: {
      type: [String, Number],
      default: "",
    },
    titulo: {
      type: String,
      default: "",
    },
    director: {
      type: String,
      default: "",
    },
    genero: {
      type: String,
      default: "",
    },
    ano: {
      type: String,
      default: "",
    },
  },

  methods: {
    ...mapActions(["eliminarTarea"]),

    // onEliminar() {
    //   this.eliminarTarea({
    //     id: this.id,
    //   });
    // },

    onEliminar() {
      this.eliminarTarea({
        id: this.id,
        onComplete: (response) => {
          this.$notify({
            type: "success",
            title: response.data.mensaje,
          });
          setTimeout(() => this.setPersonas(), 1000);
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
};
</script>
