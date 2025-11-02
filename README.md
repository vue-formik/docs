# 📘 Vue-Formik Docs

Your go-to guide for mastering the Vue-Formik library. 🚀

## 🌟 About

Welcome to the official Vue-Formik Documentation!
This comprehensive guide will help you understand and utilize the power of Vue-Formik, a library inspired by Formik for React, tailored for Vue.js.

## 🛠️ Features
- Detailed Setup Instructions 🛠️
    Get started with step-by-step setup guidance.

- Comprehensive API Reference 📚
  Dive deep into every method, prop, and event.

- Interactive Examples ⚡
  Learn by doing with code snippets and live demos.

- Best Practices & Tips 🌱
  Maximize the efficiency of your forms with expert insights.

## 🚀 Getting Started

```vue
<script setup lang="ts">
import { useFormik } from "vue-formik"
const formik = useFormik({
  initialValues: {
    name: "",
  },
  // Yup validation schema is also supported
  validationSchema: {
    name: (value: string) => {
      if (!value) {
        return "Name is required"
      }
    },
  },
  onSubmit(values, helpers) {
    helpers.reset()
  },
})
</script>
<template>
    <form @submit.prevent="formik.handleSubmit">
        <div>
          <input
            v-model="formik.values.name"
            placeholder="Name"
            name="name"
            @input="formik.handleChange"
            @blur="formik.handleBlur"
          />
          <span v-if="formik.hasFieldError('name')">
            {{ formik.getFieldError('name') }}
          </span>
        </div>
        <button type="submit">Submit</button>
    </form>
</template>
```


[//]: # (## 📑 Documentation Sections)

[//]: # (1.	📂 Introduction)

[//]: # (Overview and core concepts.)

[//]: # (2.	⚙️ Setup & Installation)

[//]: # (Installation steps, dependencies, and requirements.)

[//]: # (3.	🎨 Examples & Usage)

[//]: # (Practical examples to get started quickly.)

[//]: # (4.	🔧 API Reference)

[//]: # (Detailed descriptions of all Vue-Formik methods, props, and events.)

[//]: # (5.	💡 Advanced Topics)

[//]: # (Handling complex forms, custom validations, and more.)

## 🤝 Contributing

We’re always looking to improve!
Feel free to contribute to the documentation by submitting pull requests or suggestions. Check out our CONTRIBUTING.md (coming soon) for details.

## 🌐 Links
•	[Vue-Formik](https://www.npmjs.com/package/vue-formik) Library
•	[GitHub Repository](https://github.com/vue-formik/vue-formik)

👩‍💻 Happy Form Handling! ❤️
