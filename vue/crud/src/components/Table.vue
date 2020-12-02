<template>

<div>
    <h1>{{titulo}}</h1>
    <b-button
    variant="danger"
    class="float rigth mb-3"
    to='Agregar'
    >
    Agregar
    </b-button>
   <b-table 
    striped
    bordered 
    :items="items" 
    :fields="fields"
    >
   
        <template #cell(actions)="data">

          <slot name="actions" :items="data">    </slot>

        </template>
    
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items:Array, 
    fields:Array, 
  }
,
  data(){
    return{
      titulo:"Mi tabla" ,
    }
  }
}
</script>
