<template>
  <section class="info_page">
    <section>
      <h1>Quick Start</h1>
      <p>
        This guide will help you get started with Vue-Formik. It will show you how to install the
        library, use it in your Vue components, and create a simple form.
      </p>

      <article class="my-10">
        <h4>✨ Try Vue-Formik Online</h4>
        <p>
          To quickly try out Vue-Formik, you can use the online
          <a :href="Links.Playground" target="_blank">playground</a>. It is a code editor that
          allows you to write Vue-Formik code and see the results in real-time.
        </p>
      </article>
    </section>

    <section>
      <h2>Installation</h2>

      <p>
        You can install Vue-Formik using npm or yarn. Here is the command to install it using
        <strong>{{ activeTab }}</strong
        >:
      </p>

      <div>
        <div class="flex">
          <Button
            v-for="(_, packageManager) in installCommands"
            :key="packageManager"
            :variant="activeTab === packageManager ? 'default' : 'outline'"
            :class="{
              'rounded-none first:rounded-tl-lg last:rounded-tr-lg border-b-0': true,
            }"
            @click="activeTab = packageManager"
          >
            {{ packageManager }}
          </Button>
        </div>
        <CodeBlock class="mt-0 [&_pre]:rounded-tl-none!" :content="installCommands[activeTab]" />
      </div>

      <p>
        After installing Vue-Formik, you can import hooks or components from the library and start
        using them in your Vue components. No additional setup is required.
      </p>
    </section>

    <section>
      <h2>Usage</h2>

      <p>
        Vue-Formik provides a set of hooks and components that you can use to interact with your
        forms. Here is a minimal example of how you can use Vue-Formik to create a simple form with
        a single input field:
      </p>

      <CodeBlock :content="minimalExample" />
    </section>

    <InfoPageFooter />
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/core/CodeBlock.vue";
import minimalExample from "@/constants/examples/minimalExample.ts";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";
import { ref } from "vue";
import Links from "@/constants/Links.ts";

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "Quick Start - Vue Formik",
  description:
    "Get started with Vue Formik in minutes. Learn how to install and use Vue Formik in your Vue.js projects.",
  keywords: ["vue-formik", "quick start", "installation", "vue", "forms"],
});

const installCommands = {
  npm: `npm i vue-formik`,
  yarn: `yarn add vue-formik`,
  pnpm: `pnpm i vue-formik`,
};
type iC = typeof installCommands;
const activeTab = ref<keyof iC>("npm");
</script>

<style scoped></style>
