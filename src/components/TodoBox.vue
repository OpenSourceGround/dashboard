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
          <div>
            <button
              :class="`bg-${color} bg-opacity-50 float-right px-3 text-xs py-1 rounded-full border-${color} border`"
            >
              Manage
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>