<template>
  <aside
    id="sidebar-navigation"
    class="the-sidebar"
    :style="{
      paddingLeft: isMobile ? '2rem' : '1rem',
    }"
    aria-label="Main navigation"
  >
    <Button
      v-if="isMobile"
      variant="ghost"
      size="sm"
      class="absolute top-1 right-1 text-xs"
      title="Close Sidebar"
      @click="toggleSidebar"
    >
      Close
    </Button>

    <div class="sm:hidden flex items-center gap-2 my-4">
      <NuxtLink to="/" class="no-underline!">
        <img src="/logo.png" alt="Logo" class="size-8 rounded-full" />
      </NuxtLink>

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
                <NuxtLink
                  :to="child.path"
                  :aria-current="$route.path === child.path ? 'page' : undefined"
                  @click="toggleSidebar"
                >
                  {{ child.name }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import TheSidebarItems from "@/constants/theSidebarItems";

defineProps<{
  toggleSidebar: () => void;
  isMobile: boolean;
}>();
</script>

<style>
@reference "tailwindcss";

.the-sidebar {
  @apply pt-4 relative;
  border-right: 1px solid var(--color-surface-b);
}

.the-sidebar ul li {
  @apply mb-1;
}

.the-sidebar ul li > p {
  @apply mt-5 mb-2 text-xs;
}

.the-sidebar ul li a {
  @apply px-2 py-1 text-sm;
  @apply text-gray-400 rounded;
  @apply transition-all duration-200 ease-in-out;
}

.the-sidebar ul li a:hover {
  @apply text-white brightness-110;
}

.the-sidebar ul li a:active {
  @apply text-white brightness-90;
}

.the-sidebar ul li a.router-link-active,
.the-sidebar ul li a.router-link-exact-active,
.the-sidebar ul li a.nuxt-link-active,
.the-sidebar ul li a.nuxt-link-exact-active {
  color: var(--color-primary);
}
</style>
