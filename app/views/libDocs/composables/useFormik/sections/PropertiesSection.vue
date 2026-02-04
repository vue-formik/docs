<template>
  <section>
    <h2 id="properties">🏗️ Properties</h2>
    <SimpleTable
      :columns="UseFormikReturnedPropertiesColumns"
      :rows="UseFormikReturnedProperties"
    />

    <blockquote>
      <p class="text-md!"><strong>🔗 Notes:</strong></p>
      <ol class="list-decimal list-inside">
        <li>
          <strong>Reactivity:</strong> Values, errors, and touched objects are fully reactive,
          enabling two-way data binding with form fields.
        </li>
        <li>
          <strong>Computed properties</strong>: <code>isValid</code> & <code>isDirty</code> are
          computed properties. Don't forget to use <code>.value</code> while accessing it inside the
          template.
        </li>
      </ol>
    </blockquote>
  </section>
</template>

<script setup lang="ts">
import {
  UseFormikReturnedProperties,
  UseFormikReturnedPropertiesColumns,
} from "@/views/libDocs/composables/useFormik/constants.ts";
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
</script>
