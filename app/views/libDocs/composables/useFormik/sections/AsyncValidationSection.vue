<template>
  <section>
    <h2 id="async-debounce-validation">⚡ Async Validation & Debouncing</h2>

    <p>
      Vue Formik supports both synchronous and asynchronous validation, along with debouncing to
      optimize performance and user experience.
    </p>

    <h3 id="async-validation">🔄 Asynchronous Validation</h3>
    <p>
      You can use async validation rules to perform server-side validation, check data availability,
      or validate complex business logic that requires network requests.
    </p>

    <CodeBlock :content="AsyncValidationExample" />

    <article class="my-6!">
      <h4 class="flex items-center gap-2">
        <Icon icon="lucide:info" class="h-5 w-5" /> Key Points:
      </h4>
      <ul class="list-disc ml-6">
        <li>
          Validation functions can return <code>Promise</code> objects (async/await syntax or
          explicit promises)
        </li>
        <li>
          The <code>isValidating</code> flag is automatically set to <code>true</code> during
          validation
        </li>
        <li>All promises are awaited before updating the error state</li>
        <li>Works with all schema types: custom, Yup, Joi, Zod, and Superstruct</li>
      </ul>
    </article>

    <h3 id="debounce-validation" class="mt-8">⏱️ Debounced Validation</h3>
    <p>
      When <code>validateOnChange</code> is enabled, validation runs on every field change. For
      performance optimization and better UX, you can debounce validation to wait for users to
      finish typing.
    </p>

    <CodeBlock :content="DebounceValidationExample" />

    <article class="my-6!">
      <h4 class="flex items-center gap-2">
        <Icon icon="lucide:info" class="h-5 w-5" /> How Debouncing Works:
      </h4>
      <ul class="list-disc ml-6">
        <li>
          <code>validationDebounce</code> sets the delay in milliseconds (default: 0 = no debounce)
        </li>
        <li>Validation runs only after the user stops typing for the specified duration</li>
        <li>Rapid value changes cancel previous debounced validations</li>
        <li>Only the final value is validated, reducing unnecessary validation calls</li>
        <li>Works with both sync and async validation rules</li>
      </ul>
    </article>

    <h3 id="combined-example" class="mt-8">🎯 Combined Example</h3>
    <p>You can combine async validation with debouncing for optimal performance:</p>

    <CodeBlock :content="CombinedExample" />

    <p class="mt-4">
      This approach is perfect for scenarios like username availability checks, email validation, or
      any form with search-like fields that trigger API calls.
    </p>

    <article class="my-8! border-l-4 border-blue-500 bg-blue-50/10 p-4">
      <h4 class="flex items-center gap-2">
        <Icon icon="lucide:info" class="h-5 w-5" /> Performance Tip:
      </h4>
      <p>
        For forms with heavy validation logic or API calls, always use debouncing with
        <code>validateOnChange</code>. The recommended debounce time is between 200-500ms depending
        on your validation complexity.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import {
  AsyncValidationExample,
  DebounceValidationExample,
  CombinedExample,
} from "@/constants/examples/validationExamples.ts";
import CodeBlock from "@/components/core/CodeBlock.vue";
</script>
