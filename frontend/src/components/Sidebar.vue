<script setup>
import URL from "@/components/SidebarLinkTag.vue";
</script>

<template>
  <main>
    <section class="p-5">
      <div
        class="
          p-3
          h-screen
          w-full
          bg-gradient-to-b
          from-purp-300
          to-purp-500
          rounded-lg
        "
      >
        <section
          class="p-2 border-b flex space-x-1 items-center border-winkle-200"
        >
          <h2>Material UI</h2>
        </section>
        <section class="space-y-2 mt-5">
          <URL href="#" name="Dashboard" icon="fa-solid fa-box-archive" />
          <URL href="#" name="Profiles" icon="fa-solid fa-user-gear" />
        </section>
      </div>
    </section>
  </main>
</template>
