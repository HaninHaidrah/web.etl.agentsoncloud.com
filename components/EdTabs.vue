<template>
  <div>
    <v-tabs
      centered
      icons-and-text
      v-model="tab"
      active-class="active"
      class="mt-16"
    >
      <v-tabs-slider></v-tabs-slider>
      <v-tab id="tab"><p>ETL Templates</p> </v-tab>

      <v-tab id="tab"> <p>ETL History</p></v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <EDTemplate />
      </v-tab-item>

      <!-- <v-tab-item
        ><HomePage :currentProcessMapFromTable="currentProcessMap" />
      </v-tab-item> -->
    </v-tabs-items>
  </div>
</template>

<script>
import EDTemplate from "./EDTemplate.vue";
export default {
  name: "EdTabs",
  components: {
    EDTemplate,
  },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="css" scoped>
p {
  margin-bottom: 0px !important;
}
.v-tabs >>> .v-slide-group__wrapper {
  contain: content;
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  height: auto !important;
  width: 100%;
  color: transparent;
}

#tab {
  color: #194569 !important;
  text-align: left !important;
  margin: 16px !important;
}
#tab p {
  font-size: 18.2px;
  color: 194569;
  font-weight: bold;
}
#tab p::before {
  content: "";
  position: absolute !important;
  background-color: #194569;
  height: 3px;
  width: 0;
  right: -8px;
  top: -11px;
  transition: 0.7s;
}

#tab p::after {
  content: "";
  position: absolute !important;
  background-color: #194569;
  height: 3px;
  width: 0;
  left: -8px;
  bottom: -11px;
  transition: 0.7s;
}

#tab p:hover:after,
#tab p:hover::before {
  width: 50%;
}
.active ::before {
  content: "" !important;
  position: absolute !important;
  background-color: #194569 !important;
  height: 3px !important;
  width: 100% !important;
  right: 3px !important;
  top: -11px !important;
  transition: 0.7s !important;
}
.active ::after {
  content: "" !important;
  position: absolute !important;
  background-color: #194569 !important;
  height: 2px !important;
  width: 100% !important;
  left: -4px !important;
  bottom: -11px !important;
  transition: 0.7s !important;
}
</style>
