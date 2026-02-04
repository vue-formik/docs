<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import {
  FormInputProps,
  FormInputPropsCols,
  FormInputSlotCols,
  FormInputSlots,
} from "@/constants/propsVFormik/formInput";
import CodeBlock from "@/components/core/CodeBlock.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";

const usage = `
<FormInput
  :formik="formik"
  name="name"
  label="Name:"
  type="text"
  placeholder="Enter your name"
/>
`;
const usage2 = `
<FormInput
  :formik="formik"
  :name="\`contacts[\${index}].code\`"
  type="tel"
  :placeholder="\`Enter contact number \${index + 1}\`"
/>
`;

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "FormInput - Vue Formik",
  description:
    "Learn how to use the FormInput component in Vue Formik to create reusable input fields with automatic validation and error handling.",
  keywords: ["vue-formik", "FormInput", "input component", "forms", "validation"],
});
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormInput component</h1>
      <p>
        The <code>FormInput</code> component is a reusable input field designed for integration with
        <code>useFormik</code> composable. It handles field value updates, validation errors, and
        accessibility attributes automatically. With support for customization through props, it
        ensures consistent styling and behavior across forms while simplifying form logic.
      </p>
    </section>

    <section>
      <h2>Props:</h2>
      <SimpleTable :columns="FormInputPropsCols" :rows="FormInputProps" />
    </section>

    <section class="grid grid-cols-3 gap-6">
      <div class="col-span-3 md:col-span-2">
        <h2>Slots</h2>
        <SimpleTable :columns="FormInputSlotCols" :rows="FormInputSlots" />
      </div>
      <div class="col-span-3 md:col-span-1">
        <img
          src="@/assets/pngs/form_input_schema.png"
          alt="FormInput Sketch"
          class="h-[400px] w-auto"
        />
      </div>
    </section>

    <section>
      <h2>Usage:</h2>

      <CodeBlock :content="usage" />

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
          It serves as the primary identifier for the component and provides the foundational
          styles.
        </li>
        <li>
          <strong>Dynamic Type-Specific Classes:</strong>
          The component applies a type-specific class dynamically using the
          <code>type</code> prop.
          <br />
          For specific types (e.g., <code>password</code>, <code>email</code>), the classes will be
          <code>vf-password-field</code> or <code>vf-email-field</code>, respectively.
        </li>
        <li>
          <strong>Modifier Classes:</strong> These classes modify the appearance or behavior of the
          base component:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-field--error</code>: Applied when the field has a validation error,
              determined by <code>formik.hasFieldError(name)</code>.
            </li>
            <li>
              <code>vf-field--disabled</code>: Applied when the field is in a disabled state,
              determined by the <code>disabled</code> prop.
            </li>
            <li>
              <code>vf-field--readonly</code>: Applied when the field is set to read-only,
              determined by the <code>readonly</code> prop.
            </li>
          </ul>
        </li>
        <li>
          <strong>Input Element Classes:</strong> Classes applied specifically to the
          <code>input</code> element within the component:
          <ul class="my-4 list-disc">
            <li>
              <code>vf-input--error</code>: Indicates an error in the input field, applied when
              <code>formik.hasFieldError(name)</code> is true.
            </li>
            <li>
              <code>vf-input--disabled</code>: Marks the input as disabled, determined by the
              <code>disabled</code> prop.
            </li>
            <li>
              <code>vf-input--readonly</code>: Marks the input as read-only, determined by the
              <code>readonly</code> prop.
            </li>
          </ul>
        </li>
        <li>
          <strong>Error Message Class:</strong>
          <ul class="my-4 list-disc">
            <li>
              <code>vf-error</code>: Used for displaying error messages below the input field. The
              error message is rendered when <code>formik.hasFieldError(name)</code> is true.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Behavior:</strong> Classes and attributes are applied conditionally based
          on the component's props and state:
          <ul class="my-4 list-disc">
            <li>
              The <code>vf-field--error</code> and <code>vf-input--error</code> classes are applied
              when <code>formik.hasFieldError(name)</code> is true.
            </li>
            <li>
              The <code>vf-field--disabled</code> and <code>vf-input--disabled</code> classes are
              applied when the <code>disabled</code> prop is true.
            </li>
            <li>
              The <code>vf-field--readonly</code> and <code>vf-input--readonly</code> classes are
              applied when the <code>readonly</code> prop is true.
            </li>
            <li>
              ARIA attributes like <code>aria-labelledby</code>, <code>aria-describedby</code>,
              <code>aria-invalid</code>, <code>aria-required</code>, <code>aria-readonly</code>, and
              <code>aria-disabled</code> are applied dynamically to enhance accessibility.
            </li>
          </ul>
        </li>
      </ol>
    </section>

    <InfoPageFooter />
  </div>
</template>

<style scoped lang="sass"></style>
