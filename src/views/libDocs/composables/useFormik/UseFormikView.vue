<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import {
  UseFormikParameters,
  UseFormikParameterColumns,
  UseFormikReturnedPropertiesColumns,
  UseFormikReturnedProperties,
  UseFormikReturnedMethodsColumns,
  UseFormikReturnedMethods,
} from "@/views/libDocs/composables/useFormik/constants.ts";
import InfoIcon from "@/components/svgIcons/InfoIcon.vue";
import CodeBlock from "@/components/core/CodeBlock.vue";
import {
  CustomValidationObjectExample,
  CustomValidationWithEmailArrayExample,
} from "@/constants/examples/validationExamples.ts";
</script>

<template>
  <section class="info_page">
    <section>
      <h1 class="!mb-8">✨ <code>useFormik</code> Composable</h1>

      <p class="mb-2">
        The <code>useFormik</code> composable is your ultimate ally for managing complex forms in
        Vue 3 applications. With its simplicity and efficiency, it provides:
      </p>

      <ul class="list-disc ml-6 mb-4">
        <li class="mb-1">⚡ <strong>Reactive state management</strong></li>
        <li class="mb-1">
          ✅ <strong>Schema-based validation (supporting libraries like Yup)</strong>
        </li>
        <li>🚀 <strong>Streamlined form submission handling</strong></li>
      </ul>
      <p class="mb-1">
        With <code>useFormik</code>, you can effortlessly create dynamic, user-friendly forms that
        deliver a robust and consistent user experience.
      </p>

      <article class="!my-10">
        <h4 title="performance" class="flex items-center gap-2"><InfoIcon /> Performance:</h4>
        <p>
          Form validation runs deeply on every value change. To keep things snappy, optimize your
          validation schema and rules.
        </p>
      </article>
    </section>

    <section>
      <h2 title="parameters">🛠️ Parameters</h2>
      <SimpleTable :columns="UseFormikParameterColumns" :rows="UseFormikParameters" />

      <blockquote>
        <p class="!text-md"><strong>🧪 Validation Schema:</strong></p>
        <p>
          The <code>validationSchema</code> parameter supports both
          <a href="https://yup-docs.vercel.app/">Yup</a> schemas and custom validation rules.
        </p>
        <p>
          Coming soon: Support for more validation libraries like
          <a href="https://zod.dev/">Zod</a> and <a href="https://joi.dev/">Joi</a>. Stay tuned! 🎉
        </p>
      </blockquote>
    </section>

    <section>
      <h2 id="properties">🏗️ Properties</h2>
      <SimpleTable
        :columns="UseFormikReturnedPropertiesColumns"
        :rows="UseFormikReturnedProperties"
      />

      <blockquote>
        <p class="!text-md"><strong>🔗 Notes:</strong></p>
        <ol class="list-decimal list-inside">
          <li>
            <strong>Reactivity:</strong> Values, errors, and touched objects are fully reactive,
            enabling two-way data binding with form fields.
          </li>
        </ol>
      </blockquote>
    </section>

    <section>
      <h2 id="methods">⚙️ Methods</h2>
      <SimpleTable :columns="UseFormikReturnedMethodsColumns" :rows="UseFormikReturnedMethods" />

      <blockquote>
        <p class="!text-md"><strong>🌟 Dynamic Fields:</strong></p>
        <ol class="list-decimal list-inside">
          <li><strong>setFieldValue:</strong> Dynamically update specific field values.</li>
          <li>
            <strong>setFieldTouched:</strong> Dynamically update the touched state of specific
            fields.
          </li>
          <li>
            <strong>⚠️ setFieldError:</strong> This method is <strong>NOT</strong> available. Errors
            are handled internally through validation rules in the schema.
          </li>
        </ol>
      </blockquote>
    </section>

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
        Validation schemas can be customized to handle simple fields or more complex structures,
        such as arrays or nested objects.
      </p>

      <h3 id="my-form-values-arent-always-strings" class="mt-8">
        💡 My form values aren’t always strings
      </h3>
      <p>
        No worries! Validation rules can be written for arrays, objects, or even arrays of objects.
      </p>

      <CodeBlock :content="CustomValidationWithEmailArrayExample" />

      <p>
        In the example above, the <code>emails</code> field is an array of email addresses. Each
        email is validated, and errors are displayed if any email is invalid.
      </p>

      <p>
        For more complex validation rules, check out the
        <router-link to="/playground">Playground</router-link> section. 🔗
      </p>
    </section>
  </section>
</template>

<style scoped lang="sass">
code
  @apply text-red-100 border rounded px-2 py-0.5 border-red-50
</style>
