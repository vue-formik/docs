<template>
  <section class="home-view">
    <h1>This is the home page</h1>

    <form @submit="formik.handleSubmit">
      <div class="form-field">
        <label for="name">Name:</label>
        <input
          type="text" id="name" name="name"
          v-model="formik.values.name"
          @input="formik.handleChange"
          @blur="formik.handleBlur"
        />
        <p
          v-if="formik.hasFieldError('name')"
          style="color: red;"
        >
          {{ formik.getFieldError('name') }}
        </p>
      </div>

      <div class="form-field">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"
          v-model="formik.values.email"
          @input="formik.handleChange"
          @blur="formik.handleBlur"
        />
      </div>

      <div class="form-field">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone"
          v-model="formik.values.phone"
          @input="formik.handleChange"
          @blur="formik.handleBlur"
        />
      </div>

      <div class="form-field">
        <label
          for="sex"
        >
          Gender:
        </label>
        <select
          id="sex"
          name="sex"
          v-model="formik.values.sex"
          @input="formik.handleChange"
          @blur="formik.handleBlur"
        >
          <option
            v-for="option in sexOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </div>


      <div class="form-field">
        <label for="message">Message:</label>
        <textarea id="message" name="message"
          v-model="formik.values.message"
          @input="formik.handleChange"
          @blur="formik.handleBlur"
        />
      </div>

      <br>

      <button
        type="submit"
        class="disabled:opacity-10 p-2"
        :disabled="!formik.isValid.value"
      >
        Submit
      </button>
    </form>
  </section>
</template>
<script setup lang="ts">
import {useFormik} from "vue-formik"

const sexOptions = [
  {label: "Male", value: "M"},
  {label: "Female", value: "F"},
  {label: "Other", value: "O"},
  {label: "Prefer not to say", value: "N/A"},
]

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
    phone: "",
    sex: "F",
    message: "",
  },
  validationSchema: {
    name: (value: string) => {
      if (!value) {
        return "Name is required"
      }
    },
  },
  onSubmit(values, helpers) {
    console.log("Form submitted", values)
    helpers.reset()
  },
})
</script>
