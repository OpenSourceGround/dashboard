<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import Stats from "@/components/Stats.vue";
import utils from "@/assets/js/utils";
import IPLog from "@/components/IPLogs.vue";

export default {
  components: { IPLog, Stats },
  methods: {
    loadCharts() {
      const colors = utils.getThemeColors();
      const numbers = utils.fakeDatasetsArray(50, 50, 100);
      const labels = numbers;
      const data = {
        labels: labels,
        datasets: [
          {
            label: "Databases",
            backgroundColor: utils.hexToRgb(
              colors[this.localStorage.theme],
              0.4
            ),
            borderWidth: 1,
            borderColor: utils.hexToRgb(colors[this.localStorage.theme], 1),
            data: numbers,
          },
        ],
      };
      const lineData = {
        labels: labels,
        datasets: [
          {
            label: "Databases",
            backgroundColor: utils.hexToRgb(
              colors[this.localStorage.theme],
              0.1
            ),
            borderWidth: 1,
            borderColor: utils.hexToRgb(colors[this.localStorage.theme], 1),
            data: numbers,
          },
        ],
      };
      const areaData = {
        labels: labels,
        datasets: [
          {
            label: "Databases",
            fill: {
              target: "origin",
              above: utils.hexToRgb(colors[this.localStorage.theme], 0.1), // Area will be red above the origin
              below: utils.hexToRgb(colors[this.localStorage.theme], 0.1), // And blue below the origin
            },
            backgroundColor: utils.hexToRgb(
              colors[this.localStorage.theme],
              0.4
            ),
            borderWidth: 1,
            borderColor: utils.hexToRgb(colors[this.localStorage.theme], 1),
            data: numbers,
          },
        ],
      };

      let ctx2 = document.getElementById("myChart");
      const chart = new Chart(ctx2, {
        type: "bar",
        data: data,
        options: {},
      });

      let ctx1 = document.getElementById("lineChart");
      let purple = utils.hexToRgb(
        `#${utils.getThemeColors()[this.localStorage.theme]}`,
        0.1
      );
      let green = utils.hexToRgb(`#${utils.getThemeColors()["steel"]}`, 0.1);
      let purpleborder = utils.hexToRgb(
        `#${utils.getThemeColors()[this.localStorage.theme]}`,
        1
      );
      let greenborder = utils.hexToRgb(
        `#${utils.getThemeColors()["steel"]}`,
        1
      );
      let rcolors = [purple, green];
      let bordercolors = [purpleborder, greenborder];
      const lineChart = new Chart(ctx1, {
        type: "doughnut",
        data: {
          labels: ["USED", "FREE"],
          datasets: [
            {
              label: "Databases",
              backgroundColor: rcolors,
              borderColor: bordercolors,
              borderWidth: 1,
              data: [25, 75],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          elements: {
            line: {
              borderWidth: 3,
            },
          },
        },
      });

      let ctx = document.getElementById("areaChart");
      const areaChart = new Chart(ctx, {
        type: "line",
        data: areaData,
        options: {
          layout: {
            padding: {
              left: -10,
            },
          },
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {},
            },
            y: {
              ticks: {},
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  data() {
    return {
      localStorage: localStorage,
    };
  },
  mounted() {
    try {
      this.loadCharts();
    } catch {}
  },
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
          <section
            class="
              w-full
              rounded-lg
              p-3
              bg-gradient-to-b
              from-steel-300
              to-steel-400
            "
          >
            <canvas id="areaChart"></canvas>
          </section>
        </div>

        <div class="flex flex-wrap">
          <section
            class="
              w-full
              rounded-lg
              bg-gradient-to-b
              from-steel-300
              to-steel-400
              p-3
            "
          >
            <canvas id="myChart" class=""></canvas>
          </section>
        </div>
        <div>
          <section class="flex flex-wrap">
            <div
              class="
                flex flex-wrap
                rounded-lg
                bg-gradient-to-b
                from-steel-300
                to-steel-400
                p-5
              "
            >
              <canvas id="lineChart"></canvas>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>
