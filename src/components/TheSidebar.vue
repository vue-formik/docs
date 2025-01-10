<template>
  <aside class="the-sidebar">
    <ul class="flex flex-col gap-2">
      <template v-for="(item, index) in navItems" :key="index">
        <li>
          <p>
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
    children: [{ name: "useFormik", path: "/docs/composable/use-formik" }],
  },
  {
    name: "Components",
    children: [
      { name: "Why Components?", path: "/docs/components/why" },
      { name: "Input Field", path: "/docs/components/input-field" },
      { name: "Select Field", path: "/docs/components/select-field" },
      { name: "Textarea Field", path: "/docs/components/textarea-field" },
      { name: "Content Editable", path: "/docs/components/contenteditable-field" },
    ],
  },
];
</script>

<style lang="sass">
.the-sidebar
  @apply col-span-1 pt-4 pl-2
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
        @apply mb-1
</style>
