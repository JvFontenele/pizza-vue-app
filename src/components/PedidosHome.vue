<template>
  <v-container>
    <div class="box">
      <div class="d-flex">
        <h2 class="grey--text text--darken-1 text-h3 my-7 font-weight-bold">
          Pedidos do dia
        </h2>
        <v-spacer> </v-spacer>
        <v-btn dark class="orange my-auto"
          >Adicionar Pedido <v-icon>mdi-plus-circle</v-icon></v-btn
        >
      </div>
      <v-card
        v-for="(pedido, index) in pedidos"
        :key="index"
        width="600"
        class="mx-auto mb-4"
      >
        <v-card-title>
          {{ pedido.name }}
          <v-spacer></v-spacer>
          <v-chip dark :color="getColor(pedido.statusId)">{{
            pedido.statusDescricao
          }}</v-chip>
        </v-card-title>
        <v-card-text>
          <div class="d-flex">
            <div>
              <h4>Items do pedido:</h4>
              <v-chip-group>
                <v-chip
                  v-for="(item, index) in pedido.itensPedidos"
                  :key="index"
                  outlined
                  label
                  >{{ item.nomeProduto }}</v-chip
                >
              </v-chip-group>
            </div>
            <v-spacer></v-spacer>
            <div class="mr-4">
              <h4>Valor do pedido:</h4>
              <h2 class="mx-1 mt-2 orange--text Darken-2--text">
                R$ {{ calcularValor(pedido.itensPedidos) }}
              </h2>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      pedidos: [
        {
          name: "	Pedro Felipe",
          statusDescricao: "Em preparo",
          statusId: 2,
          itensPedidos: [
            { nomeProduto: "suco", valor: 5.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
        {
          name: "	Arthur Felipe",
          statusDescricao: "Na fila",
          statusId: 1,
          itensPedidos: [
            { nomeProduto: "suco", valor: 2.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
        {
          name: "	Tiago Felipe",
          statusDescricao: "completo",
          statusId: 3,
          itensPedidos: [
            { nomeProduto: "suco", valor: 2.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
        {
          name: "	Pedro Felipe",
          statusDescricao: "Em preparo",
          statusId: 2,
          itensPedidos: [
            { nomeProduto: "suco", valor: 5.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
        {
          name: "	Arthur Felipe",
          statusDescricao: "Na fila",
          statusId: 1,
          itensPedidos: [
            { nomeProduto: "suco", valor: 2.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
        {
          name: "	Tiago Felipe",
          statusDescricao: "completo",
          statusId: 3,
          itensPedidos: [
            { nomeProduto: "suco", valor: 2.5 },
            { nomeProduto: "Pizza Familia", valor: 2.5 },
            { nomeProduto: "Refrigerante", valor: 2.5 },
          ],
        },
      ],
    };
  },
  methods: {
    calcularValor(item) {
      const total = item
        .map((e) => e.valor)
        .reduce((prev, curr) => prev + curr, 0);
      console.log(total);
      return total;
    },
    getColor(item) {
      if (item == 1) return "grey";
      else if (item == 2) return "orange";
      else return "green";
    },
  },
};
</script>

<style scoped>
.box {
  max-width: 700px;
  margin: 0 auto;
}
</style>
