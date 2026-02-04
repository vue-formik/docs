<script setup lang="ts">
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import { FormTextareaPropsCols } from "@/constants/propsVFormik/formTextarea";
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormikForm component</h1>
      <p>This component is a wrapper around HTML form tag.</p>

      <p>
        It assigns the formik submit handler to the form tag and provides a slot for form fields.
      </p>
    </section>
    <section>
      <h2>Props</h2>
      <SimpleTable
        :columns="FormTextareaPropsCols"
        :rows="[
          {
            name: 'formik',
            type: 'ReturnType<typeof useFormik<any>>',
            required: true,
            default: 'null',
            description: 'Formik instance',
          },
        ]"
      />
    </section>
    <section>
      <h2>Slots</h2>

      <p><strong>default</strong> - Slot for form fields.</p>
    </section>

    <InfoPageFooter />
  </div>
</template>
