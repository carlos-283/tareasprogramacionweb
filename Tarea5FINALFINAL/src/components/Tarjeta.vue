<template>
  <div style="color:white">
    <b-card no-body class="overflow-hidden mt-3" bg-variant="dark">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="picture" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="User" style="text-align: justify">
              <div style= "height: 350px">
                  <h1 style="text-align: left">
                    {{ name.title }}. {{ name.first }} {{ name.last }}
                  </h1>

                  <b-card-text> </b-card-text>

                  <b-card-text>
                    <strong>Gender:</strong>
                    {{ gender }}
                  </b-card-text>

                  <b-card-text> <strong>Phone:</strong> {{ phone }} </b-card-text>

                  <b-card-text> <strong>Mail:</strong> {{ email }} </b-card-text>

                  <b-card-text> <strong>Cellphone:</strong> {{ cell }} </b-card-text>
            </div>
            <div class="float-right mt-3">
              <b-button variant="info" @click="setUsuario" >
               Generate new user
                </b-button
              >
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Tarjeta",
  props: {
    name: {
      type: Object,
      default: {},
    },
    gender: {
      type: String,
      default: "",
    },
    picture: {
      type: String,
      default: {},
    },
    email: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
    cell: {
      type: String,
      default: "",
    },
    setUsuario: {
      type: Function,
      default: "",
    },
  },

  // methods: {
  //   ...mapActions(["setUsuario"]),
  // },
};
</script>
