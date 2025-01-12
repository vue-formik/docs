<script setup lang="ts">
import SimpleTable from "@/components/core/simpleTable/SimpleTable.vue";
import {
  FormInputProps,
  FormInputPropsCols,
  FormInputSketch,
  FormInputSlotCols,
  FormInputSlots,
} from "@/constants/propsVFormik/formInput.ts";
import CodeBlock from "@/components/core/CodeBlock.vue";

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
</script>

<template>
  <div class="info_page">
    <section>
      <h1>FormInput component</h1>
      <p>
        The <code>FormInput</code> component is a reusable input field designed for integration with
        Formik, a popular form management library. It handles field value updates, validation
        errors, and accessibility attributes automatically. With support for customization through
        props like type, label, placeholder, and additional inputProps, it ensures consistent
        styling and behavior across forms while simplifying form logic.
      </p>
    </section>

    <section>
      <h2>Props:</h2>
      <SimpleTable :columns="FormInputPropsCols" :rows="FormInputProps" />
    </section>

    <section>
      <h2>Slots</h2>
      <SimpleTable :columns="FormInputSlotCols" :rows="FormInputSlots" />

      <h4>Layout:</h4>
      <CodeBlock :content="FormInputSketch" />
    </section>

    <section>
      <h2>Usage:</h2>

      <CodeBlock :content="usage" />

      <h4>If your field has array of values then you can use the <code>name</code> like:</h4>
      <CodeBlock :content="usage2" />
    </section>
  </div>
</template>

<style scoped lang="sass"></style>
