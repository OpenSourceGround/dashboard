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
          <h2 class="space-x-2">
            <i class="fa-solid fa-door-open"></i> Welcome Back, Jareer.
          </h2>
        </section>
        <section class="space-y-2 mt-5">
          <URL href="/" name="Home" icon="fa-solid fa-earth-asia" />
          <URL href="/dashboard" name="Stats" icon="fa-solid fa-chart-simple" />
          <URL href="/todo" name="ToDo List" icon="fa-solid fa-list-check" />
          <URL href="/customize" name="Customize" icon="fa-solid fa-pen-nib" />
        </section>
      </div>
    </section>
  </main>
</template>
