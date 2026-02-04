export const ExampleWithoutComponents = `
<template>
<form @submit="formik.handleSubmit">
  <label for="name">
    Name
    <input
      id="name"
      name="name"
      :value="formik.values.name"
      @input="formik.handleFieldChange"
      @blur="formik.handleFieldBlur"
    />

    <p v-if="formik.hasFieldError('name')">
      {{ formik.getFieldError('name') }}
    </p>
  </label>
</form>
</template>
<script setup lang="ts">
import { useFormik } from "vue-formik";

const formik = useFormik({
  initialValues: {
    name: "",
  },
  onSubmit: (values) => {
    console.log(values);
  },
});
</script>
`;

export const ExampleWithComponents = `
<template>
  <FormikForm :formik="formik">
    <FormInput name="name" label="Name" :formik="formik" />
  </FormikForm>
</template>
<script setup lang="ts">
import { useFormik, FormInput, FormikForm } from "vue-formik";

const formik = useFormik({
  initialValues: {
    name: "",
  },
  onSubmit: (values) => {
    console.log(values);
  },
});
</script>
`;

export const ExampleWithProvideInject = `
<template>
  <FormikForm>
    <FormInput name="name" label="Name" />
  </FormikForm>
</template>
<script setup lang="ts">
import { provide, ref } from "vue";
import { useFormik, FormInput, FormikForm } from "vue-formik";

const formik = useFormik({
  initialValues: {
    name: "",
  },
  onSubmit: (values) => {
    console.log(values);
  },
});

provide("formik", formik);
</script>
`;
