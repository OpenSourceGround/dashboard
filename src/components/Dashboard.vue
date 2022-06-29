<script>
import { Chart, registerables } from "chart.js";

import utils from "@/assets/js/utils";
import Stats from "@/components/Stats.vue";
import IPLog from "@/components/IPLogs.vue";
import NewChart from "@/components/charts/NewChart.vue";

Chart.register(...registerables);
const Colors = utils.getThemeColors();
const DatasetData = utils.fakeDatasetsArray(500, 75, 100);
const DatasetsLabels = utils.fakeLabelsArray(75);

let green = utils.hexToRgb(`${Colors["steel"]}`, 0.1);
let color = utils.hexToRgb(`${Colors[localStorage.theme]}`, 0.1);

let greenborder = utils.hexToRgb(`${Colors["steel"]}`, 1);
let border = utils.hexToRgb(`${Colors[localStorage.theme]}`, 1);

export default {
  components: { IPLog, Stats, NewChart },
  data() {
    return {
      localStorage: localStorage,
      colors: Colors,
      charts: {
        ram: {
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                display: false,
                beginAtZero: true,
              },
              x: {
                display: false,
              },
            },
          },
          data: {
            labels: DatasetsLabels,
            datasets: [
              {
                label: "Databases",
                fill: {
                  target: "origin",
                  above: utils.hexToRgb(Colors[localStorage.theme], 0.1), // Area will be red above the origin
                  below: utils.hexToRgb(Colors[localStorage.theme], 0.1), // And blue below the origin
                },
                backgroundColor: utils.hexToRgb(
                  Colors[localStorage.theme],
                  0.4
                ),
                borderWidth: 1,
                borderColor: utils.hexToRgb(Colors[localStorage.theme], 1),
                data: DatasetData,
              },
            ],
          },
        },
        dough: {
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                display: false,
                beginAtZero: true,
              },
              x: {
                display: false,
              },
            },
          },
          data: {
            datasets: [
              {
                label: "Databases",
                borderWidth: 1,
                data: [50, 50],
                borderColor: [
                  utils.hexToRgb(Colors["steel"], 1),
                  utils.hexToRgb(Colors[localStorage.theme], 1),
                ],
                backgroundColor: [
                  utils.hexToRgb(Colors["steel"], 0.4),
                  utils.hexToRgb(Colors[localStorage.theme], 0.4),
                ],
              },
            ],
          },
        },
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <main class="">
    <section class="py-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
        <Stats percentage="100" value="3425924" length="34" label="Memory" />
      </div>
    </section>
    <section class="">
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-5 w-full">
        <div class="col-span-2 flex flex-wrap">
          <NewChart
            type="line"
            :options="charts.ram.options"
            :data="charts.ram.data"
          />
        </div>
        <div>
          <NewChart
            type="bar"
            :options="charts.ram.options"
            :data="charts.ram.data"
          />
        </div>
        <section class="flex flex-wrap w-full col-span-3">
          <div>
            <NewChart
              type="doughnut"
              :options="charts.dough.options"
              :data="charts.dough.data"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
