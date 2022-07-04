<script>
export default {
  props: {
    title: {
      type: String,
    },
    active: {
      type: Boolean,
    },
  },
  data() {
    return {
      color: this.active === true ? `emerald` : `flush`,
    };
  },
};
</script>
<template>
  <section
    class="w-full rounded-lg bg-gradient-to-b from-steel-300 to-steel-400 p-5"
  >
    <section>
      <div>
        <div class="grid grid-cols-2">
          <div class="flex flex-wrap text-winkle-300 items-center space-x-3">
            <div>
              <div
                :class="`bg-${color} bg-opacity-50
                border border-${color}
                p-1.5
                rounded-full`"
              ></div>
            </div>
            <div>Manage Node.js Repositories</div>
          </div>
          <div class="space-x-1">
            <div class="px-1 space-x-1">
              <button
                :class="`bg-flush ml-2  bg-opacity-50 float-right px-3 text-xs py-1 rounded border-flush border`"
              >
                Delete
              </button>
              <button
                :class="`first-letter bg-orange-500 bg-opacity-50 float-right px-3 text-xs py-1 rounded border-orange-500 border`"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>