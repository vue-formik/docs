<template>
  <section class="info_page">
    <section>
      <h1>Why Vue Formik?</h1>
      <p class="mb-4">
        When choosing a form validation library for Vue.js, you have several options. Vue Formik is
        designed to be the most intuitive, flexible, and performant solution for modern Vue 3
        applications. Here's why:
      </p>
    </section>

    <section class="my-10!">
      <h2>🎯 Comparison with Other Libraries</h2>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-600">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-600 px-4 py-3 text-left">Feature</th>
              <th class="border border-gray-600 px-4 py-3 text-left text-primary">Vue Formik</th>
              <th class="border border-gray-600 px-4 py-3 text-left">VeeValidate</th>
              <th class="border border-gray-600 px-4 py-3 text-left">Vuelidate</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Vue 3 Ready</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Built from ground up</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">✓ Migrated later</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-red-500">✗ Vue 2 focused</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Composition API</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ First-class support</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Supported</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Requires adaptation</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">TypeScript</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Type-safe by default</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Good support</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Requires setup</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Validation Schemas</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Yup, Zod, Joi, Superstruct</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Yup, Zod (separate plugins)</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-red-500">✗ Custom rules only</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Async Validation</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Built-in with Promise support</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Supported</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Supported</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Debouncing</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Built-in (configurable)</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Manual implementation</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-red-500">✗ Not available</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Validation Control</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ OnChange, OnBlur, OnMount</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Configurable timing</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Limited options</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Bundle Size</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Small (~8kb gzipped)</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Moderate (~45kb)</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Small (~5kb)</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Learning Curve</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Gentle, Formik-inspired</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Steeper, feature-rich</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Requires Vue 2 patterns</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="my-10!">
      <h2>🌟 Key Advantages</h2>

      <article class="my-6!">
        <h3>1. 🎨 Schema-Based Validation</h3>
        <p>
          Unlike libraries that require you to define validation rules inline, Vue Formik supports
          multiple popular schema validators. Write once, reuse anywhere:
        </p>
        <CodeBlock :content="SchemaExample" />
        <p class="mt-4">
          This approach makes validation logic testable, reusable, and maintainable. Your schemas
          can be shared between frontend and backend validation.
        </p>
      </article>

      <article class="my-6!">
        <h3>2. ⚡ Built-in Performance Optimization</h3>
        <p>
          Vue Formik includes debouncing out of the box. No need to wrap your validation functions:
        </p>
        <CodeBlock :content="DebounceExample" />
        <p class="mt-4">
          This reduces unnecessary validation calls during rapid typing, improving both performance
          and user experience.
        </p>
      </article>

      <article class="my-6!">
        <h3>3. 🎯 Modern API Design</h3>
        <p>
          Vue Formik embraces Vue 3's Composition API with reactive refs and computed properties:
        </p>
        <CodeBlock :content="ModernAPIExample" />
        <p class="mt-4">
          The API feels natural to Vue 3 developers and leverages Vue's reactivity system
          efficiently.
        </p>
      </article>

      <article class="my-6!">
        <h3>4. 🔄 Flexible Validation Timing</h3>
        <p>Control exactly when validation occurs with granular options:</p>
        <CodeBlock :content="ValidationTimingExample" />
        <p class="mt-4">
          This gives you full control over user experience - validate as they type, on blur, or only
          on submit.
        </p>
      </article>

      <article class="my-6!">
        <h3>5. 📦 Component Library Included</h3>
        <p>Vue Formik comes with pre-built, accessibility-friendly components:</p>
        <CodeBlock :content="ComponentsExample" />
        <p class="mt-4">
          These components automatically integrate with form state, reducing boilerplate and
          ensuring consistency.
        </p>
      </article>
    </section>

    <section class="my-10!">
      <h2>🎬 Real-World Benefits</h2>

      <article class="my-6!">
        <h3>Reduced Boilerplate</h3>
        <p>Vue Formik reduces the amount of code you need to write. Compare this:</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div>
            <h4 class="text-red-400 mb-2">Without Vue Formik</h4>
            <CodeBlock :content="WithoutFormikExample" />
          </div>
          <div>
            <h4 class="text-green-400 mb-2">With Vue Formik</h4>
            <CodeBlock :content="WithFormikExample" />
          </div>
        </div>

        <p class="mt-4">
          The code is cleaner, more maintainable, and easier to understand at a glance.
        </p>
      </article>

      <article class="my-6!">
        <h3>Better Developer Experience</h3>
        <ul class="list-disc ml-6">
          <li>TypeScript intellisense for all form state</li>
          <li>Clear error messages and debugging</li>
          <li>Consistent API patterns across all schemas</li>
          <li>Excellent documentation with live examples</li>
        </ul>
      </article>

      <article class="my-6!">
        <h3>Battle-Tested Approach</h3>
        <p>
          Inspired by React's Formik (16M+ downloads), Vue Formik brings proven patterns to Vue. The
          Formik approach has been validated in thousands of production applications.
        </p>
      </article>
    </section>

    <article class="my-10! border-l-4 border-blue-500 bg-blue-50/10 p-6">
      <h3 class="flex items-center gap-2 mb-3">
        <Icon icon="lucide:info" class="h-5 w-5" /> When to Use Vue Formik
      </h3>
      <p class="mb-3">Vue Formik is perfect when you need:</p>
      <ul class="list-disc ml-6 space-y-2">
        <li>Modern Vue 3 + Composition API applications</li>
        <li>Type-safe form handling with TypeScript</li>
        <li>Flexible validation with multiple schema options</li>
        <li>Performance-critical forms with debouncing</li>
        <li>Complex forms with nested objects and arrays</li>
        <li>Async validation for API calls</li>
        <li>A gentle learning curve with great DX</li>
      </ul>
    </article>

    <InfoPageFooter />
  </section>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";
import {
  SchemaExample,
  DebounceExample,
  ModernAPIExample,
  ValidationTimingExample,
  ComponentsExample,
  WithoutFormikExample,
  WithFormikExample,
} from "@/constants/examples/whyVueFormik.ts";
</script>

<style scoped lang="sass">
table
  th, td
    font-size: 0.9rem
</style>
