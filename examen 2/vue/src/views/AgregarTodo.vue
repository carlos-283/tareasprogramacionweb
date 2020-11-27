<template>
  <div>
    <div class="home"></div>
    <h1>Agregar ToDo</h1>

    <form @submit.prevent="guardarTodo">
      <div class="form-check form-check-inline">
        <label class="form-check-label mr-2" for="inputTitulo">Titulo</label>
        <input
          v-model.trim="todo.titulo"
          type="text"
          claas="form-control"
          id="inputTitulo"
        />
      </div>
      <hr />

      <div class="form-group">
        <label class="form-check-label mr-2" for="inputAutor">Autor</label>
        <input
          v-model.trim="todo.autor"
          type="text"
          claas="form-control"
          id="inputAutor"
        />
      </div>
      <hr />

      <div class="form-group">
        <label class="form-check-label mr-2" for="inputNumeroPaginas"
          >Numero de paginas</label
        >
        <input
          v-model.trim="todo.numeroPaginas"
          type="text"
          claas="form-control"
          id="inputNumeroPaginas"
        />
      </div>
      <hr />

      <div class="form-group">
        <label class="form-check-label mr-2" for="inputAnoPublicacion"
          >Año de publicacion</label
        >
        <input
          v-model.trim="todo.anoPublicacion"
          type="text"
          claas="form-control"
          id="inputAnoPublicacion"
        />
      </div>
      <hr />

      <!-- <div>Tipos</div> -->
      <!-- 
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

      <hr /> -->

      <button type="submit" class="btn btn-success float right mb-3">
        Guardar
      </button>
    </form>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      todo: {
        titulo: "",
        autor: "",
        numeroPaginas: "",
        anoPublicacion: "",
      },
    };
  },
  methods: {
    ...mapActions(["setTodos"]),
    guardarTodo() {
      (this.todo.id = nanoid(5)), console.log(this.todo);
      this.setTodos(this.todo);
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

  computed: {
    ...mapState(["todos"]),
  },
};
</script>
