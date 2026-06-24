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
const { push, pop, insert, remove, move, swap, replace } = useFieldArray(formik);`;

const OpsExample = `const fa = useFieldArray(formik);

fa.push('users', { name: 'Cara', age: 22 });   // append
fa.push('users', { name: 'Dan', age: 41 }, 1);  // insert at index (same as insert)
fa.insert('users', 0, { name: 'Eve', age: 33 }); // insert at index 0
fa.remove('users', 2);                           // remove at index 2
fa.move('users', 0, 3);                          // move item 0 -> 3
fa.swap('users', 1, 4);                          // swap items 1 and 4
fa.replace('users', 0, { name: 'Updated', age: 50 });
fa.pop('users');                                 // remove last`;

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

      <p class="mb-2">
        The composable returns the following array-manipulation helpers. All of them read and write
        through the formik instance immutably (the array is cloned before mutation), and
        out-of-bounds indices log a warning and no-op.
      </p>

      <CodeBlock :content="OpsExample" />

      <h3>
        push <code class="text-sm!">(field: string, value: unknown, index?: number)</code>
      </h3>
      <p class="mb-2">
        Appends <code>value</code> to the array. If <code>index</code> is given, inserts at that
        index instead.
      </p>

      <h3>pop <code class="text-sm!">(field: string, index?: number)</code></h3>
      <p class="mb-2">
        Removes the last item, or the item at <code>index</code> when provided.
      </p>

      <h3>insert <code class="text-sm!">(field: string, index: number, value: unknown)</code></h3>
      <p class="mb-2">Inserts <code>value</code> at <code>index</code>, shifting later items right.</p>

      <h3>remove <code class="text-sm!">(field: string, index: number)</code></h3>
      <p class="mb-2">Removes the item at <code>index</code>, shifting later items left.</p>

      <h3>move <code class="text-sm!">(field: string, from: number, to: number)</code></h3>
      <p class="mb-2">Moves an item from one index to another.</p>

      <h3>swap <code class="text-sm!">(field: string, indexA: number, indexB: number)</code></h3>
      <p class="mb-2">Swaps the items at two indices.</p>

      <h3>replace <code class="text-sm!">(field: string, index: number, value: unknown)</code></h3>
      <p class="mb-2">Replaces the item at <code>index</code> with a new value.</p>

      <blockquote>
        <p class="font-semibold">Note: Out of Bounds</p>
        <p>
          If an index is out of bounds, the function logs a warning to the console and makes no
          change.
        </p>
      </blockquote>
    </section>
  </section>
</template>
