<template>
  <div id="app">
       <h1>Random User : </h1>
    <Tarjeta
      :setUsuario="onSetUsuario"
      :name="usuario.name"
       :gender="usuario.gender"
      :picture="usuario.picture.large"
      :email="usuario.email"
      :phone="usuario.phone"
      :cell="usuario.cell"
    />
  </div>
</template>
<script>

import { mapActions, mapGetters } from "vuex";
import Tarjeta from "../components/Tarjeta.vue";
import Vue from "vue";
export default {
  name: "User",
  components: {
    Tarjeta,
  },
  data() {
    return {
      usuario: {
        name: {},
        gender: "",
        picture: {},
        email: "",
        phone: "",
        cell: "",
      },
    };
  },
  methods: {
    ...mapActions(["setUsuario"]),
    onSetUsuario() {
      this.setUsuario({
        onComplete: (response) => {
          console.log(response);
          Vue.set(this, "usuario", response.data.results[0]);
        },
      });
    },
  },
  created() {
    this.setUsuario({
      onComplete: (response) => {
        Vue.set(this, "usuario", response.data.results[0]);
      },
    });
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
   margin: 100px;
}

</style>
