<script lang="ts" setup>
defineProps<{
  toggleSidebar: () => void;
}>();
</script>

<template>
  <nav class="the_appbar">
    <div class="the_appbar__content">
      <button @click="toggleSidebar">
        <img src="/logo.png" alt="Logo" />
      </button>
      <h1><router-link to="/" class="!no-underline">Vue Formik</router-link></h1>
      <div class="grow hidden sm:block" />
      <router-link class="hidden sm:block" to="/about">About</router-link>
      <a class="hidden sm:block" href="https://github.com/vue-formik/vue-formik" target="_blank">
        ⭐ Star us on GitHub
      </a>
    </div>
  </nav>
</template>

<style lang="sass">
.the_appbar
  @apply sticky top-0 bg-surface
  @apply border-b border-surface-b
  @apply z-[100]
  &__content
    display: flex
    align-items: center
    padding: .5rem 1rem
    color: white
    gap: .5rem
    @apply max-w-[1400px] mx-auto

  img
    width: 2rem
    height: 2rem
    min-height: 2rem
    min-width: 2rem
    border-radius: 50%
  h1
    a
      margin: 0
      padding: 0
      font-size: clamp(1.2rem, 1.5vw, 2rem)
      white-space: nowrap
      line-height: 1
  a
    color: white
    text-decoration: none
    @apply text-sm px-2 mx-2
    &:hover
      text-decoration: underline
</style>
