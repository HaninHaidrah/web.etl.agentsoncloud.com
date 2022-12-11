<template>
  <v-row class="mt-4">
    <v-col cols="2">
      <v-text-field
        color="blue1"
        v-model="TemplateName"
        label="Template Name"
        prepend-inner-icon="mdi-magnify"
        outlined
      ></v-text-field>
    </v-col>
    <v-col cols="2">
      <v-autocomplete
        label="Created By"
        v-model="createdBy"
        outlined
        :items="users"
        :item-text="`name[${activeLanguage}]`"
      ></v-autocomplete>
    </v-col>
    <v-col cols="2">
      <v-autocomplete
        label="Source"
        v-model="source"
        outlined
        :items="schemasAbb"
      ></v-autocomplete>
    </v-col>
    <v-col cols="2">
      <v-autocomplete
        label="Target"
        v-model="target"
        outlined
        :items="schemasAbb"
      ></v-autocomplete>
    </v-col>
    <v-col cols="2">
      <v-autocomplete
        label="status"
        v-model="status"
        outlined
        :items="statuses"
      ></v-autocomplete>
    </v-col>
    <v-btn
      fab
      dark
      x-small
      color="blue1"
      outlined
      @click="expand = !expand"
      class="mt-4"
    >
      <v-icon dark v-if="!expand"> mdi-chevron-down </v-icon>
      <v-icon dark v-else> mdi-chevron-up </v-icon>
    </v-btn>
    <v-row v-if="expand">
      <v-col cols="2">
        <v-menu
          ref="dueDateFrom"
          v-model="showDateFlag"
          :close-on-content-click="false"
          :return-value.sync="dueDateFrom"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dueDateFrom"
              label="Date Range"
              prepend-inner-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              outlined
              color="blue1"
            ></v-text-field>
          </template>
          <v-date-picker v-model="dueDateFrom" no-title scrollable range>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="showDateFlag = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.dueDateFrom.save(dueDateFrom)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <div class="btn_style">
      <v-col md="5">
        <v-btn @click="resetUpdateDTO" class="secondry_cancel_btn" outlined>
          RESET
        </v-btn></v-col
      >
      <v-col md="5">
        <v-btn @click="handleUpdateDTO" class="primary_search_btn" raised>
          SEARCH
        </v-btn></v-col
      >
    </div>
  </v-row>
</template>

<script>
export default {
  name: "FilterTemplates",
  data() {
    return {
      activeLanguage: "en",
      users: [
        {
          name: {
            en: "hanin",
            ar: "حنين",
          },
        },
      ],
      schemasAbb: ["NOT", "BKG"],
      target: "",
      source: "",
      status: "",
      TemplateName: "",
      createdBy: "",
      statuses: ["ACTIVE", "INACTIVE"],
      dueDateFrom: [],

      // flags:
      showDateFlag: false,
      expand: false,
    };
  },
  methods: {
    handleUpdateDTO() {
      try {
      } catch (error) {}
    },
    resetUpdateDTO() {
      try {
      } catch (error) {}
    },
  },
};
</script>

<style lang="css" scoped>
.primary_search_btn {
  background-color: #194569 !important;
  /* margin-top: 24px !important; */
  /* position: absolute;
    left: 70% !important;
    top: 9%;    */
  color: #ffffff !important;
  font-size: 16px !important;
}
.secondry_cancel_btn {
  /* position: absolute;
    left: 62% !important;
    top: 9%; */
  font-size: 16px !important;
  color: #5f84a2 !important;
  /* margin-top: 24px !important;
    margin-right: 20px; */
}
.btn_style {
  display: flex;
}
</style>
