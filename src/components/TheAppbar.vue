<template>
  <nav class="the_appbar">
    <img src="/logo.png" alt="Logo">
    <h1>Vue Formik</h1>
    <div class="grow" />
    <a
      href="https://github.com/vue-formik/docs"
      target="_blank"
    >
      ⭐ Star us on GitHub
    </a>
  </nav>
</template>
<style lang="sass">
.the_appbar
  display: flex
  align-items: center
  padding: .5rem 1rem
  background-color: #333
  color: white
  gap: .5rem
  img
    width: 2rem
    height: 2rem
    border-radius: 50%
  h1
    margin: 0
    font-size: 1.5rem
  a
    color: white
    text-decoration: none
    &:hover
      text-decoration: underline
</style>
