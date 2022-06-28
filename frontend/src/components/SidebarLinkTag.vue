<script>
export default {
  props: {
    name: String,
    href: String,
    icon: String,
  },
};
</script>
<template>
  <a
    class="
      p-2
      flex
      items-center
      space-x-2
      hover:bg-purp-200
      rounded
      duration-300
    "
    :href="href"
  >
    <i :class="`md:block hidden ${icon} w-3 h-3`"></i>
    <h2>{{ name }}</h2>
  </a>
</template>