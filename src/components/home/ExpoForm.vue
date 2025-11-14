<template>
  <FormikForm class="border border-gray-500 rounded-md p-4">
    <FormInput name="name" label="Name:" type="text" placeholder="Enter your name" />

    <FormInput
      name="email"
      label="Email Address:"
      type="email"
      placeholder="Enter your email address"
    />

    <div class="flex flex-col w-full gap-2">
      <div>Contacts</div>
      <ol class="flex flex-col gap-2 list-decimal list-inside">
        <li v-for="(_, index) in formik.values.contacts" :key="index" class="flex gap-4">
          <span> {{ index + 1 }}.</span>
          <FormInput
            :name="`contacts[${index}].code`"
            type="tel"
            placeholder="Enter contact code"
          />
          <FormInput
            :name="`contacts[${index}].number`"
            type="tel"
            placeholder="Enter contact number"
          />

          <button
            type="button"
            class="secondary-outlined-btn size-11"
            title="Remove contact"
            :disabled="formik.values.contacts.length <= 1"
            @click="() => fieldArray.pop('contacts', index)"
          >
            x
          </button>
        </li>
      </ol>
      <button
        type="button"
        class="secondary-outlined-btn mt-8 w-fit"
        @click="() => fieldArray.push('contacts', { code: '', number: '' })"
      >
        Add contact
      </button>
    </div>

    <FormSelectField
      name="sex"
      label="Sex:"
      :options="sexOptions"
      placeholder="Select your gender"
    />

    <FormTextArea name="message" label="Message:" placeholder="Enter your message" rows="4" />

    <!-- addresses -->
    <div class="addresses flex flex-col gap-2">
      <div>Addresses:</div>
      <div
        v-for="(_, index) in formik.values.addresses"
        :key="index"
        class="flex items-start gap-4"
      >
        <span> {{ index + 1 }}. </span>
        <FormInput :name="`addresses[${index}]`" type="text" placeholder="Enter address line" />

        <button
          type="button"
          class="secondary-outlined-btn size-11"
          title="Remove address"
          :disabled="formik.values.addresses?.length <= 1"
          @click="() => fieldArray.pop('addresses', index)"
        >
          x
        </button>
      </div>
      <br />

      <button
        type="button"
        class="secondary-outlined-btn"
        @click="() => fieldArray.push('addresses', '')"
      >
        Add address
      </button>
    </div>

    <br />

    <div class="flex items-center gap-2">
      <button type="submit" class="primary-btn w-fit">Submit</button>
      <button
        type="reset"
        class="secondary-btn ml-4 w-fit"
        :disabled="!formik.isDirty.value"
        @click="() => formik.reset({ keepTouched: false })"
      >
        Reset
      </button>
    </div>
  </FormikForm>
  <div class="overflow-auto border border-gray-500 p-4 rounded-md h-full text-sm">
    <pre><code>{{JSON.stringify({
          values: formik.values,
          errors: formik.errors,
          touched: formik.touched,
          isValid: formik.isValid.value,
          isDirty: formik.isDirty.value,
        }, null, 2) }}</code></pre>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormInput,
  FormSelectField,
  FormTextArea,
  useFormik,
  FormikForm,
  useFieldArray,
} from "vue-formik";
import { computed, provide } from "vue";
import { DemoTabValues, InitialValues } from "@/constants/demo.ts";

const props = defineProps<{
  validationSchema: any;
  value: number;
  validateOnMount: boolean;
  validateOnChange: boolean;
  validateOnBlur: boolean;
  validationDebounce: number;
  preventDefault: boolean;
}>();

const sexOptions = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Other", value: "O" },
  { label: "Prefer not to say", value: "N/A" },
];

const opts = computed(() => ({
  initialValues: InitialValues,
  validationSchema: props.value === DemoTabValues.CUSTOM ? props.validationSchema : undefined,
  yupSchema: props.value === DemoTabValues.YUP ? props.validationSchema : undefined,
  joiSchema: props.value === DemoTabValues.JOI ? props.validationSchema : undefined,
  zodSchema: props.value === DemoTabValues.ZOD ? props.validationSchema : undefined,
  structSchema: props.value === DemoTabValues.SUPERSTRUCT ? props.validationSchema : undefined,
  validateOnMount: props.validateOnMount,
  validateOnChange: props.validateOnChange,
  validateOnBlur: props.validateOnBlur,
  validationDebounce: props.validationDebounce,
  preventDefault: props.preventDefault,
  onSubmit: (values: any, helpers: any) => {
    if (confirm(JSON.stringify(values, null, 2))) {
      helpers.reset();
    }
  },
}));

const formik = useFormik<typeof InitialValues>(opts.value);
const fieldArray = useFieldArray(formik);

provide("formik", formik);
</script>
