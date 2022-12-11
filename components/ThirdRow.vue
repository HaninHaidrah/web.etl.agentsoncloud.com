<template>
  <v-row>
    <v-col cols="3" class="px-0 py-0">
      <p>Tables</p>
      <v-radio-group v-model="ThirdRowData.tableRadio" row>
        <v-radio label="All" value="allTables"></v-radio>
        <v-radio
          label="Select"
          value="selectedTables"
        ></v-radio> </v-radio-group
    ></v-col>

    <v-col cols="9" class="px-0 py-0">
      <v-autocomplete
        :items="tables"
        color="blue1"
        outlined
        return-object
        v-model="ThirdRowData.table"
        label="Source"
        dense
        @change="$emit('ThirdRowData', ThirdRowData)"
        :disabled="disable"
      ></v-autocomplete
    ></v-col>
    <v-col cols="4" class="px-0 py-0">
      <v-checkbox
        label="create Table"
        class="my-0"
        color="blue1"
        v-model="ThirdRowData.createTable"
        @change="$emit('ThirdRowData', ThirdRowData)"
      ></v-checkbox
    ></v-col>
    <v-col cols="4" class="px-0 py-0">
      <v-checkbox
        label="drop Table"
        color="blue1"
        class="my-0 pl-3"
        v-model="ThirdRowData.skipDropIfExists"
        @change="$emit('ThirdRowData', ThirdRowData)"
        :disabled="!ThirdRowData.createTable"
      ></v-checkbox
    ></v-col>
    <v-col cols="4" class="px-0 py-0">
      <v-checkbox
        label="Locks"
        color="blue1"
        class="my-0 pl-3"
        v-model="ThirdRowData.addLocks"
        @change="$emit('ThirdRowData', ThirdRowData)"
      ></v-checkbox
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-checkbox
        label="Insert Data"
        color="blue1"
        class="my-0 pl-3"
        v-model="ThirdRowData.insertData"
        @change="$emit('ThirdRowData', ThirdRowData)"
      ></v-checkbox
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-radio-group
        v-model="ThirdRowData.insertDataRadio"
        row
        :disabled="!ThirdRowData.insertData"
        @change="$emit('ThirdRowData', ThirdRowData)"
      >
        <v-radio label="Single" value="single"></v-radio>
        <v-radio label="Multiple" value="multiple"></v-radio> </v-radio-group
    ></v-col>
    <v-col cols="12" class="px-0 py-0">
      <p>Files</p>
      <v-radio-group
        row
        v-model="ThirdRowData.filesRadio"
        @change="$emit('ThirdRowData', ThirdRowData)"
      >
        <v-radio label="Back up only" value="backup"></v-radio>
        <v-radio label="Run script" value="runScript"></v-radio> </v-radio-group
    ></v-col>
    <v-col cols="4" class="px-0 py-0">
      <v-checkbox
        label="Download Files"
        class="my-0"
        color="blue1"
        v-model="ThirdRowData.download"
        @change="$emit('ThirdRowData', ThirdRowData)"
      ></v-checkbox
    ></v-col>
    <v-col cols="4" class="px-0 py-0">
      <v-checkbox
        label="seperate Files"
        class="my-0"
        color="blue1"
        v-model="ThirdRowData.seperateDatabasesFiles"
        @change="$emit('ThirdRowData', ThirdRowData)"
      ></v-checkbox
    ></v-col>
  </v-row>
</template>

<script>
export default {
  name: "ThirdRow",
  data: () => ({
    ThirdRowData: {
      table: "",
      createTable: false,
      skipDropIfExists: false,
      addLocks: false,
      insertData: false,
      download: false,
      seperateDatabasesFiles: false,
      tableRadio: "allTables",
      insertDataRadio: "",
      filesRadio: "",
    },
    schemasAbb: ["BKG", "NOT"],
    tables: [""],
    row: "",
    disable: true,
  }),
  watch: {
    "ThirdRowData.tableRadio"() {
      try {
        this.ThirdRowData.tableRadio == "allTables"
          ? (this.disable = true)
          : (this.disable = false);
      } catch (error) {}
    },
    "ThirdRowData.createTable"() {
      try {
        // if created is true we can choose drop and if its changed to dfalse drop should be false always.
        !this.ThirdRowData.createTable &&
          (this.ThirdRowData.skipDropIfExists = false);
      } catch (error) {}
    },
    "ThirdRowData.insertData"() {
      try {
        // if created is true we can choose drop and if its changed to dfalse drop should be false always.
        !ThirdRowData.insertData && (this.ThirdRowData.insertDataRadio = "");
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped></style>
