<template>
  <section class="flex flex-col justify-center grow text-center min-h-[90vh] px-4 md:px-0">
    <header class="my-12! sm:mt-0!">
      <h1 class="text-gradient">
        Vue Formik: Making Forms a Breeze
      </h1>
      <p class="text-lg">Vue Formik is a form library for Vue.js that helps you with your forms.</p>
    </header>

    <section class="mb-12">
      <div class="flex gap-4 justify-center items-center flex-wrap">
        <router-link class="primary-btn md" to="/getting-started/introduction">
          Introduction
        </router-link>
        <router-link class="secondary-btn md" to="/getting-started/quick-start">
          Get Started
        </router-link>
        <a class="secondary-btn md" target="_blank" :href="Links.Playground"> Playground </a>
      </div>
    </section>

    <section class="flex items-center justify-center mb-12 sm:mb-0">
      <ul class="flex flex-wrap gap-4 items-start text-start justify-center">
        <li class="p-4 rounded max-w-[200px]">
          <h4 class="font-semibold mb-3">Battle Tested</h4>
          <p class="text-sm">
            Vue Formik is a battle-tested library that helps you with your forms.
          </p>
        </li>

        <li class="p-4 rounded max-w-[200px]">
          <h4 class="font-semibold mb-3">Easy to Use</h4>
          <p class="text-sm">Vue Formik is easy to use and helps you with your forms.</p>
        </li>

        <li class="p-4 rounded max-w-[200px]">
          <h4 class="font-semibold mb-3">Flexible</h4>
          <p class="text-sm">Vue Formik is flexible and helps you with your forms.</p>
        </li>
      </ul>
    </section>
  </section>
</template>

<script setup lang="ts">
import Links from "@/constants/Links.js";
</script>

<style lang="scss">
.text-gradient {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 2rem !important;
  max-width: 650px;
  margin: 0 auto;
}
</style>
