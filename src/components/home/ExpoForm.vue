<template>
  <form class="border border-gray-500 rounded-md p-4" @submit="(e) => {}">
    <FormInput
      :formik="formik"
      name="name"
      label="Name:"
      type="text"
      placeholder="Enter your name"
    />

    <FormInput
      :formik="formik"
      name="email"
      label="Email Address:"
      type="email"
      placeholder="Enter your email address"
    />

    <div class="flex flex-col w-full gap-2">
      <div>Contacts</div>
      <div class="flex flex-col gap-2">
        <div v-for="(_, index) in formik.values.contacts" :key="index" class="flex gap-4">
          <FormInput
            :formik="formik"
            :name="`contacts[${index}].code`"
            type="tel"
            :placeholder="`Enter contact number ${index + 1}`"
          />
          <FormInput
            :formik="formik"
            :name="`contacts[${index}].number`"
            type="tel"
            :placeholder="`Enter contact number ${index + 1}`"
          />

          <button
            type="button"
            class="secondary-outlined-btn size-11"
            title="Remove contact"
            :disabled="formik.values.contacts.length <= 1"
            @click="
              () => {
                formik.setValues({
                  ...formik.values,
                  contacts: formik.values.contacts.filter((_, i) => i !== index),
                });
              }
            "
          >
            x
          </button>
        </div>
      </div>
      <button
        type="button"
        class="secondary-outlined-btn mt-8 w-fit"
        @click="
          () => {
            formik.setValues({
              ...formik.values,
              contacts: [...formik.values.contacts, { code: '', number: '' }],
            });
          }
        "
      >
        Add contact
      </button>
    </div>

    <FormSelectField
      :formik="formik"
      name="sex"
      label="Sex:"
      :options="sexOptions"
      placeholder="Select your gender"
    />

    <FormTextArea
      :formik="formik"
      name="message"
      label="Message:"
      placeholder="Enter your message"
      rows="4"
    />

    <!-- addresses -->
    <div class="addresses flex flex-col gap-2">
      <div>Addresses:</div>
      <div
        v-for="(_, index) in formik.values.addresses"
        :key="index"
        class="flex items-start gap-4"
      >
        <FormInput
          :formik="formik"
          :name="`addresses[${index}]`"
          type="text"
          :placeholder="`Enter address line ${index + 1}`"
        />

        <button
          type="button"
          class="secondary-outlined-btn size-11"
          title="Remove address"
          :disabled="formik.values.addresses.length <= 1"
          @click="
            () => {
              formik.setValues({
                ...formik.values,
                addresses: formik.values.addresses.filter((_, i) => i !== index),
              });
            }
          "
        >
          x
        </button>
      </div>
      <br />

      <button
        type="button"
        class="secondary-outlined-btn"
        @click="
          () => {
            formik.setValues({
              ...formik.values,
              addresses: [...formik.values.addresses, ''],
            });
          }
        "
      >
        Add address
      </button>
    </div>

    <br />

    <button type="submit" class="primary-btn w-fit" :disabled="!formik.isValid.value">
      Submit
    </button>
  </form>
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
import { FormInput, FormSelectField, FormTextArea } from "vue-formik";
import useFormikForm from "@/composables/formik.ts";

const props = defineProps<{
  validationSchema: any;
}>();

const sexOptions = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Other", value: "O" },
  { label: "Prefer not to say", value: "N/A" },
];

const { formik } = useFormikForm(props.validationSchema);
</script>
