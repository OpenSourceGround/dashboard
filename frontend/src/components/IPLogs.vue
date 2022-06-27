<script>
import Flag from "@/assets/imgs/flags/Us.png";
export default {
  data() {
    return { Flag };
  },
};
</script>
<template>
  <section class="">
    <div
      class="
        rounded-lg
        text-xs
        flex
        items-center
        space-x-5
        bg-gradient-to-b
        from-steel-300
        to-steel-400
        py-1
        px-3
      "
    >
      <img :src="Flag" class="w-8" />
      <h4>
        23.235.44.164 - Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0;
        rv:11.0) like Gecko
      </h4>
    </div>
  </section>
</template>