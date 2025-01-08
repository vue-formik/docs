<template>
  <section class="app_section">
    <TheAppbar />
    <div
      class="grid"
      :style="{
        gridTemplateColumns: '200px 1fr 1fr',
      }"
    >
      <TheSidebar v-if="showSidebar" />
      <main
        :class="{
          app_main: true,
          'col-span-2': showSidebar,
          'col-span-3': !showSidebar,
        }"
      >
        <router-view />
      </main>
    </div>
    <TheFooter />
  </section>
</template>
<script setup lang="ts">
import { computed } from "vue";
import TheAppbar from "@/components/TheAppbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useRouter } from "vue-router";
import TheSidebar from "@/components/TheSidebar.vue";
const router = useRouter();

const showSidebar = computed(() => router.currentRoute.value.meta.sidebar);
</script>
<style lang="sass">
.app_section
  @apply max-w-[1400px] mx-auto
  .app_main
    @apply flex flex-col
    min-height: calc(100vh - 52px - 52px)
</style>
