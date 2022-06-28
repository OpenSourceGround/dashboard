<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

import utils from "@/assets/js/utils";
import IPLog from "@/components/IPLogs.vue";
import TodoList from "@/components/TodoBox.vue";
import { getRelativePosition } from "chart.js/helpers";

export default {
  components: { IPLog, TodoList },
  data() {
    return {};
  },
  mounted() {
    const numbers = utils.fakeDatasetsArray(50, 50, 100);
    const labels = numbers;
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
          backgroundColor: utils.hexToRgb("#6755ED", 0.1),
          borderWidth: 1,
          borderColor: utils.hexToRgb("#6755ED", 1),
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
            above: utils.hexToRgb("#6755ED", 0.1), // Area will be red above the origin
            below: utils.hexToRgb("#6755ED", 0.1), // And blue below the origin
          },
          backgroundColor: utils.hexToRgb("#6755ED", 0.4),
          borderWidth: 1,
          borderColor: utils.hexToRgb("#6755ED", 1),
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
            backgroundColor: utils.hexToRgb("#45D16A", 0.1),
            borderWidth: 1,
            borderColor: utils.hexToRgb("#45D16A", 1),
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
};
</script>

<template>
  <main class="">
    <section class="py-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section
          class="rounded-lg bg-gradient-to-r from-purp-300 to-purp-400 p-5"
        >
          <div class="grid grid-cols-2 items-center">
            <h5 class="text-winkle-300 text-lg">1,000,000</h5>
            <div>
              <i class="fa-solid fa-bolt float-right"></i>
            </div>
          </div>
          <div class="bg-purp-500">
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
        <section
          class="rounded-lg bg-gradient-to-r from-purp-300 to-purp-400 p-5"
        >
          <div class="grid grid-cols-2 items-center">
            <h5 class="text-winkle-300 text-lg">1,000,000</h5>
            <div>
              <i class="fa-solid fa-bolt float-right"></i>
            </div>
          </div>
          <div class="bg-purp-500">
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
        <section
          class="rounded-lg bg-gradient-to-r from-purp-300 to-purp-400 p-5"
        >
          <div class="grid grid-cols-2 items-center">
            <h5 class="text-winkle-300 text-lg">1,000,000</h5>
            <div>
              <i class="fa-solid fa-bolt float-right"></i>
            </div>
          </div>
          <div class="bg-purp-500">
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
              p-5
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
    <section class="mt-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section class="space-y-3">
          <TodoList :active="true" />
          <TodoList />
          <TodoList />
          <TodoList :active="true" />
        </section>
      </div>
    </section>

    <section class="mt-5">
      <div class="grid grid-cols-3 gap-5 w-full">
        <section class="space-y-3">
          <section
            class="
              w-full
              rounded-lg
              bg-gradient-to-b
              from-steel-300
              to-steel-400
              bg-pos-0
              hover:bg-pos-100
              duration-500
              bg-size-200
              transition-all
              p-5
            "
          >
            <section>
              <div>
                <div class="">
                  <div
                    class="
                      flex flex-wrap
                      text-winkle-300
                      items-center
                      space-x-3
                    "
                  >
                    <div>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
                        class="w-10 h-10"
                      />
                    </div>
                    <div>
                      <h2>VSCode</h2>
                      <h2 class="text-xs text-slate-400">
                        My Online Visual Studio Code IDE
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </section>
    <section></section>
  </main>
</template>
