<template>
  <section class="home-view">
    <h2>Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />
    <div class="home-view__content">
      <form class="border rounded-md p-4" @submit="formik.handleSubmit">
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

        <FormInput
          :formik="formik"
          name="phone"
          label="Phone:"
          type="tel"
          placeholder="Enter your phone number"
        />

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
            class="flex items-start gap-4"
            v-for="(_, index) in formik.values.addresses"
            :key="index"
          >
            <FormInput
              :formik="formik"
              :name="`addresses.${index}`"
              type="text"
              :placeholder="`Enter address line ${index + 1}`"
            />

            <button
              type="button"
              @click="
                () => {
                  formik.setValues({
                    ...formik.values,
                    addresses: formik.values.addresses.filter((_, i) => i !== index),
                  });
                }
              "
              class="!px-4 disabled:cursor-not-allowed disabled:opacity-50"
              title="Remove address"
              :disabled="formik.values.addresses.length <= 1"
            >
              x
            </button>
          </div>
          <br />

          <button
            type="button"
            @click="
              () => {
                formik.setValues({
                  ...formik.values,
                  addresses: [...formik.values.addresses, ''],
                });
              }
            "
            class="text-blue-500 underline"
          >
            Add address
          </button>
        </div>

        <br />

        <button type="submit" class="disabled:opacity-10 p-2" :disabled="!formik.isValid.value">
          Submit
        </button>
      </form>
      <div class="overflow-auto border p-4 rounded-md h-full">
        <pre><code>{{JSON.stringify({
            values: formik.values,
            errors: formik.errors,
            touched: formik.touched,
            isValid: formik.isValid.value,
            isDirty: formik.isDirty.value
          }, null, 2) }}</code></pre>
      </div>
    </div>

    <ValidationSchemaPreview />

    <p class="py-2 text-sm">
      <span> You can find the source code for this example on </span>
      <a
        href="https://github.com/vue-formik/docs/blob/main/src/views/HomeView.vue"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 underline"
      >
        GitHub
      </a>
      <span>.</span>
    </p>
  </section>
</template>
<script setup lang="ts">
import { useFormik, FormInput, FormTextArea, FormSelectField } from "vue-formik";
import { onBeforeMount } from "vue";
import { InitialValues, ValidationSchema } from "@/constants/homeFormik.ts";
import ValidationSchemaPreview from "@/components/home/ValidationSchemaPreview.vue";

const sexOptions = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Other", value: "O" },
  { label: "Prefer not to say", value: "N/A" },
];

const formik = useFormik({
  initialValues: InitialValues,
  validationSchema: ValidationSchema,
  onSubmit(values, helpers) {
    console.log("Form submitted", values);
    helpers.reset();
  },
});

onBeforeMount(() => {
  document.title = "Home | Vue Formik";
});
</script>
<style lang="scss">
.vf-field {
  label {
    font-size: 1rem;
  }
  .vf-input {
    input {
      width: 100%;
    }
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    select,
    textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      font-size: 1rem;
      width: 100%;
    }

    &--error {
      border: 1px solid red !important;

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: 1px solid red !important;
      }
    }
  }
  .vf-error {
    color: red;
    font-size: 0.875rem;
  }
}

.addresses {
  .vf-field {
    @apply grow;
  }
  button {
    width: fit-content !important;
    text-decoration: none;
  }
}
</style>
