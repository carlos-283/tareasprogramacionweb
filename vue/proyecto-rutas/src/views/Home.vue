<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
        <TituloPrincipal texto="Mi titulo principal"/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import TituloPrincipal from '../components/TituloPrincipal'

export default {
  name: 'Home',
  components: {
    TituloPrincipal
  }
}
</script>
