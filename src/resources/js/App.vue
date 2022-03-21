<template>
  <v-app>
    <nav-bar></nav-bar>
    <RouterView />
  </v-app>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import SaleGraph from "./components/SaleGraph.vue"
export default {
  components: { NavBar, SaleGraph },
};
</script>
