<template>
  <TheAppbar ref="appBarRef" :toggle-sidebar="toggleSidebar" :is-expanded="sidebarState" />
  <TheSidebar
    v-if="showSidebar || screenWidth < 640"
    :class="{
      show: sidebarState,
    }"
    :toggle-sidebar="closeSidebar"
    :is-mobile="screenWidth < 780"
  />
  <div
    v-if="showSidebar && screenWidth < 780 && sidebarState"
    class="the-sidebar-mobile-overlay"
    title="Close Sidebar"
    @click="sidebarState = false"
  />
  <main
    id="main-content"
    :class="{
      app_main: true,
      with_sidebar: showSidebar,
    }"
    tabindex="-1"
  >
    <NuxtPage />
  </main>
  <TheFooter v-if="showFooter" />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from "vue";
import TheAppbar from "@/components/TheAppbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSidebar from "@/components/TheSidebar.vue";

const route = useRoute();

const sidebarState = ref(false);
const showSidebar = computed(() => {
  const meta = route.meta as { sidebar?: boolean };
  return meta.sidebar ?? false;
});
const showFooter = computed(() => {
  const meta = route.meta as { footer?: boolean };
  return meta.footer ?? false;
});

const toggleSidebar = () => {
  sidebarState.value = !sidebarState.value;
};
const closeSidebar = () => {
  sidebarState.value = false;
};

const screenWidth = ref(0);
onMounted(() => {
  if (process.client) {
    // Set dark mode as default
    document.documentElement.classList.add("dark");

    screenWidth.value = window.innerWidth;
    window.addEventListener("resize", () => {
      screenWidth.value = window.innerWidth;
      if (screenWidth.value > 780) {
        sidebarState.value = true;
      }
    });
  }
});
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", () => {
      screenWidth.value = window.innerWidth;
    });
  }
});

const appBarRef = useTemplateRef<InstanceType<typeof TheAppbar>>("appBarRef");

const appBarHeight = computed(() => {
  return appBarRef.value ? appBarRef.value.$el.clientHeight + "px" : 0;
});
</script>

<style>
@reference "tailwindcss";

@media (min-width: 1400px) {
  .the-sidebar {
    @apply w-[460px];
  }
}

@media (min-width: 780px) {
  .the-sidebar {
    @apply flex justify-end fixed bottom-0 left-0 z-[50];
    background-color: var(--color-surface);
    top: v-bind(appBarHeight);
  }
  .the-sidebar > ul {
    @apply w-[230px];
  }
}

@media (max-width: 780px) {
  .the-sidebar {
    @apply w-[300px] fixed top-0 left-0 h-full z-[102];
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  .the-sidebar.show {
    transform: translateX(0);
  }
}

.the-sidebar-mobile-overlay {
  @apply fixed top-0 left-0 w-full h-full;
  @apply cursor-pointer z-[101];
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

.app_main {
  @apply flex flex-col;
  @apply max-w-[1610px];
}

.app_main:not(.with_sidebar) {
  @apply mx-auto;
}

@media (min-width: 1400px) {
  .app_main.with_sidebar {
    padding-left: 466px !important;
  }
}

@media (min-width: 780px) and (max-width: 1399px) {
  .app_main.with_sidebar {
    padding-left: 250px !important;
  }
}
</style>
