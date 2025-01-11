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
</script>

<template>
  <section class="info_page">
    <h1><code>useFormik</code> composable</h1>

    <p>
      The useFormik composable is your go-to solution for managing complex forms in Vue 3
      applications. With a focus on simplicity and efficiency, this composable provides reactive
      state management, schema-based validation with support for libraries like yup, and streamlined
      form submission handling. It enables developers to build dynamic, user-friendly forms with
      ease, ensuring a robust and consistent user experience.
    </p>

    <h2>Parameters</h2>
    <SimpleTable :columns="UseFormikParameterColumns" :rows="UseFormikParameters" />
    <!--    Notes
1.	Validation Schema: The validationSchema parameter supports both yup schemas and custom validation rules.
2.	Dynamic Fields: The setFieldValue and setFieldTouched methods allow dynamic updates to specific fields.
3.	Reactivity: The values, errors, and touched objects are fully reactive and can be used for two-way data binding with form fields.
4.	Performance: Validation runs deeply on every change to values. Optimize schema and rules to avoid unnecessary overhead.
-->

    <h2>Properties</h2>
    <SimpleTable
      :columns="UseFormikReturnedPropertiesColumns"
      :rows="UseFormikReturnedProperties"
    />

    <h2>Methods</h2>
    <SimpleTable :columns="UseFormikReturnedMethodsColumns" :rows="UseFormikReturnedMethods" />

    <div>
      <h3>Notes:</h3>
      <ul>
        <li>
          <strong>Validation Schema:</strong>
          <span>
            The validationSchema parameter supports both yup schemas and custom validation rules.
          </span>
        </li>
        <li>
          <strong>Dynamic Fields:</strong>
          <span>
            The setFieldValue and setFieldTouched methods allow dynamic updates to specific fields.
          </span>
        </li>
        <li>
          <strong>Reactivity:</strong>
          <span>
            The values, errors, and touched objects are fully reactive and can be used for two-way
            data binding with form fields.
          </span>
        </li>
        <li>
          <strong>Performance:</strong>
          <span>
            Validation runs deeply on every change to values. Optimize schema and rules to avoid
            unnecessary overhead.
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="sass">
code
  @apply text-red-100 border rounded px-2 py-0.5 border-red-50
</style>
