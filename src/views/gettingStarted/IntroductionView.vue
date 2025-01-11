<template>
  <section class="info_page">
    <section>
      <h1 class="">Introduction</h1>
      <article class="my-10">
        <h4 class="flex items-center gap-2"><InfoIcon /> Did you know?</h4>
        <p>
          Vue Formik is built with <strong>TypeScript</strong> and provides a lot of type
          definitions to help you write type-safe code. It also provides a lot of utility functions
          to help you validate your form fields.
        </p>
      </article>
    </section>
    <section>
      <h2>What is Vue Formik?</h2>

      <p>
        Vue Formik is a library for Vue.js that helps you to interact with your HTML forms in a more
        structured way. It is a inspired by a popular ReactJS library called
        <a href="https://formik.org" target="_blank" title="Formik">Formik</a>. Vue Formik is a
        wrapper around Vue.js built-in reactivity system that makes it easier to work with forms.
      </p>
    </section>

    <section>
      <h3>Here is a minimal example:</h3>

      <CodeBlock :content="minimalExample" />

      <p>
        The above example shows how you can use Vue Formik to create a simple form with a single
        input field. Vue Formik provides a <code>useFormik</code> function that you can use to
        create a formik object. This object contains all the necessary functions and properties to
        interact with the form.
      </p>
    </section>

    <p>
      For validation Vue Formik supports only synchronous validation for now. But we are planning to
      add support for asynchronous validation in the future.<br />
      You can write your own custom validation functions or use Yup object schema validation library
      to validate your form fields.<br />
      The target of the library is to support most of the JS validation libraries like Joi, Zod,
      etc.
    </p>
  </section>
</template>

<script setup lang="ts">
import minimalExample from "@/constants/examples/minimalExample";
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoIcon from "@/components/svgIcons/InfoIcon.vue";
</script>
