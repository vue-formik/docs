<template>
  <section class="home-view">
    <h2>Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />
    <div class="home-view__content">
      <form class="border rounded-md p-4" @submit="formik.handleSubmit">
        <div class="form-field">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            :value="formik.values.name"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
            :class="{
              error: formik.hasFieldError('name'),
            }"
          />
          <p v-if="formik.hasFieldError('name')" class="form-field--error">
            {{ formik.getFieldError("name") }}
          </p>
        </div>

        <div class="form-field">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="formik.values.email"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
            :class="{
              error: formik.hasFieldError('email'),
            }"
          />
          <p v-if="formik.hasFieldError('email')" class="form-field--error">
            {{ formik.getFieldError("email") }}
          </p>
        </div>

        <div class="form-field">
          <label for="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="formik.values.phone"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
            :class="{
              error: formik.hasFieldError('phone'),
            }"
          />
          <p v-if="formik.hasFieldError('phone')" class="form-field--error">
            {{ formik.getFieldError("phone") }}
          </p>
        </div>

        <div class="form-field">
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

        <div class="form-field">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            v-model="formik.values.message"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
          />
        </div>

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
import { useFormik } from "vue-formik";

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
</script>
