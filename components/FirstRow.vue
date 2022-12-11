<template>
  <v-row>
    <v-col cols="12" class="px-0 py-0">
      <v-text-field
        label="Template Name"
        v-model="firstRowData.name"
        :required="true"
        outlined
        @input="$emit('firstRowData', firstRowData)"
        dense
        :error-messages="errorMessages.name"
      ></v-text-field
    ></v-col>

    <v-col cols="12" class="px-0 py-0">
      <v-textarea
        outlined
        label="Template Description"
        v-model="firstRowData.description"
        @input="$emit('firstRowData', firstRowData)"
        :error-messages="errorMessages.name"
        auto-grow
      ></v-textarea
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-autocomplete
        :items="schemasAbb"
        color="blue1"
        outlined
        return-object
        v-model="firstRowData.source"
        label="Source"
        dense
        @change="$emit('firstRowData', firstRowData)"
      ></v-autocomplete
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-autocomplete
        :items="schemasAbb"
        color="blue1"
        outlined
        return-object
        v-model="firstRowData.target"
        label="Target"
        dense
        @change="$emit('firstRowData', firstRowData)"
      ></v-autocomplete>
    </v-col>
    <v-col cols="10" class="px-0 py-0">
      <v-text-field
        label="Path"
        v-model="firstRowData.path"
        outlined
        @input="$emit('firstRowData', firstRowData)"
        dense
      ></v-text-field
    ></v-col>
    <v-col cols="2" class="px-0 py-0">
      <v-btn>select</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FirstRow",
  props: ["errorMessages"],
  data: () => ({
    firstRowData: {
      name: "",
      description: "",
      source: "",
      target: "",
      path: "",
    },
    schemasAbb: ["BKG", "NOT"],
  }),
};
</script>

<style lang="scss" scoped></style>
