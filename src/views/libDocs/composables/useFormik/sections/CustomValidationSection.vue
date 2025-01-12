<template>
  <section>
    <h2 id="custom-validation">🔍 Custom Validation</h2>
    <p>
      You can define custom validation rules using the <code>validationSchema</code> parameter.
      These rules can validate simple fields, arrays, objects, or even arrays of objects.
    </p>

    <h3 id="example">Example</h3>

    <CodeBlock :content="CustomValidationObjectExample" />

    <p>
      The above example shows a validation schema for the <code>email</code> and
      <code>password</code> fields. - **Email** must be valid and is required. - **Password** must
      be at least 8 characters long and is required.
    </p>
    <p>
      Validation schemas can be customized to handle simple fields or more complex structures, such
      as arrays or nested objects.
    </p>

    <h3 id="my-form-values-arent-always-strings" class="mt-8">
      💡 My form values aren’t always strings
    </h3>
    <p>
      No worries! Validation rules can be written for arrays, objects, or even arrays of objects.
    </p>

    <CodeBlock :content="CustomValidationWithEmailArrayExample" />

    <p>
      In the example above, the <code>emails</code> field is an array of email addresses. Each email
      is validated, and errors are displayed if any email is invalid.
    </p>

    <p>
      For more complex validation rules, check out the
      <router-link to="/playground">Playground</router-link> section. 🔗
    </p>
  </section>
</template>

<script setup lang="ts">
import {
  CustomValidationObjectExample,
  CustomValidationWithEmailArrayExample,
} from "@/constants/examples/validationExamples.ts";
import CodeBlock from "@/components/core/CodeBlock.vue";
</script>
