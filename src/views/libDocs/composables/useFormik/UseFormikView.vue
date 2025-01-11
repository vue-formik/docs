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
    <header>
      <h1><code>useFormik</code> composable</h1>

      <p>
        The useFormik composable is your go-to solution for managing complex forms in Vue 3
        applications. With a focus on simplicity and efficiency, this composable provides reactive
        state management, schema-based validation with support for libraries like yup, and
        streamlined form submission handling. It enables developers to build dynamic, user-friendly
        forms with ease, ensuring a robust and consistent user experience.
      </p>

      <article>
        <h4 class="flex items-center gap-2"><InfoIcon /> Performance:</h4>
        <p>
          Validation runs deeply on every change to values. Optimize schema and rules to avoid
          unnecessary overhead.
        </p>
      </article>
    </header>

    <section>
      <h2>Parameters</h2>
      <SimpleTable :columns="UseFormikParameterColumns" :rows="UseFormikParameters" />

      <blockquote>
        <p class="!text-md"><strong>Validation Schema:</strong></p>
        <p>
          The <code>validationSchema</code> parameter supports both
          <a href="https://yup-docs.vercel.app/">Yup</a>
          schemas and custom validation rules.
        </p>
        <p>
          In the upcoming releases, we will be adding support for more validation libraries like
          <a href="https://zod.dev/">Zod</a>, <a href="https://joi.dev/">Joi</a>, and more.
        </p>
      </blockquote>
    </section>

    <section>
      <h2>Properties</h2>
      <SimpleTable
        :columns="UseFormikReturnedPropertiesColumns"
        :rows="UseFormikReturnedProperties"
      />

      <blockquote>
        <p class="!text-md"><strong>Notes:</strong></p>
        <ol class="list-decimal list-inside">
          <li>
            <strong>Reactivity:</strong>
            <span>
              The values, errors, and touched objects are fully reactive and can be used for two-way
              data binding with form fields.
            </span>
          </li>
        </ol>
      </blockquote>
    </section>

    <section>
      <h2>Methods</h2>
      <SimpleTable :columns="UseFormikReturnedMethodsColumns" :rows="UseFormikReturnedMethods" />

      <blockquote>
        <p class="!text-md"><strong>Dynamic Fields:</strong></p>
        <ol class="list-decimal list-inside">
          <li>
            <strong>setFieldValue:</strong>
            <span> This method allows dynamic updates to specific fields. </span>
          </li>
          <li>
            <strong>setFieldTouched:</strong>
            <span>
              This method allows dynamic updates to the touched state of specific fields.
            </span>
          </li>
          <li>
            <strong class="text-red-100">setFieldError:</strong>
            <span>
              This method is <strong>NOT</strong> available. <strong>Why?</strong> Because it's
              calculated internally and manually set values will not be effectively applied. We need
              to write validation rules in the schema to handle errors.
            </span>
          </li>
        </ol>
      </blockquote>
    </section>

    <section>
      <h2>Custom Validation</h2>
      <p>
        The <code>useFormik</code> composable supports custom validation rules. You can define
        custom validation rules using the <code>validationSchema</code> parameter. The validation
        schema can be a function that returns an object with validation rules for each
        <strong>necessary</strong> field.
      </p>

      <h3>Example</h3>

      <CodeBlock :content="CustomValidationObjectExample" />

      <p>
        In the above example, we have defined a custom validation object that contains validation
        rules for the <code>email</code> and <code>password</code> fields. The <code>email</code>{'
        '} field is required and must be a valid email address. The <code>password</code> field is
        required and must be at least 8 characters long.
      </p>
      <p>
        The <code>validationSchema</code> parameter accepts this object and uses it to validate the
        form fields.
      </p>
      <p>
        You can define custom validation rules for any field in the form. The validation schema can
        contain rules for all the fields in the form or only for specific fields.
      </p>
      <p>
        The custom validation object can should contain error messages that are displayed when the
        validation fails.
      </p>

      <h4>My form values are not always strings</h4>
      <p>
        Don't worry! We got you covered. You can write validation rules to make complex schema like
        <code>array</code>, <code>object</code> and <code>array of objects</code>.
      </p>

      <CodeBlock :content="CustomValidationWithEmailArrayExample" />

      <p>
        In the above example, we have defined a custom validation object that contains validation
        rules for the <code>emails</code> field. The <code>emails</code> field is an array of email
        addresses. The validation schema validates each email in the array and displays an error
        message if any of the emails are invalid.
      </p>

      <p>
        Note that we returned two types of values. If the values array is empty, then string is
        returned right away. If the values array is not empty, then we return an array of strings.
        The library will understand the error message for each field by matching the index of the
        values array.
      </p>

      <p>
        This currently limits the error message to be a string only. We will be adding support for
        returning an array of errors for each field in the upcoming releases.
      </p>

      <p>
        More complex custom validation rules are documented in the
        <router-link to="/playground">Playground</router-link> section. Please check it out for more
        detailed overview.
      </p>
    </section>
  </section>
</template>

<style scoped lang="sass">
code
  @apply text-red-100 border rounded px-2 py-0.5 border-red-50
</style>
