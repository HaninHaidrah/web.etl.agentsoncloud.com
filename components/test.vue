<template>
  <div>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item, i) in items" :key="i">
        <div>
          <div class="item">
            <div v-for="(card, i) in item" :key="i">
              <v-row class="justify-space-between">
                <pre> {{ item }} </pre>
              </v-row>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { getEDTemplatesRecords } from "../static/services/edt";
export default {
  name: "test",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async getEDTemplates() {
      try {
        let respond = await getEDTemplatesRecords({ status: "ACTIVE" });
        let activeTemplates = respond.rows;
        let arr = [];
        let subArr = [];
        let n = 4;
        let res = [];
        for (let i = 0; i < activeTemplates.length; i++) {
          const element = activeTemplates[i];
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
    .item {
      margin-top: 90px;
      height: 45%;
      padding:  30px 30px 0px;
      background-color: white;
      display: grid;
      grid-template-columns: 80px 80px 80px 80px 80px;
      column-gap: 5px;
      height: 345px;
      width:87%;
      justify-content: space-between;
    }</style>
