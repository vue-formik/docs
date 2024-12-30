<template>
  <section class="app_section">
    <TheAppbar />
    <main class="app_main">
      <router-view />
    </main>
    <TheFooter />
  </section>
</template>
<script setup lang="ts">
import TheAppbar from "@/components/TheAppbar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>
<style lang="sass">
.app_section
  .app_main
    min-height: calc(100vh - 52px - 52px)
</style>
