<template>
  <section>
    <h2 title="parameters">🛠️ Parameters</h2>
    <SimpleTable :columns="UseFormikParameterColumns" :rows="UseFormikParameters" />

    <article>
      <h4>Parameters for <code>onSubmit</code> handler</h4>

      <p>TYPE: <code>(FormikOnSubmit&lt;T> = values: T, helpers: FormikHelpers&lt;T>)</code></p>

      <p>
        When the <code>onSubmit</code> function is invoked by the submit handler, it receives two
        arguments: <code>values</code> and <code>helpers</code>.
      </p>

      <p>
        The <strong>values</strong> argument is an object that contains the current values of the
        form fields.
      </p>

      <p>
        The <strong>helpers</strong> argument is an object that contains a set of utility functions
        that can be used to interact with the form state.
      </p>

      <ol class="list-decimal ml-6">
        <li><code>reset</code> - Resets the form to its initial state.</li>
        <li><code>setErrors</code> - Sets the errors for the form fields.</li>
        <li><code>setValues</code> - Sets the values for the form fields.</li>
        <li><code>setSubmitting</code> - Sets the submitting state of the form.</li>
      </ol>
    </article>
  </section>
</template>

<script setup lang="ts">
import {
  UseFormikParameterColumns,
  UseFormikParameters,
} from "@/views/libDocs/composables/useFormik/constants.ts";
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
</script>
