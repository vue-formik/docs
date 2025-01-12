<template>
  <aside class="the-sidebar">
    <ul class="flex flex-col gap-2">
      <template v-for="(item, index) in TheSidebarItems" :key="index">
        <li>
          <p>
            {{ item.name }}
          </p>
          <ul v-if="item.children" class="">
            <template v-for="(child, i) in item.children" :key="i">
              <li>
                <router-link :to="child.path" @click="toggleSidebar">
                  {{ child.name }}
                </router-link>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import TheSidebarItems from "@/constants/theSidebarItems.ts";

defineProps<{
  toggleSidebar: () => void;
}>();
</script>

<style lang="sass">
.the-sidebar
  @apply pt-4 pl-2
  @apply border-r border-surface-b

  ul
    li
      @apply px-2 text-sm
      & > p
        @apply mt-5 mb-1.5 text-xs
      a
        @apply text-gray-400 rounded
        @apply transition-all duration-200 ease-in-out
        &:hover
          @apply text-white brightness-110
        &:active
          @apply text-white brightness-90
        &.router-link-exact-active
          @apply text-primary
      ul li
        @apply mb-1.5
</style>
