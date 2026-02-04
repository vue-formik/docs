<script lang="ts" setup>
import { computed } from "vue";
import { Button } from "@/components/ui/button";

const props = defineProps<{
  toggleSidebar: () => void;
  isExpanded?: boolean;
}>();

const ariaExpanded = computed(() => props.isExpanded?.toString() ?? "false");
</script>

<template>
  <nav class="the_appbar">
    <div class="the_appbar__content">
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle sidebar navigation"
        :aria-expanded="ariaExpanded"
        aria-controls="sidebar-navigation"
        @click="toggleSidebar"
      >
        <img src="/logo.png" alt="Vue Formik Logo" />
      </Button>
      <h1><NuxtLink to="/" class="no-underline!">Vue Formik</NuxtLink></h1>
      <div class="grow hidden sm:block" />
      <NuxtLink class="hidden sm:block" to="/about">About</NuxtLink>
      <NuxtLink class="hidden sm:block" to="/demo">Demo</NuxtLink>
      <a class="hidden sm:block" href="https://github.com/vue-formik/vue-formik" target="_blank">
        ⭐ Star us on GitHub
      </a>
    </div>
  </nav>
</template>

<style>
@reference "tailwindcss";

.the_appbar {
  @apply sticky top-0 z-[100];
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-surface-b);
}

.the_appbar__content {
  @apply flex items-center py-2 px-4 text-white gap-2;
  @apply max-w-[1400px] mx-auto;
}

.the_appbar img {
  @apply size-8 min-h-8 min-w-8 rounded-full;
}

.the_appbar h1 a {
  @apply m-0 p-0 whitespace-nowrap leading-none;
  @apply text-[clamp(1.2rem,1.5vw,2rem)];
}

.the_appbar a {
  @apply text-white no-underline text-sm px-2 mx-2;
}

.the_appbar a:hover {
  @apply underline;
}
</style>
