<script>
import TodoList from "@/components/TodoBox.vue";

export default {
  components: { TodoList },
  data() {
    return {};
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <div class="grid grid-cols-1 gap-5 w-full">
        <section class="space-y-3">
          <TodoList :active="true" />
          <TodoList />
          <TodoList />
          <TodoList :active="true" />
        </section>
      </div>
    </section>
  </main>
</template>
