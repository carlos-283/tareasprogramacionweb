<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Titulo</th>
          <th scope="col">Autor</th>
          <th scope="col">Numero de paginas</th>
          <th scope="col">Año de publicacion</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in allTodos" :key="todo.id">
          <th scope="row">{{ todo.id }}</th>
          <th>{{ todo.name }}</th>
          <th>{{ todo.tipos.join() }}</th>
          <th>{{ todo.prioridad }}</th>
          <th>{{ todo.horas }}</th>
          <th>
            <button
              class="btn btn-danger btn-sm mr-2"
              @click="deleteTodo(todo.id)"
            >
              Eliminar
            </button>
            <router-link
              class="btn btn-primary btn-sm mr-2"
              :to="{
                name: 'EditarTodo',
                params: {
                  id: todo.id,
                },
              }"
              >Editar
            </router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

mapActions;
export default {
  name: "TablaTodo",
  methods: {
    ...mapActions(["setLibros"]),
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  created() {
    this.setLibros();
  },
};
</script>

<style>
</style>