<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import { FormInputSlotCols, FormInputSlots } from "@/constants/propsVFormik/formInput";
import CodeBlock from "@/components/core/CodeBlock.vue";
import {
  FormContentEditableProps,
  FormContentEditablePropsCols,
} from "@/constants/propsVFormik/formContentEditable";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";

const usage1 = `
<FormContentEditableField
  :formik="formik"
  name="bio"
  label="Bio:"
  placeholder="Enter your bio"
/>
`;

const usage2 = `
<FormContentEditableField
  :formik="formik"
  :name="\`contacts[\${index}].notes\`"
  placeholder="Enter notes"
/>
`;

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "FormContentEditable - Vue Formik",
  description:
    "Learn how to use the FormContentEditableField component in Vue Formik to create rich text editable fields with validation.",
  keywords: ["vue-formik", "FormContentEditable", "contenteditable", "rich text", "forms"],
});
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormContentEditable component</h1>
      <p>
        The <code>FormContentEditable</code> component is a reusable content editable field designed
        for integration with <code>useFormik</code> composable. It handles field value updates,
        validation errors, and accessibility attributes automatically. With support for
        customization through props, it ensures consistent styling and behavior across forms while
        simplifying form logic.
      </p>
    </section>

    <section>
      <h2>Props:</h2>
      <SimpleTable :columns="FormContentEditablePropsCols" :rows="FormContentEditableProps" />
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
          <strong>Base Class:</strong> The base class for this component is <code>vf-field</code>.
          It acts as the primary identifier for the component and provides a foundation for
          additional styles.
        </li>
        <li>
          <strong>Modifier Classes:</strong> These classes modify the appearance or behavior of the
          base component:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-content-editable-field</code>: Applied to indicate the component is a
              content-editable field.
            </li>
            <li>
              <code>vf-field--error</code>: Added when the formik validation detects a field error.
            </li>
            <li><code>vf-field--disabled</code>: Added when the field is in a disabled state.</li>
            <li><code>vf-field--readonly</code>: Applied when the field is set to read-only.</li>
          </ul>
        </li>
        <li>
          <strong>Input Element Classes:</strong> Classes specific to the <code>div</code> acting as
          the content-editable input:
          <ul class="my-4 list-disc">
            <li><code>vf-input--error</code>: Indicates an error in the input field.</li>
            <li>
              <code>vf-input--placeholder</code>: Used when the input is empty and the placeholder
              is visible.
            </li>
            <li><code>vf-input--disabled</code>: Marks the input as disabled.</li>
            <li><code>vf-input--readonly</code>: Marks the input as read-only.</li>
          </ul>
        </li>
        <li>
          <strong>Error Message Class:</strong>
          <ul class="my-4 list-disc">
            <li>
              <code>vf--error</code>: Used for displaying error messages below the input field.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Behavior:</strong> Classes are applied conditionally based on the
          component's props and state:
          <ul class="my-4 list-disc">
            <li>Error-related classes depend on <code>formik.hasFieldError(name)</code>.</li>
            <li>Placeholder-related classes depend on <code>!hasValue</code>.</li>
            <li>
              Disabled and read-only classes depend on the <code>disabled</code> and
              <code>readonly</code> props.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <InfoPageFooter />
  </div>
</template>

<style scoped lang="sass"></style>
