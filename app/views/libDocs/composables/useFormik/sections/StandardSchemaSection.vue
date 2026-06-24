<template>
  <section>
    <h2 id="standard-schema">🧩 Standard Schema</h2>
    <p>
      <a href="https://standardschema.dev" target="_blank">Standard Schema</a> is a small, shared
      interface implemented by modern validation libraries — including
      <strong>Zod</strong>, <strong>Valibot</strong> and <strong>ArkType</strong>. Instead of a
      separate option per library, Vue Formik accepts any of them through a single
      <code>standardSchema</code> option.
    </p>
    <p>
      Pass a schema that exposes the <code>~standard</code> property and Vue Formik will validate
      against it, mapping issues back to the matching fields (including nested objects and array
      indices).
    </p>

    <h3 id="standard-schema-zod">With Zod</h3>
    <CodeBlock :content="StandardSchemaZodExample" />

    <h3 id="standard-schema-valibot">With Valibot</h3>
    <p>
      Valibot's tiny, tree-shakeable bundle pairs well with Vue Formik — and needs no dedicated
      adapter thanks to Standard Schema.
    </p>
    <CodeBlock :content="StandardSchemaValibotExample" />

    <h3 id="standard-schema-custom">Without a library</h3>
    <p>
      Because Standard Schema is just an interface, you can implement it by hand. The
      <code>StandardSchemaV1</code> type is exported from <code>vue-formik</code>.
    </p>
    <CodeBlock :content="StandardSchemaCustomExample" />

    <p>
      <strong>Tip:</strong> the dedicated <code>yupSchema</code>, <code>zodSchema</code>,
      <code>joiSchema</code> and <code>structSchema</code> options remain available, but
      <code>standardSchema</code> is the recommended path for any library that supports the spec.
    </p>
  </section>
</template>

<script setup lang="ts">
import {
  StandardSchemaZodExample,
  StandardSchemaValibotExample,
  StandardSchemaCustomExample,
} from "@/constants/examples/validationExamples";
import CodeBlock from "@/components/core/CodeBlock.vue";
</script>
