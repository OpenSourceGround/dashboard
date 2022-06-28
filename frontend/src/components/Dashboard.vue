<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import utils from "@/assets/js/utils";
import IPLog from "@/components/IPLogs.vue";
import TodoList from "@/components/TodoBox.vue";

export default {
  components: { IPLog, TodoList },
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
      const lineChart = new Chart(ctx1, {
        type: "doughnut",
        data: {
          labels: ["1", 1, 1],
          datasets: [
            {
              label: "Databases",
              backgroundColor: utils.hexToRgb(
                colors[this.localStorage.theme],
                0.1
              ),
              borderWidth: 1,
              borderColor: utils.hexToRgb(colors[this.localStorage.theme], 1),
              data: [1, 1, 1],
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
        <section
          :class="` rounded-lg
            bg-gradient-to-r
            from-${localStorage.theme}-300
            to-${localStorage.theme}-500
            p-5`"
        >
          <div class="grid grid-cols-2 items-center">
            <h5 class="text-winkle-300 text-lg">1,000,000</h5>
            <div>
              <i class="fa-solid fa-bolt float-right"></i>
            </div>
          </div>
          <div :class="`bg-${localStorage.theme}`">
            <div
              style="width: 45%"
              class="p-0.5 rounded-full bg-winkle-300 mt-3"
            ></div>
          </div>
          <div class="grid grid-cols-2 mt-1 items-center">
            <h5 class="text-winkle-300">Sales</h5>
            <div>
              <span class="float-right">234% ^</span>
            </div>
          </div>
        </section>
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
        <!-- <div>
          <section
            class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
          >
            <canvas id="lineChart"></canvas>
          </section>
        </div> -->
      </div>
    </section>
  </main>
</template>
