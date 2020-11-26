<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div v-for="todo in todos" :key="todo.id">
      {{todo.title }}
      <p> {{todo.completed?"Completo":"Incompleto"}} </p>
      <hr>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions(["getTodos"]),
  },
  mounted() {
    this.getTodos();
  },
  computed: {
    ...mapState(["todos"]),
  },
};
</script>
