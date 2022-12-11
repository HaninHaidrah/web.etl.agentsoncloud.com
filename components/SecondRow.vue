<template>
  <v-row>
    <v-col cols="3" class="px-0 py-0">
      <p>Database Schema</p>
      <v-radio-group
        v-model="secondRowData.databaseRadio"
        row
        @change="$emit('secondRowData', secondRowData)"
      >
        <v-radio label="All" value="allDatabases"></v-radio>
        <v-radio label="Select" value="Select"></v-radio> </v-radio-group
    ></v-col>
    <v-col cols="9" class="px-0 py-0">
      <v-autocomplete
        :items="schemasAbb"
        color="blue1"
        outlined
        return-object
        v-model="secondRowData.schema"
        label="Source"
        dense
        @change="$emit('secondRowData', secondRowData)"
        :disabled="disable"
        multiple
      ></v-autocomplete
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-checkbox
        label="create Database"
        class="my-0"
        color="blue1"
        v-model="secondRowData.createDatabase"
        @change="$emit('secondRowData', secondRowData)"
      ></v-checkbox
    ></v-col>
    <v-col cols="6" class="px-0 py-0">
      <v-checkbox
        label="drop Database"
        color="blue1"
        class="my-0 pl-3"
        v-model="secondRowData.dropDatabase"
        @change="$emit('secondRowData', secondRowData)"
        :disabled="!secondRowData.createDatabase"
      ></v-checkbox
    ></v-col>
  </v-row>
</template>

<script>
export default {
  name: "SecondRow",
  data: () => ({
    secondRowData: {
      schema: [],
      createDatabase: true,
      dropDatabase: false,
      databaseRadio: "allDatabases",
    },
    schemasAbb: ["BKG", "NOT"],
    disable: true,
  }),
  watch: {
    "secondRowData.databaseRadio"() {
      try {
        this.secondRowData.databaseRadio == "allDatabases"
          ? (this.disable = true)
          : (this.disable = false);
      } catch (error) {
        console.log(error.message);
      }
    },
    "secondRowData.createDatabase"() {
      try {
        // if created is true we can choose drop and if its changed to dfalse drop should be false always.
        !this.secondRowData.createDatabase &&
          (this.secondRowData.dropDatabase = false);
        this.$emit("secondRowData", this.secondRowData);
      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
