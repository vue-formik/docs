<template>
  <aside class="the-sidebar">
    <h2 class="">Vue Formik</h2>
    <ul class="flex flex-col gap-2">
      <template v-for="(item, index) in navItems" :key="index">
        <li>
          <p class="mt-6 mb-1.5">
            {{ item.name }}
          </p>
          <ul v-if="item.children" class="">
            <template v-for="(child, i) in item.children" :key="i">
              <li>
                <router-link :to="child.path" class="">
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
const navItems = [
  {
    name: "Getting Started",
    children: [
      { name: "Introduction", path: "/getting-started/introduction" },
      { name: "Quick Start", path: "/getting-started/quick-start" },
    ],
  },
  {
    name: "Composable",
    children: [{ name: "useFormik", path: "/composable/use-formik" }],
  },
  {
    name: "Components",
    children: [
      { name: "Why Components?", path: "/components/why" },
      { name: "Input", path: "/components/input" },
      { name: "Select", path: "/components/select" },
      { name: "Textarea", path: "/components/textarea" },
      { name: "Content Editable", path: "/components/content-editable" },
    ],
  },
];
</script>
<style lang="sass">
.the-sidebar
  @apply col-span-1 pt-6
  @apply border-r border-surface-b

  h2
    @apply font-bold p-2

  ul
    li
      @apply px-2 text-sm
      a
        @apply text-gray-400 rounded
        @apply transition-all duration-200 ease-in-out
        &:hover
          @apply text-white brightness-110
        &:active
          @apply text-white brightness-90
        &.router-link-exact-active
          @apply text-primary
</style>
