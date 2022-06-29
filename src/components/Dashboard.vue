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
        radar: {
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
            labels: [
              "Eating",
              "Drinking",
              "Sleeping",
              "Designing",
              "Coding",
              "Cycling",
              "Running",
            ],

            datasets: [
              {
                label: "My First Dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)",
              },
              {
                label: "My Second Dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)",
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
            :header="`My Page Views`"
            :options="charts.ram.options"
            :data="charts.ram.data"
          />
        </div>
        <div>
          <NewChart
            type="bar"
            :header="`Something`"
            :data="charts.ram.data"
            :options="charts.ram.options"
          />
        </div>
        <section class="flex flex-wrap w-full col-span-3 space-x-3">
          <div>
            <NewChart
              type="doughnut"
              :header="`Ram Usage`"
              :data="charts.dough.data"
              :options="charts.dough.options"
            />
          </div>
          <div>
            <NewChart
              type="radar"
              :header="`Ram Usage`"
              :data="charts.radar.data"
              :options="charts.radar.options"
            />
          </div>
        </section>
      </div>
    </section>
  </main>
</template>
