<template>
  <v-app id="inspire" class="body">
    <v-navigation-drawer
      dark
      color="orange lighten-1"
      :mini-variant.sync="mini"
      expand-on-hover
      app
    >
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              Sandra Adams
            </v-list-item-title>
            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link @click="page = 1">
          <v-list-item-icon>
            <v-icon>mdi-pizza</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-h6">Pedidos</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="page = 2">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-h6">Funcionarios</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="page = 3">
          <v-list-item-icon>
            <v-icon>mdi-ballot-recount-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-h6">Estoque</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <pedidos-home v-if="page == 1" />
    <FuncionariosPage v-if="page == 2" />
  </v-app>
</template>

<script>
import PedidosHome from "../components/PedidosHome.vue";
import FuncionariosPage from "../components/FuncionariosPage.vue";

export default {
  data() {
    return {
      page: 1,
      drawer: true,

      mini: true,
    };
  },
  components: {
    PedidosHome,

    FuncionariosPage,
  },
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 100%;
  background: url(../../public/fundo.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
