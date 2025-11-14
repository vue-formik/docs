<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import theSidebarItems from "@/constants/theSidebarItems";

const route = useRoute();
const currentUrl = route.fullPath;

// find next and previous route baseed on TheSidebarItems
const nextRoute = ref<{ name: string; path: string } | null>(null);
const previousRoute = ref<{ name: string; path: string } | null>(null);

theSidebarItems.forEach((item, blockIndex) => {
  item.children.forEach((child, childIndex) => {
    if (child.path === currentUrl) {
      const prevChild = item.children[childIndex - 1];
      if (prevChild) {
        previousRoute.value = prevChild;
      } else {
        const prevBlock = theSidebarItems[blockIndex - 1];
        if (prevBlock) {
          const lastChild = prevBlock.children.slice(-1)[0];
          if (lastChild) {
            previousRoute.value = lastChild;
          }
        }
      }

      const nextChild = item.children[childIndex + 1];
      if (nextChild) {
        nextRoute.value = nextChild;
      } else {
        const nextBlock = theSidebarItems[blockIndex + 1];
        if (nextBlock) {
          const firstChild = nextBlock.children[0];
          if (firstChild) {
            nextRoute.value = firstChild;
          }
        }
      }
    }
  });
});
</script>

<template>
  <div class="nav-link--container">
    <router-link v-if="previousRoute" :to="previousRoute.path" class="nav-link">
      <div class="nav-link--icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block -mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div class="nav-link--info">
        <h5>Previous</h5>
        <p>{{ previousRoute.name }}</p>
      </div>
    </router-link>
    <span v-else></span>
    <router-link v-if="nextRoute" :to="nextRoute.path" class="nav-link">
      <div class="nav-link--info">
        <h5>Next</h5>
        <p>{{ nextRoute.name }}</p>
      </div>
      <div class="nav-link--icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block -mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.nav-link {
  &--container {
    @apply flex justify-between mt-20;
    @apply border-t pt-2 border-gray-600;
  }
  @apply flex items-center gap-4;
  @apply py-4 rounded-md;
  &--info {
    @apply flex flex-col text-sm;
    h5 {
      @apply font-semibold mb-1 text-xs text-white;
    }
    p {
      @apply text-primary;
    }
  }
  @apply brightness-75 opacity-80;
  &:hover {
    @apply brightness-100 opacity-100;
  }
  @apply transition-all duration-300 ease-in-out;
}
</style>
