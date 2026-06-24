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
      <p class="mb-4 text-sm opacity-80">
        A high-level positioning guide. Every library here is excellent — the right choice depends
        on whether you want batteries-included components (FormKit), a pure headless validation core
        (Regle, Vuelidate), maximum flexibility (VeeValidate), or the familiar Formik model with
        strong typing and any-schema validation (Vue Formik). Symbols: ✓ first-class · ~ partial /
        manual · ✗ not provided.
      </p>

      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-600">
          <thead>
            <tr class="bg-gray-800">
              <th class="border border-gray-600 px-4 py-3 text-left">Feature</th>
              <th class="border border-gray-600 px-4 py-3 text-left text-primary">Vue Formik</th>
              <th class="border border-gray-600 px-4 py-3 text-left">VeeValidate</th>
              <th class="border border-gray-600 px-4 py-3 text-left">FormKit</th>
              <th class="border border-gray-600 px-4 py-3 text-left">Vuelidate</th>
              <th class="border border-gray-600 px-4 py-3 text-left">Regle</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Vue 3 + Composition API</td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~ Vue 2-era</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Typed field paths + values
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ paths &amp; values</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Familiar Formik API</td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Schema libraries</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Yup, Zod, Joi, Superstruct</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Yup, Zod, Valibot…</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ built-in + Zod</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-red-500">✗ built-in validators</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ Zod, Valibot</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Standard Schema (one adapter)
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Headless field binding
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ useField</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ component-driven</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">Bundled UI components</td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ 5 inputs</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ Field/Form</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ 24+ inputs</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Accessibility helpers
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ ARIA + focus-to-error</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗ DIY</span></td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ extensive</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-red-500">✗</span></td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ headless</span>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Field arrays (push/insert/move/swap…)
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ full ops</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ repeater</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-yellow-500">~</span></td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
            <tr>
              <td class="border border-gray-600 px-4 py-3 font-semibold">
                Built-in async + debounce
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-green-500">✓ both</span>
              </td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ async ✓ / debounce manual</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
              <td class="border border-gray-600 px-4 py-3">
                <span class="text-yellow-500">~ async only</span>
              </td>
              <td class="border border-gray-600 px-4 py-3"><span class="text-green-500">✓</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote class="mt-6 border-l-4 border-primary pl-4 italic opacity-90">
        Vue Formik's niche: the Formik API you already know, with the strongest type inference in
        Vue and any-schema (Standard Schema) validation — plus optional accessible components when
        you want them.
      </blockquote>
    </section>

    <section class="my-10!">
      <h2>🌟 Key Advantages</h2>

      <article class="my-6!">
        <h3>1. 🎯 End-to-End Type Safety</h3>
        <p>
          When you type your form (or let it be inferred from <code>initialValues</code>), field
          paths <em>and</em> the value at each path are fully typed — including nested objects and
          array indices. You get autocomplete and compile-time errors instead of silent
          <code>any</code>:
        </p>
        <CodeBlock :content="TypeSafetyExample" />
        <p class="mt-4">
          This is the wedge that sets Vue Formik apart from most component-first libraries: a
          familiar API <em>and</em> rigorous types.
        </p>
      </article>

      <article class="my-6!">
        <h3>2. 🧩 Validate With Any Standard Schema</h3>
        <p>
          <a href="https://standardschema.dev" target="_blank">Standard Schema</a> is a shared
          interface implemented by Zod, Valibot, ArkType and more. One <code>standardSchema</code>
          option covers the whole modern ecosystem:
        </p>
        <CodeBlock :content="StandardSchemaExample" />
      </article>

      <article class="my-6!">
        <h3>3. 🪝 Headless <code>useField</code></h3>
        <p>
          Bind any input — your own or a third-party UI library's — to form state, no bundled
          component required:
        </p>
        <CodeBlock :content="UseFieldExample" />
      </article>

      <article class="my-6!">
        <h3>4. 🎨 Schema-Based Validation</h3>
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
        <h3>5. ⚡ Built-in Performance Optimization</h3>
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
        <h3>6. 🔧 Modern API Design</h3>
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
        <h3>7. 🔄 Flexible Validation Timing</h3>
        <p>Control exactly when validation occurs with granular options:</p>
        <CodeBlock :content="ValidationTimingExample" />
        <p class="mt-4">
          This gives you full control over user experience - validate as they type, on blur, or only
          on submit.
        </p>
      </article>

      <article class="my-6!">
        <h3>8. 📦 Component Library Included</h3>
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
  TypeSafetyExample,
  StandardSchemaExample,
  UseFieldExample,
  SchemaExample,
  DebounceExample,
  ModernAPIExample,
  ValidationTimingExample,
  ComponentsExample,
  WithoutFormikExample,
  WithFormikExample,
} from "@/constants/examples/whyVueFormik";
</script>

<style scoped lang="sass">
table
  th, td
    font-size: 0.9rem
</style>
