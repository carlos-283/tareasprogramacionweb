<template>
  <div>
    <h1>mis Todos</h1>
    <router-link to="/agregar-todo" class="btn button-success float right mb-4"
      >Agregar</router-link
    >
    <TablaTodo />
  </div>
</template>

<script>
import TablaTodo from "../components/tablaTodo";
export default {
  name: "Home",
  components: {
    TablaTodo,
  },
};
</script>

<style>
</style>