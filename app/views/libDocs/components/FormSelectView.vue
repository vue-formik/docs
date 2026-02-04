<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import { FormSelectProps, FormSelectPropsCols } from "@/constants/propsVFormik/formSelect";
import { FormInputSlotCols, FormInputSlots } from "@/constants/propsVFormik/formInput";
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";

const usage1 = `
<FormSelectField
  :formik="formik"
  name="name"
  label="Name:"
  :options="[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]"
  placeholder="Select an option"
/>
`;

const usage2 = `
<FormSelectField
  :formik="formik"
  :name="\`contacts[\${index}].code\`"
  :options="[
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]"
  placeholder="Select an option"
/>
`;
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormSelectField component</h1>
      <p>
        The <code>FormSelectField</code> component is a reusable select field designed for
        integration with <code>useFormik</code> composable. It handles field value updates,
        validation errors, and accessibility attributes automatically. With support for
        customization through props, it ensures consistent styling and behavior across forms while
        simplifying form logic.
      </p>
    </section>

    <section>
      <h2>Props:</h2>
      <SimpleTable :columns="FormSelectPropsCols" :rows="FormSelectProps" />
    </section>

    <section class="grid grid-cols-3 gap-6">
      <div class="col-span-3 md:col-span-2">
        <h2>Slots</h2>
        <SimpleTable :columns="FormInputSlotCols" :rows="FormInputSlots" />
      </div>
      <div class="col-span-3 md:col-span-1">
        <img
          src="@/assets/pngs/form_select_schema.png"
          alt="FormSelect Sketch"
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
            <li><code>vf-field</code>: The primary class for styling the field container.</li>
            <li>
              <code>vf-select-field</code>: A base-specific class indicating the field is a select
              input.
            </li>
          </ul>
        </li>
        <li>
          <strong>Input Wrapper Class:</strong>
          The <code>vf-input</code> class is applied to the wrapper element surrounding the
          <code>select</code> input. It serves as the container for the select element and optional
          prepend/append slots.
        </li>
        <li>
          <strong>Dynamic Classes:</strong> Classes applied conditionally based on the component's
          state and props:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-field--error</code>: Applied when the field has a validation error,
              determined by <code>formik.hasFieldError(name)</code>.
            </li>
            <li>
              <code>vf-input--error</code>: Applied to the <code>select</code> element when
              <code>formik.hasFieldError(name)</code> is true, indicating an error in the field.
            </li>
            <li>
              <code>vf-input--disabled</code>: Applied to the <code>select</code> element when the
              <code>disabled</code> prop is true, marking the field as disabled.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <InfoPageFooter />
  </div>
</template>

<style scoped lang="sass"></style>
