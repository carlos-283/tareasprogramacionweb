<template>
  <div>
    <div class="home"></div>
    <h1>Editar ToDo</h1>

    <form @submit.prevent="guardarTodo">
      <div class="form-group">
        <label for="inputNombre">Nombre</label>
        <input
          v-model.trim="todo.name"
          type="text"
          claas="form-control"
          id="1"
        />
      </div>
      <hr />
      <div>Tipos</div>

      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipos"
          class="form-check-input"
          value="Hogar"
          type="checkbox"
          id="inlineCheckbox1"
        />
        <label class="form-check-label" for="inlineCheckbox1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipos"
          class="form-check-input"
          value="Escuela"
          type="checkbox"
          id="inlineCheckbox2"
        />
        <label class="form-check-label" for="inlineCheckbox2">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.tipos"
          class="form-check-input"
          value="Oficina"
          type="checkbox"
          id="inlineCheckbox3"
        />
        <label class="form-check-label" for="inlineCheckbox3">Oficina</label>
      </div>

      <div>Prioridad</div>

      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          value="Baja"
          type="radio"
          id="inlineRadio1"
        />
        <label class="form-check-label" for="inlineRadio1">Hogar</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          value="Media"
          type="radio"
          id="inlineRadio2"
        />
        <label class="form-check-label" for="inlineRadio2">Escuela</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          v-model="todo.prioridad"
          class="form-check-input"
          value="Alta"
          type="radio"
          id="inlineRadio3"
        />
        <label class="form-check-label" for="inlineRadio3">Oficina</label>
      </div>
      <hr />
      <div class="form-check form-check-inline">
        <label class="form-check-label" for="inputHoras"
          >Horas requeridas</label
        >
        <input
          v-model.number="todo.horas"
          class="form-control"
          value="Alta"
          type="number"
          id="InputHoras"
        />
      </div>

      <hr />

      <button type="submit" class="btn btn-success float right mb-3">
        Guardarr
      </button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditarTodo",

  data() {
    return {
      todo: {},
    };
  },
  computed: {
    ...mapGetters(["singleTodo"]),
  },
  methods: {
    ...mapActions(["setTodo", "updateTodo"]),
    guardarTodo() {
      this.updateTodo(this.todo);
      this.limpiarTodo();
      this.$router.push({ name: "Home" });
    },
    limpiarTodo() {
      this.todo = {
        id: "",
        name: "",
        tipos: [],
        prioridad: 0,
        horas: -1,
      };
    },
  },
  created() {
    this.setTodo(this.$route.params.id);
  },
  beforeMount() {
    Vue.set(this, "todo", this.singleTodo);
  },
};
</script>

<style>
</style>