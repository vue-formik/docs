<template>
  <div class="info_page">
    <h1>Quick Start</h1>
    <hr />
    <h2>Try Vue-Formik Online</h2>
    <p>
      To quickly try out Vue-Formik, you can use the online
      <router-link to="/playground">playground</router-link>. It is a code editor that allows you to
      write Vue-Formik code and see the results in real-time.
    </p>

    <hr class="my-6" />

    <h2>Installation</h2>

    <p>
      You can install Vue-Formik using npm or yarn. Here is the command to install it using npm:
    </p>

    <div>
      <div class="">
        <button
          v-for="(_, packageManager) in installCommands"
          :key="packageManager"
          class="install-command"
          :class="{
            'border-b-2 !rounded-none first:!rounded-tl-lg last:!rounded-tr-lg': true,
            'bg-[#242424] border-primary': activeTab === packageManager,
            'bg-[#2f2f2f] border-secondary': activeTab !== packageManager,
          }"
          @click="activeTab = packageManager"
        >
          {{ packageManager }}
        </button>
      </div>
      <CodeBlock class="mt-0" :content="installCommands[activeTab]" />
    </div>

    <p>
      After installing Vue-Formik, you can import hooks or components from the library and start
      using them in your Vue components. No additional setup is required.
    </p>

    <hr class="my-6" />

    <h2>Usage</h2>

    <p>
      Vue-Formik provides a set of hooks and components that you can use to interact with your
      forms. Here is a minimal example of how you can use Vue-Formik to create a simple form with a
      single input field:
    </p>

    <CodeBlock :content="minimalExample" />
  </div>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/core/CodeBlock.vue";
import minimalExample from "@/constants/examples/minimalExample.ts";
import { ref } from "vue";

const installCommands = {
  npm: `npm i vue-formik`,
  yarn: `yarn add vue-formik`,
  pnpm: `pnpm i vue-formik`,
};
type iC = typeof installCommands;
const activeTab = ref<keyof iC>("npm");
</script>

<style scoped></style>
