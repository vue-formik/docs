<template>
  <section class="flex flex-col justify-center grow text-center">
    <header class="mb-12">
      <h1 class="text-gradient max-w-[650px] mx-auto">Vue Formik: Making Forms a Breeze</h1>
      <p class="text-lg">Vue Formik is a form library for Vue.js that helps you with your forms.</p>
    </header>

    <section class="mb-12">
      <div class="flex gap-4 justify-center items-center">
        <button class="primary-btn">Why Vue-Formik?</button>
        <button class="secondary-btn">Get Started</button>
        <router-link class="secondary-btn md" to="/playground">Playground</router-link>
      </div>
    </section>

    <section class="flex items-center justify-center">
      <ul class="flex flex-wrap gap-4 items-start text-start">
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
<script setup lang="ts"></script>
<style>
.text-gradient {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 1rem;
}
</style>
