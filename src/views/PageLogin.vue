<template>
  <div class="d-flex">
    <div class="card-img">
      <v-img class="img" src="../../public/elementos.svg"></v-img>
    </div>
    <v-card class="ma-auto elevation-5 card pa-2">
      <v-card-title> Login </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              v-model="email"
              solo
              label="Email"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="12">
            <v-text-field solo label="Senha" outlined></v-text-field>
          </v-col>
          <v-btn @click="logar()" dark class="mx-auto mb-4 orange darken-1"
            >Login</v-btn
          >
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    logar() {
      this.$router.push({ name: "home", params: { nome: "erina" } });
    },
  },
};
</script>

<style scoped>
.card-img {
  width: 65%;
  background: #ffa726;
}
.img {
  width: 100%;
  height: 100vh;
}
.card {
  width: 300px;
}
</style>
