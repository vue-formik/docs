export const SchemaExample = `
// Using Yup
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required()
})

// Using Zod
import { z } from 'zod'

const zodSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

// Using Joi
import Joi from 'joi'

const joiSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
})
`;

export const DebounceExample = `
const formik = useFormik({
  initialValues: { search: '' },
  validationSchema: {
    search: (value) => value.length < 3 ? 'Too short' : undefined
  },
  validationDebounce: 300 // Built-in!
})
`;

export const ModernAPIExample = `
const formik = useFormik({
  initialValues: { name: '', email: '' },
  validationSchema: { /* ... */ }
})

// Reactive values
console.log(formik.values.name)

// Computed states
console.log(formik.isValid.value)
console.log(formik.isDirty.value)

// Watch for changes
watch(() => formik.values.email, (newVal) => {
  console.log('Email changed:', newVal)
})
`;

export const ValidationTimingExample = `
const formik = useFormik({
  initialValues: { email: '' },
  validationSchema: { /* ... */ },
  
  // Control when validation runs
  validateOnMount: false,      // Don't validate on component mount
  validateOnChange: true,       // Validate as user types
  validateOnBlur: true,         // Validate when field loses focus
  validationDebounce: 300       // Debounce for 300ms
})
`;

export const ComponentsExample = `
// Import pre-built components
import { FormInput, FormTextArea, FormikForm } from 'vue-formik'

<FormikForm>
  <FormInput name="email" label="Email" type="email" />
  <FormTextArea name="message" label="Message" rows="4" />
  
  <button type="submit" :disabled="!formik.isValid.value">
    Submit
  </button>
</FormikForm>

// Automatic integration with form state
`;

export const WithoutFormikExample = `
<script setup>
const email = ref('')
const emailError = ref('')
const emailTouched = ref(false)

const validateEmail = () => {
  if (!email.value) {
    emailError.value = 'Required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.value = 'Invalid email'
  } else {
    emailError.value = ''
  }
}

const handleEmailBlur = () => {
  emailTouched.value = true
  validateEmail()
}

const handleEmailInput = () => {
  if (emailTouched.value) {
    validateEmail()
  }
}
</script>

<template>
  <div>
    <input 
      v-model="email"
      @input="handleEmailInput"
      @blur="handleEmailBlur"
    />
    <span v-if="emailError && emailTouched">
      {{ emailError }}
    </span>
  </div>
</template>
`;

export const WithFormikExample = `
<script setup>
import { useFormik } from 'vue-formik'

const formik = useFormik({
  initialValues: { email: '' },
  validationSchema: {
    email: (value) => {
      if (!value) return 'Required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Invalid email'
      }
    }
  }
})
</script>

<template>
  <div>
    <input 
      v-model="formik.values.email"
      @blur="formik.handleFieldBlur"
      @change="formik.handleFieldChange"
    />
    <span v-if="formik.hasFieldError('email')">
      {{ formik.getFieldError('email') }}
    </span>
  </div>
</template>
`;
