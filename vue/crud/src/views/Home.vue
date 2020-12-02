<template>
  <div class="home">
    <div class="Home">
      <h1>Personas</h1>
      <Table :items="allPersonas" :fields="fields" >
        <template  slot="actions" slot-scope="{ item }">
              <b-button
              size="sm"
              variant="outline-primary"
              @click="onEditar(item)"
              >
                  Editar - {{item}}
              </b-button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table.vue";

export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      fields: [
        { key: "id", label: "clave" },
        { key: "nombre", label: "nombre" },
        { key: "direccion", label: "direccion" },
        {
          key: "telefono",
          label: "telefono",
          formatter: (value) => value || "Sin informacion",
        },
      ],
    };
  },
  computed: {
     ...mapGetters(['allPersonas'])
  },
  methods:{
         ...mapActions(['setPersonas'])
  },
  created(){
    console.log("entro")
  this.setPersonas();
  }
};
</script>
