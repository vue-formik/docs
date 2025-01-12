<template>
  <TheAppbar ref="appBarRef" :toggle-sidebar="toggleSidebar" />
  <TheSidebar
    v-if="showSidebar"
    :class="{
      show: sidebarState,
    }"
    :toggle-sidebar="toggleSidebar"
  />
  <div
    v-if="showSidebar && screenWidth < 780 && sidebarState"
    class="the-sidebar-mobile-overlay"
    title="Close Sidebar"
    @click="sidebarState = false"
  />
  <main
    :class="{
      app_main: true,
      with_sidebar: showSidebar,
    }"
  >
    <router-view />
  </main>
  <TheFooter v-if="showFooter" />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from "vue";
import TheAppbar from "@/components/TheAppbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useRouter } from "vue-router";
import TheSidebar from "@/components/TheSidebar.vue";
const router = useRouter();

const sidebarState = ref(false);
const showSidebar = computed(() => router.currentRoute.value.meta.sidebar);
const showFooter = computed(() => router.currentRoute.value.meta.footer);

const toggleSidebar = () => {
  sidebarState.value = !sidebarState.value;
};

const screenWidth = ref(0);
onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
    if (screenWidth.value > 780) {
      sidebarState.value = true;
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

const appBarRef = useTemplateRef<InstanceType<typeof TheAppbar>>("appBarRef");

const appBarHeight = computed(() => {
  return appBarRef.value ? appBarRef.value.$el.clientHeight + "px" : 0;
});
</script>

<style lang="sass">
.the-sidebar
  @media (min-width: 1400px)
    @apply w-[460px]
  @media (min-width: 780px)
    @apply flex justify-end bg-surface
    @apply fixed bottom-0 left-0 z-[50]
    top: v-bind(appBarHeight)

    & > ul
      @apply w-[230px]

  @media (max-width: 780px)
    @apply w-[300px] fixed top-0 left-0 h-full z-[102]
    background-color: rgba(0, 0, 0, 0.7)
    backdrop-filter: blur(10px)
    transform: translateX(-100%)
    transition: transform 0.3s ease-in-out
    &.show
      transform: translateX(0)

.the-sidebar-mobile-overlay
  @apply fixed top-0 left-0 w-full h-full
  @apply cursor-pointer z-[101]
  background-color: rgba(0, 0, 0, 0.5)
  backdrop-filter: blur(10px)

.app_main
  @apply flex flex-col
  @apply max-w-[1610px]
  &:not(.with_sidebar)
    @apply mx-auto
  &.with_sidebar
    @media (min-width: 1400px)
      padding-left: 466px !important
    @media (min-width: 780px) and (max-width: 1399px)
      padding-left: 250px !important
</style>
