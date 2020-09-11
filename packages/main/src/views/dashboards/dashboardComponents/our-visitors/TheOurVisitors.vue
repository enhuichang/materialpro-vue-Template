<template>
  <v-card flat class="mb-7">
    <v-card-text class="pa-5">
      <div class="d-md-flex align-items-center">
        <div>
          <h3 class="title font-weight-regular">Our Visitors</h3>
          <h6 class="subtitle-2 font-weight-light">Different Devices Used to Visit</h6>
        </div>
      </div>
      <div v-show="elementVisible" class="pb-6">
        <vue-apex-charts
          type="donut"
          height="245"
          :options="apexChartData.donutChart.chartOptions"
          :series="apexChartData.donutChart.series"
        ></vue-apex-charts>
      </div>
      <v-divider></v-divider>
      <div class="d-flex align-center justify-center pt-4 pb-2">
        <div class="d-flex align-center px-3">
          <span class="info--text">
            <span class="overline">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span class="font-weight-regular mr-1">Mobile</span>
          </span>
        </div>
        <div class="d-flex align-center px-3">
          <span class="deep-purple--text text--lighten-1">
            <span class="overline">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span class="font-weight-regular mr-1">Desktop</span>
          </span>
        </div>
        <div class="d-flex align-center px-3">
          <span class="success--text">
            <span class="overline">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span class="font-weight-regular mr-1">Tablet</span>
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "TheOurVisitors",
  data: () => ({
    title: "TheOurVisitors",
    apexChartData: apexChartData,
    elementVisible: false
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 1000);
  },
  components: {
    VueApexCharts
  }
};
</script>