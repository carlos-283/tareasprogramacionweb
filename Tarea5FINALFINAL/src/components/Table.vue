<template>
  <div>
    <h1>{{ titulo }}</h1>
    <b-button variant="danger" class="float rigth mb-3" to="Agregar">
      Agregar
    </b-button>
    <b-table striped bordered :items="items" :fields="fields">
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Cargando...</strong>
        </div>
      </template>

      <template #cell(actions)="data">
        <slot name="actions" :item="data"></slot>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "Table",
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
  data() {
    return {
      titulo: "Mi tabla",
    };
  },
};
</script>
