<template>
  <section>
    <h2 id="methods">⚙️ Methods</h2>
    <SimpleTable :columns="UseFormikReturnedMethodsColumns" :rows="UseFormikReturnedMethods" />

    <blockquote>
      <p class="text-md!"><strong>🌟 Dynamic Fields:</strong></p>
      <ol class="list-decimal list-inside">
        <li><strong>setFieldValue:</strong> Dynamically update specific field values.</li>
        <li>
          <strong>setFieldTouched:</strong> Dynamically update the touched state of specific fields.
        </li>
        <li>
          <strong>⚠️ setFieldError:</strong> This method is <strong>NOT</strong> available. Errors
          are handled internally through validation rules in the schema.
        </li>
      </ol>
    </blockquote>
  </section>
</template>

<script setup lang="ts">
import {
  UseFormikReturnedMethods,
  UseFormikReturnedMethodsColumns,
} from "@/views/libDocs/composables/useFormik/constants";
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
</script>
