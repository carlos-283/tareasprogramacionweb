<template>
  <div>
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      class="form-control"
      :type="type"
      :maxlength="maxlength"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="error" class="text-danger">
      {{ mensajeError }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      default: "",
    },
    id: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    maxlength: {
      type: [String, Number],
      default: 150,
    },
    value: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "Ingrese campo",
    },
    error: {
      type: Boolean,
      default: false,
    },
    mensajeError: {
      type: String,
      default: "Campo Obligatorio",
    },
  },
  // data(){
  //   return{
  //     titulo:"Mi tabla" ,
  //   }
  // }
};
</script>
