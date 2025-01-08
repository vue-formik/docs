<template>
  <nav class="the_appbar">
    <img src="/logo.png" alt="Logo" />
    <h1><router-link to="/">Vue Formik</router-link></h1>
    <div class="grow" />
    <a href="https://github.com/vue-formik/vue-formik" target="_blank"> ⭐ Star us on GitHub </a>
  </nav>
</template>
<style lang="sass">
.the_appbar
  display: flex
  align-items: center
  padding: .5rem 1rem
  color: white
  gap: .5rem
  @apply border-b border-surface-b
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
