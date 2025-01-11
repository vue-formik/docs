<template>
  <TheAppbar
    ref="appBarRef"
    :on-show-sidebar="
      () => {
        sidebarState = !sidebarState;
      }
    "
  />
  <section class="app_content">
    <TheSidebar
      v-if="showSidebar"
      :class="{
        show: sidebarState,
      }"
    />
    <div
      v-if="showSidebar && screenWidth < 780 && sidebarState"
      @click="sidebarState = false"
      class="the-sidebar-mobile-overlay"
      title="Close Sidebar"
    />
    <main
      :class="{
        app_main: true,
      }"
    >
      <router-view />
    </main>
  </section>
  <TheFooter v-if="showFooter" ref="footerRef" />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef, type VNodeRef } from "vue";
import TheAppbar from "@/components/TheAppbar.vue";
import TheFooter from "@/components/TheFooter.vue";
import { useRouter } from "vue-router";
import TheSidebar from "@/components/TheSidebar.vue";
const router = useRouter();

const sidebarState = ref(false);
const showSidebar = computed(() => router.currentRoute.value.meta.sidebar);
const showFooter = computed(() => router.currentRoute.value.meta.footer);

const screenWidth = ref(0);
onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener("resVNodeRefize", () => {
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

const appBarRef = useTemplateRef("appBarRef");
const footerRef = useTemplateRef("footerRef");

const appBarHeight = computed(() => {
  return appBarRef.value ? appBarRef.value.$el.clientHeight + "px" : 0;
});

const footerHeight = computed(() => {
  return footerRef.value ? footerRef.value.$el.clientHeight + "px" : 0;
});

const heightPadding = computed(() => {
  if (screenWidth.value < 425) {
    return "8px";
  } else {
    return "2px";
  }
});

const calcHeight = computed(() => {
  if (showFooter && footerHeight.value) {
    return `calc(100vh - ${appBarHeight.value} - ${footerHeight.value} - ${heightPadding.value})`;
  } else {
    return `calc(100vh - ${appBarHeight.value} - ${heightPadding.value})`;
  }
});
</script>

<style lang="sass">
.app_content
  @apply flex flex-row

  .the-sidebar
    @media (min-width: 780px)
      @apply w-[40%] flex justify-end
      & > ul
        @apply w-[240px]

    @media (max-width: 780px)
      @apply w-[300px] fixed top-0 left-0 h-full z-50
      background-color: rgba(0, 0, 0, 0.7)
      backdrop-filter: blur(10px)
      transform: translateX(-100%)
      transition: transform 0.3s ease-in-out
      &.show
        transform: translateX(0)

  .the-sidebar-mobile-overlay
    @apply fixed top-0 left-0 w-full h-full
    @apply cursor-pointer z-40
    background-color: rgba(0, 0, 0, 0.5)
    backdrop-filter: blur(10px)

  .app_main
    @apply grow flex flex-col
    overflow-y: auto

    height: v-bind(calcHeight)
    max-height: v-bind(calcHeight)

    scrollbar-width: thin
    scrollbar-color: hsla(0, 0%, 100%, 0.3) hsla(0, 0%, 100%, 0.1)
</style>
