<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import IPLog from "@/components/IPLogs.vue";
import { getRelativePosition } from "chart.js/helpers";
import utils from "@/assets/js/utils";

export default {
  components: { IPLog },
  data() {
    return {};
  },
  mounted() {
    const numbers = [10, 15, 12, 14, 18, 20, 14, 16, 15];
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Databases",
          backgroundColor: utils.hexToRgb("#6755ED", 0.4),
          borderWidth: 1,
          borderColor: utils.hexToRgb("#6755ED", 1),
          data: numbers,
        },
      ],
    };
    const lineData = {
      labels: labels,
      datasets: [
        {
          label: "Databases",
          backgroundColor: utils.hexToRgb("#45D16A", 0.4),
          borderWidth: 1,
          borderColor: utils.hexToRgb("#45D16A", 1),
          data: numbers,
        },
      ],
    };
    const areaData = {
      labels: labels,
      datasets: [
        {
          label: "Databases",
          fill: "origin",
          backgroundColor: utils.hexToRgb("#D14545", 0.4),
          borderWidth: 1,
          borderColor: utils.hexToRgb("#D14545", 1),
          data: numbers,
        },
      ],
    };

    const chart = new Chart(document.getElementById("myChart"), {
      type: "bar",
      data: data,
    });

    const lineChart = new Chart(document.getElementById("lineChart"), {
      type: "line",
      data: lineData,
    });

    const areaChart = new Chart(document.getElementById("areaChart"), {
      type: "line",
      data: areaData,
    });
  },
};
</script>

<template>
  <main class="">
    <section class="py-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <h5 class="text-winkle-300 text-lg">1,000,000</h5>
          <h3 class="text-xs text-purp">Sales</h3>
        </section>
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <h5 class="text-winkle-300 text-lg">1,000,000</h5>
          <h3 class="text-xs text-emerald">Sales</h3>
        </section>
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <h5 class="text-winkle-300 text-lg">1,000,000</h5>
          <h3 class="text-xs text-flush">Sales</h3>
        </section>
      </div>
    </section>
    <section class="">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <canvas id="myChart"></canvas>
        </section>
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <canvas id="lineChart"></canvas>
        </section>
        <section
          class="rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
        >
          <canvas id="areaChart"></canvas>
        </section>
      </div>
    </section>
    <section class="mt-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section class="space-y-2">
          <IPLog />
          <IPLog />
          <IPLog />
          <IPLog />
          <IPLog />
          <IPLog />
          <IPLog />
        </section>
      </div>
    </section>
  </main>
</template>
