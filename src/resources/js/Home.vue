<template>
<v-container>
    <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
            <sale-graph></sale-graph>
        </v-col>
        <v-col  cols="12" sm="6" md="4" lg="3">
            <sale-graph></sale-graph>
        </v-col>
        <v-col cols="12" sm="6" md="4" lg="3">
            <sale-graph></sale-graph>
        </v-col>
        <v-col  cols="12" sm="6" md="4" lg="3">
            <sale-graph></sale-graph>
        </v-col>
    </v-row>
</v-container>
</template>
<script>
import SaleGraph from "./components/SaleGraph.vue";
export default {
components: {
    SaleGraph,
}
}
</script>
