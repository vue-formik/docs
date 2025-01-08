<template>
  <div class="relative">
    <button class="copy-btn" @click="onCopy">
      {{ copiedRef ? "Copied!" : "Copy" }}
    </button>
    <pre><code>{{content.trim()}}</code>
  </pre>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ content: string }>();

const copiedRef = ref(false);
const onCopy = () => {
  navigator.clipboard.writeText(props.content.trim());
  copiedRef.value = true;
  setTimeout(() => {
    copiedRef.value = false;
  }, 5000);
};
</script>
<style lang="sass" scoped>
.copy-btn
  @apply absolute top-4 right-4 text-xs p-0 h-fit w-fit block text-center

pre
  @apply bg-black flex items-center
  code
    @apply text-sm text-gray-500
</style>
