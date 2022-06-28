
<script>
export default {
  props: {
    icon: String,
    name: String,
    children: Array,
  },
  data() {
    return {
      localStorage: localStorage,
      show: false,
    };
  },
};
</script>

<template>
  <div>
    <div class="relative duration-300 transition-all">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center p-2 text-indigo-100 rounded-md"
      >
        <div class="space-x-3 flex items-center">
          <i :class="`md:block hidden ${icon} w-3 h-3`"></i>
          <span class="">{{ name }}</span>
        </div>
      </button>

      <div
        v-show="show"
        :class="`w-full py-2 mt-2 bg-${localStorage.theme}-400 rounded-md`"
      >
        <router-link
          v-for="child in children"
          :key="child"
          :to="child.href"
          :class="`block px-4 py-2 text-sm text-indigo-100 hover:bg-${localStorage.theme}-300`"
        >
          <div class="flex items-center space-x-2">
            <i :class="`md:block hidden ${child.icon} w-3 h-3`"></i>
            <span>{{ child.name }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
