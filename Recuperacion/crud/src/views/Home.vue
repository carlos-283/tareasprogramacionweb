<template>
  <div class="Home">
    <h1>TAREAS REGISTRADAS :</h1>
    <Tarjeta
      v-for="tarea in allTareas"
      v-bind:key="tarea.id"
      :id="tarea.id"
      :nombre="tarea.nombre"
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
      tareas: [],
      // fields: [
      //   { key: "id", label: "clave" },
      //   { key: "nombre", label: "nombre" },
      //   { key: "direccion", label: "direccion" },
      //   {
      //     key: "telefono",
      //     label: "telefono",
      //     formatter: (value) => value || "Sin informacion",
      //   },
      //   { key: "actions", label: "Acciones" },
      // ],
    };
  },
  computed: {
    ...mapGetters(["allTareas"]),
  },
  methods: {
    ...mapActions(["setTareas"]),
    onEditar(item) {
      console.log(item);
      this.$router.push({
        name: "Editar",
        params: {
          id: item.item.id,
        },
      });
    },
  },
  created() {
    console.log("entro");
    this.setTareas();
  },
};
</script>
