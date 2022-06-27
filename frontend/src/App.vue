<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
</script>

<style lang="css">
@import "@/assets/css/index.css";
@import "@/assets/css/tailwinds.css";
</style>

<template class=" bg-purp-500">
  <main>
    <div class="grid-cols-12 grid">
      <div class="col-span-2">
        <Sidebar />
      </div>
      <div class="col-span-10 mr-5">
        <RouterView />
      </div>
    </div>
  </main>
</template>


