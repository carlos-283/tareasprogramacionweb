<template>
  <div>
    <b-card border-variant="primary" class="mt-3">
      <h1>Clave {{ id }}</h1>
      <b-card-text>
        {{ nombre }}
      </b-card-text>

      <div class="float-right mt-3">
        <b-button
          :to="{ name: 'Detalle', params: { id: id } }"
          class="mr-2"
          variant="primary"
          >Detalle
        </b-button>

        <b-button variant="danger" @click="onEliminar()"> Eliminar</b-button>
      </div>
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
    nombre: {
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
