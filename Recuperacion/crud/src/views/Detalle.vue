<template>
  <div class="container">
    <h1>DETALLE DE TAREA :</h1>

    <div>
      <h1>Clave :</h1>
      <h2>{{ tarea.id }}</h2>
    </div>
    <div>
      <h1>Nombre :</h1>
      <h2>{{ tarea.nombre }}</h2>
    </div>
    <div>
      <h1>Descrpcion :</h1>
      <h2>{{ tarea.descripcion }}</h2>
    </div>

    <div>
      <h1>Encargado :</h1>
      <h2>{{ tarea.encargado }}</h2>
    </div>

    <!-- <Tarjeta
      v-for="tarea in allTareas"
      v-bind:key="tarea.id"
      :id="tarea.id"
      :nombre="tarea.nombre"
    /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Vue from "vue";

// import Tarjeta from "../components/Tarjeta.vue";

export default {
  name: "Detalle",
  // components: {
  //   Tarjeta,
  // },
  data() {
    return {
      tarea: {
        id: 0,
        nombre: "Test",
        descripcion: "Blu",
        encargado: "Juan tester",
      },
    };
  },
  // computed: {
  //   ...mapGetters(["allTareas"]),
  // },
  methods: {
    ...mapActions(["obtenerTarea"]),
    // onEditar(item) {
    //   console.log(item);
    //   this.$router.push({
    //     name: "Editar",
    //     params: {
    //       id: item.item.id,
    //     },
    //   });
    // },
  },
  // created() {
  //   console.log("entro");
  //   this.setTareas();
  // },
  created() {
    this.obtenerTarea({
      id: this.$route.params.id,
      onComplete: (response) => {
        console.log("RESPUESTA");
        console.log(response);
        Vue.set(this, "tarea", response.data.data[0]);
      },
    });
  },
};
</script>
