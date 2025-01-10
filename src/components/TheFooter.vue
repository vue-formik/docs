<template>
  <footer class="app_footer">
    <p>
      <span>
        Made with ❤️ by
        <a class="text-yellow-100 underline" href="https://kiranparajuli.com.np"> Kiran Parajuli</a>
      </span>
      <span class="px-2">.</span>
      <span>© {{ currentYear }} Vue Formik</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const currentYear = ref(new Date().getFullYear());
</script>

<style lang="sass">
.app_footer
  display: flex
  justify-content: center
  align-items: center
  padding: 1rem
  background-color: #333
  color: white
  p
    margin: 0
    font-size: .875rem
</style>
