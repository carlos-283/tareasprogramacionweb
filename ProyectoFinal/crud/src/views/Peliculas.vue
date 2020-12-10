<template>
  <div class="Home">
    <h1>Peliculas</h1>
    <b-button variant="primary" class="float rigth mb-3" to="Agregar">
      Agregar
    </b-button>
    <Table :items="allPeliculas" :fields="fields">
      <template slot="actions" slot-scope="{ item }">
        <b-button size="sm" variant="outline-primary" @click="onEditar(item)">
          Editar
        </b-button>

        <b-button
          size="sm"
          class="ml-2"
          variant="outline-danger"
          @click="onEliminar(item)"
        >
          Eliminar
        </b-button>
      </template>
    </Table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table.vue";

export default {
  name: "Peliculas",
  components: {
    Table,
  },
  data() {
    return {
      fields: [
        { key: "id", label: "clave" },
        { key: "titulo", label: "Titulo" },
        { key: "director", label: "Director" },
        {
          key: "año",
          label: "Año",
        },
        { key: "genero", label: "Genero" },
        { key: "actions", label: "Acciones" },
      ],
    };
  },
  computed: {
    ...mapGetters(["allPeliculas"]),
  },
  methods: {
    ...mapActions(["setPeliculas", "eliminarPelicula"]),
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
      console.log(item);
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
  },
};
</script>
