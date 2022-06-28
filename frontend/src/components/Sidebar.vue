<script>
import URL from "@/components/SidebarLinkTag.vue";
import Dropdown from "@/components/SidebarDropdown.vue";
export default {
  components: { URL, Dropdown },
  data() {
    return {
      LibraryDropdownData: [
        {
          name: "Uptime Bot",
          icon: "fa-solid fa-table-tennis-paddle-ball",
          href: "/uptime",
        },
      ],
      localStorage: localStorage,
    };
  },
  methods: {
    changeTheme(theme) {
      this.localStorage.theme = theme;
    },
  },
};
</script>

<template>
  <main>
    <section class="p-5">
      <div
        :class="`
          p-3
          h-screen
          w-full
          bg-gradient-to-b
          from-${localStorage.theme}-300
          to-${localStorage.theme}-500
          rounded-lg
        `"
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
          <Dropdown
            href="/library"
            name="Library"
            icon="fa-solid fa-book"
            :children="LibraryDropdownData"
          />
        </section>
      </div>
    </section>
  </main>
</template>
