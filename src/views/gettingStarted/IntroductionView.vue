<template>
  <section class="info_page">
    <section>
      <h1 class="">Introduction</h1>
      <article class="mb-10 mt-8">
        <h4 class="flex items-center gap-2"><InfoIcon /> Did you know?</h4>
        <p>
          Vue Formik is built with <strong>TypeScript</strong>, offering extensive type definitions
          to help you write type-safe code. Additionally, it provides numerous utility functions to
          simplify form validation.
        </p>
      </article>
    </section>

    <section>
      <h2>🤔 What is Vue Formik?</h2>

      <p>
        Vue Formik is a powerful library for Vue.js that simplifies form handling by providing a
        more structured approach to managing HTML forms. Inspired by the popular React library
        <a :href="Links.Formik" target="_blank" title="Formik">Formik</a>, Vue Formik leverages
        Vue's built-in reactivity system to streamline form development and management. 💡
      </p>
    </section>

    <section>
      <h3>📋 Minimal Example:</h3>

      <CodeBlock :content="minimalExample" />

      <p>
        The example above demonstrates how you can use Vue Formik to create a simple form with a
        single input field. At the core of Vue Formik is the <code>useFormik</code> function, which
        provides all the tools and properties you need to interact with and manage your forms
        effectively. 🔧
      </p>
    </section>

    <blockquote class="!pt-4 !pl-4">
      <h3>
        <strong>🛡️ How Validation Works?</strong>
      </h3>

      <ol class="list-decimal !ml-6">
        <li>
          Vue Formik currently supports only synchronous validation. However, support for
          asynchronous validation is on our roadmap. 🛠️
        </li>
        <li>
          You can create custom validation functions or integrate a library like
          <a :href="Links.Yup" target="_blank" title="Yup" class="text-primary">Yup</a>,
          <a :href="Links.Joi" target="_blank" title="Joi" class="text-primary">Joi</a>, or
          <a :href="Links.Zod" target="_blank" title="Zod" class="text-primary">Zod</a>

          for schema-based validation.
        </li>

        <li>
          Future plans include extending support to other popular validation libraries, such as
          VeeValidate and Vuelidate, ensuring maximum flexibility and compatibility. 🌟
        </li>
      </ol>
    </blockquote>

    <InfoPageFooter />
  </section>
</template>

<script setup lang="ts">
import minimalExample from "@/constants/examples/minimalExample";
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoIcon from "@/components/svgIcons/InfoIcon.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";
import Links from "@/constants/Links.ts";
</script>
