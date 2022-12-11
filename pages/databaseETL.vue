<template>
  <v-app>
    <div class="home" data-app><EDTabs /></div>
  </v-app>
</template>

<script>
import EDTabs from "../components/EdTabs.vue";
export default {
  name: "databaseETL",
  components: {
    EDTabs,
  },
};
</script>

<style lang="css" scoped>
.home {
  width: 100%;
  /* background-color: antiquewhite; */
  height: 1000px;
  margin-left: 1%;
}
</style>
