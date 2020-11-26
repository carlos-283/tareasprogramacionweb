<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>TOTAL</p>
    <p>{{total}}</p>
      <BotonDisminuir/>
    <button @click="accionAumentar(1 )"> 
      Aumentar
    </button>
       <button @click="accionAumentar(1 )"> 
      Aumentar
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState , mapActions} from 'vuex'
import BotonDisminuir from '../components/BotonDisminuir.vue' 
export default {
  name: 'Home',
  components: {
    HelloWorld,
    BotonDisminuir
  },
  methods:{
    ...mapActions(['accionAumentar'])
  },
  computed:{
  ...mapState(['total'])
  },
}
</script>
