<template>
  <div>
    <FilterTemplates />
    <div class="btn_div">
      <v-btn
        class="primary_search_btn"
        @click="createTemplateFlag = !createTemplateFlag"
      >
        <v-icon>mdi-plus</v-icon> CREATE TEMPLATE
      </v-btn>
    </div>
    <ActiveTemplates />
    <InActiveTemplates />

    <div v-if="createTemplateFlag">
      <AddEdTemplateDialog
        :createTemplateFlag="createTemplateFlag"
        @closeDialog="createTemplateFlag = false"
      />
    </div>
  </div>
</template>

<script>
import FilterTemplates from "./FilterTemplates";
import ActiveTemplates from "./ActiveTemplates.vue";
import InActiveTemplates from "./InActiveTemplate.vue";
import AddEdTemplateDialog from "./AddEdTemplateDialog";
import test from "./test.vue";
export default {
  name: "EDTemplate",
  components: {
    FilterTemplates,
    ActiveTemplates,
    InActiveTemplates,
    AddEdTemplateDialog,
  },
  data() {
    return {
      activeLanguage: "en",

      // flags:
      createTemplateFlag: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
