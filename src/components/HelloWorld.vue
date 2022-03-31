<template>
  <v-container>
    <p>{{ nome }}</p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nome: this.$route.params.nome,
    };
  },
};
</script>
