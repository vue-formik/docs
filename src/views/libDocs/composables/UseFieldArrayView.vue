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
</script>

<template>
  <section class="info_page">
    <section>
      <h1 class="!mb-8">✨ <code>useFieldArray</code> Composable</h1>

      <p class="mb-2">
        The <code>useFieldArray</code> composable is a utility function that helps you manage arrays
        of fields in your form. This composable is useful when you have a dynamic list of fields
        that can be added or removed by the user.
      </p>
    </section>

    <section>
      <h2 class="!mb-4">📦 Usage</h2>

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
      <h2 class="!mb-4">📚 API</h2>

      <p class="mb-2">The composable returns an object with the following properties:</p>

      <h3>1. push <code class="!text-sm">(field: string, value: unknown, index?: number)</code></h3>
      <p class="mb-2">
        A function that adds a new field to the array. The <code>field</code> parameter is the name
        of the field, the <code>value</code> parameter is the initial value of the field, and the
        <code>index</code> parameter is the index at which to insert the field.
      </p>

      <h3>2. pop <code class="!text-sm">(field: string, index?: number)</code></h3>

      <p class="mb-2">
        A function that removes the last field from the array. The <code>field</code> parameter is
        the name of the field, and the <code>index</code> parameter is the index of the field to
        remove.
      </p>

      <blockquote>
        <p class="font-semibold">Note: Out of Bound</p>
        <p>
          If the provided index is out of bounds, the function will log a warning message to the
          console and do nothing.
        </p>

        <p>If no index is provided, the function will remove the last field in the array.</p>
      </blockquote>
    </section>
  </section>
</template>
