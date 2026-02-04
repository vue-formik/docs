<script setup lang="ts">
import CodeBlock from "@/components/core/CodeBlock.vue";

const ImportExample = `import { useFieldArray } from 'vue-formik';

const formik = useFormik({
  initialValues: {
    users: [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
    ],
  },
});
const { push, pop } = useFieldArray(formik);`;

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "useFieldArray - Vue Formik",
  description:
    "Learn how to use the useFieldArray composable to manage dynamic arrays of fields in Vue Formik forms.",
  keywords: ["vue-formik", "useFieldArray", "composable", "arrays", "dynamic forms"],
});
</script>

<template>
  <section class="info_page">
    <section>
      <h1 class="mb-8!">✨ <code>useFieldArray</code> Composable</h1>

      <p class="mb-2">
        The <code>useFieldArray</code> composable is a utility function that helps you manage arrays
        of fields in your form. This composable is useful when you have a dynamic list of fields
        that can be added or removed by the user.
      </p>
    </section>

    <section>
      <h2 class="mb-4!">📦 Usage</h2>

      <p>
        To use the <code>useFieldArray</code> composable, you need to pass the formik object as an
        argument.
      </p>

      <CodeBlock :content="ImportExample" />

      <blockquote>
        <p class="font-semibold">Note: <code>formik</code> parameter</p>
        <p>
          The <code>formik</code> parameter is the object returned by the
          <code>useFormik</code> composable.
        </p>
      </blockquote>
    </section>

    <section>
      <h2 class="mb-4!">📚 API</h2>
      <!-- Add API documentation here -->
    </section>
  </section>
</template>
