<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-card-title class="main_title"> INACTIVE TEMPLATES </v-card-title>
      <v-carousel v-model="model">
        <v-carousel-item v-for="item in items" :key="item.id">
          <v-sheet color="primary" height="100%">
            <v-row class="card_row">
              <v-col cols="3" v-for="template in item" :key="template.id">
                <v-card min-height="200">
                  <v-card-title>
                    {{ template.name[activeLanguage] }}
                  </v-card-title>
                  <v-card-text>
                    {{ template.description[activeLanguage] }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
import { getEDTemplatesRecords } from "../static/services/edt";

export default {
  name: "InActiveTemplates",
  data() {
    return {
      model: 0,
      items: [],
      activeLanguage: "en",
    };
  },
  methods: {
    async getEDTemplates() {
      try {
        let respond = await getEDTemplatesRecords({ status: "INACTIVE" });
        let inActiveTemplates = respond.rows;
        let arr = [];
        let subArr = [];
        let n = 4;
        let res = [];
        for (let i = 0; i < inActiveTemplates.length; i++) {
          const element = inActiveTemplates[i];
          arr.push(element);
        }
        for (let i = 0; i < arr.length; i++) {
          const ele = arr[i];
          subArr.push(ele);
          if (i === n - 1) {
            n = n + 4;
            res.push(subArr);
            subArr = [];
          }
        }
        if (subArr.length) {
          res.push(subArr);
        }
        this.items = res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getEDTemplates();
  },
};
</script>

<style lang="css" scoped>
.v-card {
  border: solid 2px #194569 !important;
  width: 350px !important;
  /* margin-left: 100px !important; */
}
.v-carousel {
  height: 260px !important;
}
.v-carousel__controls {
  background: #b7d0e1 !important;
}
.card_row {
  margin-left: 5%;
}
.main_title {
  margin-left: 42%;
  color: #194569;
  margin-bottom: 2%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
