<template>
  <aside
    class="the-sidebar"
    :style="{
      paddingLeft: isMobile ? '2rem' : '1rem',
    }"
  >
    <button
      v-if="isMobile"
      class="absolute top-1 right-1 text-xs"
      title="Close Sidebar"
      @click="toggleSidebar"
    >
      <span>Close</span>
    </button>

    <div class="sm:hidden flex items-center gap-2 my-4">
      <router-link to="/" class="!no-underline">
        <img src="/logo.png" alt="Logo" class="size-8 rounded-full" />
      </router-link>

      <h1 class="text-lg">Vue Formik</h1>
    </div>

    <ul class="flex flex-col gap-4">
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
  isMobile: boolean;
}>();
</script>

<style lang="sass">
.the-sidebar
  @apply pt-4 relative
  @apply border-r border-surface-b

  ul
    li
      @apply mb-1
      & > p
        @apply mt-5 mb-2 text-xs
      a
        @apply px-2 py-1 text-sm
        @apply text-gray-400 rounded
        @apply transition-all duration-200 ease-in-out
        &:hover
          @apply text-white brightness-110
        &:active
          @apply text-white brightness-90
        &.router-link-exact-active
          @apply text-primary
</style>
