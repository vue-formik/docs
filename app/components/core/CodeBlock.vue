<template>
  <div class="relative my-4">
    <Button variant="ghost" size="sm" class="copy-btn" @click="onCopy">
      {{ copiedRef ? "Copied!" : "Copy" }}
    </Button>
    <pre><code ref="codeRef" class="hljs" /></pre>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ref, watch, onMounted } from "vue";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/github-dark-dimmed.min.css";

hljs.registerLanguage("javascript", javascript);

const props = defineProps<{ content: string }>();

const copiedRef = ref(false);
const codeRef = ref<HTMLElement | null>(null);

const onCopy = () => {
  navigator.clipboard.writeText(props.content.trim());
  copiedRef.value = true;
  setTimeout(() => {
    copiedRef.value = false;
  }, 5000);
};

// Apply syntax highlighting
const applyHighlighting = () => {
  if (codeRef.value) {
    codeRef.value.textContent = props.content.trim();
    hljs.highlightElement(codeRef.value);
  }
};

watch(() => props.content, applyHighlighting);

onMounted(() => {
  applyHighlighting();
});
</script>

<style scoped>
@reference "tailwindcss";

.copy-btn {
  @apply absolute top-4 right-4 text-xs p-0 h-fit w-fit block text-center;
}

pre {
  @apply bg-black text-sm text-gray-500 rounded-lg overflow-auto;
  @apply p-0;
}

pre code {
  @apply p-4;
}
</style>
