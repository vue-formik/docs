<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import { FormInputSlotCols, FormInputSlots } from "@/constants/propsVFormik/formInput.ts";
import CodeBlock from "@/components/core/CodeBlock.vue";
import { FormTextareaProps, FormTextareaPropsCols } from "@/constants/propsVFormik/formTextarea.ts";

const usage1 = `
<FormTextareaField
  :formik="formik"
  name="bio"
  label="Bio:"
  placeholder="Enter your bio"
/>
`;

const usage2 = `
<FormTextareaField
  :formik="formik"
  :name="\`contacts[\${index}].notes\`"
  placeholder="Enter notes"
/>
`;
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormTextarea component</h1>
      <p>
        The <code>FormTextarea</code> component is a reusable textarea field designed for
        integration with <code>useFormik</code> composable. It handles field value updates,
        validation errors, and accessibility attributes automatically. With support for
        customization through props, it ensures consistent styling and behavior across forms while
        simplifying form logic.
      </p>
    </section>

    <section>
      <h2>Props:</h2>
      <SimpleTable :columns="FormTextareaPropsCols" :rows="FormTextareaProps" />
    </section>

    <section class="grid grid-cols-3 gap-6">
      <div class="col-span-3 md:col-span-2">
        <h2>Slots</h2>
        <SimpleTable :columns="FormInputSlotCols" :rows="FormInputSlots" />
      </div>
      <div class="col-span-3 md:col-span-1">
        <img
          src="@/assets/pngs/form_textarea_schema.png"
          alt="FormTextarea Sketch"
          class="h-[400px] w-auto"
        />
      </div>
    </section>

    <section>
      <h2>Usage:</h2>

      <CodeBlock :content="usage1" />

      <p>If your field has array of values then you can use the <code>name</code> like:</p>
      <CodeBlock :content="usage2" />
    </section>
  </div>
</template>

<style scoped lang="sass"></style>
