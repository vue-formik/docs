<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import { FormInputSlotCols, FormInputSlots } from "@/constants/propsVFormik/formInput";
import CodeBlock from "@/components/core/CodeBlock.vue";
import { FormTextareaProps, FormTextareaPropsCols } from "@/constants/propsVFormik/formTextarea";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";

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

    <section>
      <h2>Class Naming Style</h2>
    </section>
    <section>
      <ol class="list-decimal">
        <li>
          <strong>Base Classes:</strong>
          The foundational classes for this component are:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-field</code>: The primary class applied to the container, used for general
              field styling.
            </li>
            <li>
              <code>vf-textarea-field</code>: An additional base-specific class indicating the field
              is a textarea input.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Classes:</strong>
          Classes applied conditionally based on the component's state and props:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-field--error</code>: Applied to the container when the field has a validation
              error, determined by <code>formik.hasFieldError(name)</code>.
            </li>
            <li>
              <code>vf-input--disabled</code>: Applied to the <code>textarea</code> element when the
              <code>disabled</code> prop is true, indicating that the field is not editable.
            </li>
            <li>
              <code>vf-input--readonly</code>: Applied to the <code>textarea</code> element when the
              <code>readonly</code> prop is true, marking the field as read-only.
            </li>
            <li>
              <code>vf-input--error</code>: Applied to the <code>textarea</code> element when the
              field has a validation error, determined by <code>formik.hasFieldError(name)</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Input Wrapper Class:</strong>
          The <code>vf-input</code> class is applied to the wrapper around the
          <code>textarea</code> element. It serves as the container for the input and optional
          prepend/append slots.
        </li>
        <li>
          <strong>Error Message Class:</strong>
          <ul class="my-4 list-disc">
            <li>
              <code>vf-error</code>: Applied to the paragraph element displaying error messages.
              This class is rendered when <code>formik.hasFieldError(name)</code> is true.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <InfoPageFooter />
  </div>
</template>

<style scoped lang="sass"></style>
