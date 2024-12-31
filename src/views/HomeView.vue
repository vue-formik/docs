<template>
  <section class="home-view">
    <h2>Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />
    <div class="home-view__content">
      <form class="border rounded-md p-4" @submit="formik.handleSubmit">
        <FormTextField
          :formik="formik"
          name="name"
          label="Name:"
          type="text"
          placeholder="Enter your name"
        />

        <FormTextField
          :formik="formik"
          name="phone"
          label="Phone:"
          type="tel"
          placeholder="Enter your phone number"
        />

        <div class="v-formik--field">
          <label for="sex"> Gender: </label>
          <select
            id="sex"
            name="sex"
            v-model="formik.values.sex"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
          >
            <option v-for="option in sexOptions" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>

        <FormTextArea
          :formik="formik"
          name="message"
          label="Message:"
          placeholder="Enter your message"
          rows="4"
        />

        <br />

        <button type="submit" class="disabled:opacity-10 p-2" :disabled="!formik.isValid.value">
          Submit
        </button>
      </form>
      <div>
        <pre class="border p-4 rounded-md h-full"><code>{{JSON.stringify({
            values: formik.values,
            errors: formik.errors,
            touched: formik.touched,
            isValid: formik.isValid.value,
            isDirty: formik.isDirty.value
          }, null, 2) }}</code></pre>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useFormik, FormTextField, FormTextArea } from "vue-formik";
import { onBeforeMount } from "vue";

const sexOptions = [
  { label: "Male", value: "M" },
  { label: "Female", value: "F" },
  { label: "Other", value: "O" },
  { label: "Prefer not to say", value: "N/A" },
];

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    phone: "",
    sex: "",
    message: "",
  },
  validationSchema: {
    name: (value: string) => {
      if (!value) {
        return "Name is required";
      }
    },
    email: (value: string) => {
      if (!value) {
        return "Email is required";
      }
      if (!value.includes("@")) {
        return "Invalid email";
      }
    },
    phone: (value: string) => {
      if (!value) {
        return "Phone is required";
      }
      if (!/^\d{10}$/.test(value)) {
        return "Invalid phone number. Must be 10 digits";
      }
    },
  },
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
.v-formik {
  &--field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &--input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 1rem;

    &--error {
      border: 1px solid red;

      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: 1px solid red;
      }
    }
  }
  &--error {
    color: red;
    font-size: 0.875rem;
  }
}
</style>
