<script>
import Downloader from "@/components/misc/DownloadBox.vue";

export default {
  components: { Downloader },
  data() {
    return {
      localStorage: localStorage,
    };
  },
};
</script>

<template>
  <main class="">
    <section class="mt-5">
      <div class="grid grid-cols-2 gap-5 w-full">
        <section class="w-full">
          <main>
            <div>
              <h2 class="text-xl font-semibold">Download Statistics</h2>
            </div>
            <div>
              <Downloader />
              <Downloader />
              <Downloader />
              <Downloader />
            </div>
          </main>
        </section>
      </div>
    </section>
  </main>
</template>
