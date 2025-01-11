<script lang="ts" setup>
defineProps<{
  onShowSidebar: () => void;
}>();
</script>

<template>
  <nav class="the_appbar">
    <div class="the_appbar__content">
      <button @click="onShowSidebar">
        <img src="/logo.png" alt="Logo" />
      </button>
      <h1><router-link to="/" class="!no-underline">Vue Formik</router-link></h1>
      <div class="grow" />
      <a href="https://github.com/vue-formik/vue-formik" target="_blank"> ⭐ Star us on GitHub </a>
    </div>
  </nav>
</template>

<style lang="sass">
.the_appbar
  @apply border-b border-surface-b
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
    border-radius: 50%
  h1
    margin: 0
    font-size: 1rem
  a
    color: white
    text-decoration: none
    @apply text-sm
    &:hover
      text-decoration: underline
</style>
