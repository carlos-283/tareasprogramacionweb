<template>
  <div class="container">
  JALOOOOOO
  <h1> Agregar Personas </h1>
    <b-form @submit.prevent="guardarPersona()">
      <Input
      v-model="persona.nombre"
      label="Nombre"
      placeholder="Ingrese nombre de la persona"
      id="a"
      :error="erroresValidacion && !validacionNombre"
      />
         <Input
      v-model="persona.direccion"
      label="Direccion"
      placeholder="Ingrese direccion de la persona"
      id="a"
      />
         <Input
      v-model="persona.telefono"
      label="Celular"
      placeholder="Ingrese celular de la persona"
      id="a"
      />
      <b-button
      type="submit"
      variant="success"
      class="float-right mt-3"
      >
      Guardar
      </b-button>


    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Table from "../components/Table.vue";
import Input from "../components/Input.vue";

export default {
  name: "Agregar ",
  components: {
    Table,
    Input
  },
  data() {
    return {
     persona:{
       nombre:'',
       direccion:'',
       telefono:''
     },
     erroresValidacion:false,
    };
  },
  computed: {
     ...mapGetters(['allPersonas']) , 

     validacionNombre() {
       return (
       this.persona.nombre !== undefined &&
       this.persona.nombre.trim()!=='')
     }
  },
  methods:{
         ...mapActions(['agregarPersona']) , 
         guardarPersona(){

          if(this.validacionNombre)
          {
            this.erroresValidacion=false;
           console.log(this.persona);
           this.agregarPersona({
             params:this.persona,
             onComplete:(response)=>{
               console.log(response);

               this.$router.push({
                 name:'Home'
               })
              },
              onError:(error)=>{
                this.$notify({
                title:error.response.data,
                type:'error',
              })
              }
             }
           )
         }
         else{
            this.erroresValidacion=true;
         }
         }
  },
  // created(){
  //   console.log("entro")
  // this.setPersonas();
  // }
};
</script>
