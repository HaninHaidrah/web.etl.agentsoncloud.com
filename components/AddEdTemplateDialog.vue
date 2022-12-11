<template>
  <v-row justify="center">
    <v-dialog v-model="createTemplateFlag" persistent max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Create EDT Template</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <FirstRow
              @firstRowData="firstRowData"
              :errorMessages="errorMessages"
            />
            <SecondRow @secondRowData="secondRowData" />
            <ThirdRow @ThirdRowData="ThirdRowData" />
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="$emit('closeDialog')">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addTemplate"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ThirdRow from "./ThirdRow.vue";
import FirstRow from "./FirstRow.vue";
import SecondRow from "./SecondRow.vue";
import { validateInputs } from "../static/sharedFunctions/validation";
import { createTemplate } from "../static/services/edt";
import { handleSucessMsg } from "../static/sharedFunctions/handleSucessMsg";
export default {
  name: "AddEdTemplateDialog",
  props: ["createTemplateFlag"],
  components: {
    ThirdRow,
    FirstRow,
    SecondRow,
  },
  data() {
    return {
      activeLanguage: "en",
      inactiveLanguage: "ar",
      name: "",
      description: "",

      source: "",
      target: "",
      path: "",

      // flasgs:
      allDatabases: false,
      createTable: false,
      skipDropIfExists: false,
      addLocks: false,
      insertData: false,
      dataInsertMultiableLines: false,
      download: false,
      seperateDatabasesFiles: false,
      databases: [],

      // errorMessages
      errorMessages: {},
    };
  },
  methods: {
    firstRowData(data) {
      let { name, description, source, target, path } = data;
      this.name = {
        [this.activeLanguage]: name,
        [this.inactiveLanguage]: "",
      };
      this.description = {
        [this.activeLanguage]: description,
        [this.inactiveLanguage]: "",
      };
      this.target = target;
      this.source = source;
      this.path = path;
    },
    secondRowData(data) {
      try {
        let { createDatabase, dropDatabase, databaseRadio, schema } = data;
        this.createDatabase = createDatabase;
        this.dropDatabase = dropDatabase;
        databaseRadio == "allDatabases"
          ? ((this.allDatabases = true), (this.databases = []))
          : ((this.databases = schema), (this.allDatabases = false));
      } catch (error) {
        console.log(error);
      }
    },
    ThirdRowData(data) {
      try {
        let {
          createTable,
          skipDropIfExists,
          addLocks,
          insertData,
          insertDataRadio,
          filesRadio,
          download,
          seperateDatabasesFiles,
        } = data;
        this.createTable = createTable;
        this.skipDropIfExists = skipDropIfExists;
        this.addLocks = addLocks;
        this.insertData = insertData;
        this.download = download;
        this.seperateDatabasesFiles = seperateDatabasesFiles;
        filesRadio == "backup" ? (this.backup = true) : (this.backup = false);
        this.insertData && insertDataRadio == "multiple"
          ? (this.dataInsertMultiableLines = true)
          : (this.dataInsertMultiableLines = false);
      } catch (error) {}
    },
    async addTemplate() {
      try {
        // validate
        // create DTO
        // ERROR MESG
        // CREATE
        let res;
        let status;
        let templateDTO = {
          body: {
            source: this.source,
            target: this.target,
            path: this.path,
            backup: this.backup,
            download: this.download,
            seperateDatabasesFiles: this.seperateDatabasesFiles,
            allDatabases: this.allDatabases,
            databases: this.databases,
            createDatabase: this.createDatabase,
            dropDatabase: this.dropDatabase,
            createTable: this.createTable,
            skipDropIfExists: this.skipDropIfExists,
            addLocks: this.addLocks,
            insertData: this.insertData,
            dataInsertMultiableLines: this.dataInsertMultiableLines,
          },
          name: this.name,
          description: this.description,
          createdBy: {
            user: {
              id: "935163ee-2875-42ab-8301-0bb544e8cedb",
              name: {
                ar: "",
                en: "935163ee-2875-42ab-8301-0bb544e8cedb",
              },
            },
            system: "xxx",
            channel: "web",
          },
        };

        let validation = validateInputs({
          name: this.name[this.activeLanguage],
          description: this.description[this.activeLanguage],
          source: this.source,
          target: this.target,
        });
        if (validation[0]) {
          [res, status] = await createTemplate(templateDTO);

          handleSucessMsg(status, "Template", "created");
          this.$emit("closeDialog");
        } else {
          this.errorMessages = validation[1];
        }
        // create Template

        // console.log(templateDTO, "teee", res);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
