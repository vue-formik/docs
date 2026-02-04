<template>
  <section class="info_page">
    <section>
      <h1>Nuxt</h1>
      <p>
        Official Nuxt modules for Vue Formik register form components globally so you can use
        <code>FormikForm</code>, <code>FormInput</code>, <code>FormTextArea</code>,
        <code>FormSelectField</code>, and <code>FormContentEditable</code> without importing them in
        every file. Use <code>useFormik</code> and <code>useFieldArray</code> from
        <a :href="Links.NPM" target="_blank" rel="noopener">vue-formik</a> where needed.
      </p>
    </section>

    <section>
      <h2>Nuxt 3</h2>
      <p>
        <a :href="Links.NPMNuxt3" target="_blank" rel="noopener">vue-formik-nuxt3</a> is the Nuxt 3
        module. Compatible with Nuxt <code>^3.0.0</code>.
        <a :href="Links.GithubNuxt3" target="_blank" rel="noopener" class="text-primary">GitHub</a>
      </p>

      <h3>Installation</h3>
      <div>
        <div class="flex">
          <Button
            v-for="(_, pm) in nuxt3Commands"
            :key="pm"
            :variant="activeNuxt3 === pm ? 'default' : 'outline'"
            :class="{
              'rounded-none first:rounded-tl-lg last:rounded-tr-lg border-b-0': true,
            }"
            @click="activeNuxt3 = pm"
          >
            {{ pm }}
          </Button>
        </div>
        <CodeBlock class="mt-0 [&_pre]:rounded-tl-none!" :content="nuxt3Commands[activeNuxt3]" />
      </div>

      <h3>Setup</h3>
      <p>Add the module in <code>nuxt.config.ts</code>:</p>
      <CodeBlock :content="nuxt3Config" />

      <p class="flex flex-wrap gap-x-4 gap-y-1">
        <a :href="Links.NPMNuxt3" target="_blank" rel="noopener" class="text-primary"
          >vue-formik-nuxt3 on npm →</a
        >
        <a :href="Links.GithubNuxt3" target="_blank" rel="noopener" class="text-primary"
          >GitHub repo →</a
        >
      </p>
    </section>

    <section>
      <h2>Nuxt 4</h2>
      <p>
        <a :href="Links.NPMNuxt4" target="_blank" rel="noopener">vue-formik-nuxt4</a> is the Nuxt 4
        module. Compatible with Nuxt <code>^4.0.0</code>.
        <a :href="Links.GithubNuxt4" target="_blank" rel="noopener" class="text-primary">GitHub</a>
      </p>

      <h3>Installation</h3>
      <div>
        <div class="flex">
          <Button
            v-for="(_, pm) in nuxt4Commands"
            :key="pm"
            :variant="activeNuxt4 === pm ? 'default' : 'outline'"
            :class="{
              'rounded-none first:rounded-tl-lg last:rounded-tr-lg border-b-0': true,
            }"
            @click="activeNuxt4 = pm"
          >
            {{ pm }}
          </Button>
        </div>
        <CodeBlock class="mt-0 [&_pre]:rounded-tl-none!" :content="nuxt4Commands[activeNuxt4]" />
      </div>

      <h3>Setup</h3>
      <p>Add the module in <code>nuxt.config.ts</code>:</p>
      <CodeBlock :content="nuxt4Config" />

      <p class="flex flex-wrap gap-x-4 gap-y-1">
        <a :href="Links.NPMNuxt4" target="_blank" rel="noopener" class="text-primary"
          >vue-formik-nuxt4 on npm →</a
        >
        <a :href="Links.GithubNuxt4" target="_blank" rel="noopener" class="text-primary"
          >GitHub repo →</a
        >
      </p>
    </section>

    <section>
      <h2>Usage</h2>
      <p>
        After adding the module, form components are registered globally. Import
        <code>useFormik</code> and <code>useFieldArray</code> from <code>vue-formik</code> in your
        pages or components:
      </p>
      <CodeBlock :content="usageExample" />
    </section>

    <InfoPageFooter />
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";
import Links from "@/constants/Links.ts";
import { ref } from "vue";

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "Nuxt - Vue Formik",
  description:
    "Use Vue Formik in Nuxt 3 and Nuxt 4 with official modules. vue-formik-nuxt3 and vue-formik-nuxt4 register form components globally.",
  keywords: ["vue-formik", "nuxt", "nuxt3", "nuxt4", "vue", "forms", "module"],
});

const nuxt3Commands = {
  npm: `npm i vue-formik vue-formik-nuxt3`,
  yarn: `yarn add vue-formik vue-formik-nuxt3`,
  pnpm: `pnpm add vue-formik vue-formik-nuxt3`,
};
const nuxt4Commands = {
  npm: `npm i vue-formik vue-formik-nuxt4`,
  yarn: `yarn add vue-formik vue-formik-nuxt4`,
  pnpm: `pnpm add vue-formik vue-formik-nuxt4`,
};

const nuxt3Config = `// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['vue-formik-nuxt3'],
})`;

const nuxt4Config = `// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['vue-formik-nuxt4'],
})`;

const usageExample = `<template>
  <FormikForm>
    <FormInput name="email" label="Email" type="email" />
    <FormInput name="name" label="Name" />
  </FormikForm>
</template>

<script setup lang="ts">
import { useFormik } from 'vue-formik'

const formik = useFormik({
  initialValues: { email: '', name: '' },
  onSubmit(values) {
    console.log(values)
  },
})
provide('formik', formik)
<\/script>`;

type Pm = keyof typeof nuxt3Commands;
const activeNuxt3 = ref<Pm>("npm");
const activeNuxt4 = ref<Pm>("npm");
</script>
