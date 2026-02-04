<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full col-span-2 lg:col-span-3">
    <div class="container">
      <h3>Custom Validation Schema</h3>
      <pre><code>{{ code }}</code></pre>
    </div>
    <div class="container">
      <h3>Validation Schema Yup</h3>
      <pre><code>{{ yupCode }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const code = `const ValidationSchema = {
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
  contacts: (value: IContact[]) => {
    if (value.length === 0) {
      return "Contact is required";
    }

    const errs = [];
    for (let i = 0; i < value.length; i++) {
      const err = {
        code: "",
        number: "",
      };

      if (!value[i].code) {
        err.code = "Code is required";
      }
      if (!/^\\+\\d{2,3}$/.test(value[i].code)) {
        err.code = "Invalid code. Must be in format +91";
      }
      if (!value[i].number) {
        err.number = "Number is required";
      }
      if (!/^\\d{10}$/.test(value[i].number)) {
        err.number = "Invalid phone number. Must be 10 digits";
      }

      errs[i] = err;
    }

    return errs.length ? errs : undefined;
  },
  addresses: (value: string[]) => {
    if (value.length === 0) {
      return "Address is required";
    }

    const errs = [];
    for (let i = 0; i < value.length; i++) {
      if (!value[i]) {
        errs[i] = "Address is required";
        continue;
      }

      if (value[i].length < 3) {
        errs[i] = "Address must be at least 3 characters";
        continue;
      }

      if (value[i].length > 50) {
        errs[i] = "Address must be at most 50 characters";
      }
    }
    console.log(errs);

    return errs.length ? errs : undefined;
  },
};
`;

const yupCode = `const ValidationSchemaYup = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        code: Yup.string()
          .matches(/^\\+\\d{2,3}$/, "Invalid code. Must be in format +91")
          .required("Code is required"),
        number: Yup.string()
          .matches(/^\\d{10}$/, "Invalid phone number. Must be 10 digits")
          .required("Number is required"),
      }),
    )
    .min(1, "At least one contact is required")
    .required("Contacts are required")
    .default([{ code: "", number: "" }]), // Ensures contacts array is initialized
  sex: Yup.string().required("Sex is required"),
  message: Yup.string().required("Message is required"),
  addresses: Yup.array()
    .of(
      Yup.string()
        .min(3, "Address must be at least 3 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Address is required"),
    )
    .min(1, "At least one address is required")
    .required("Addresses are required")
    .default([""]), // Ensures addresses array is initialized
});
`;
</script>

<style scoped>
@reference "tailwindcss";

.container {
  margin-block: 2rem;
  border-radius: 5px;
  @apply border border-gray-500;
}

.container h3 {
  padding: 1rem;
  margin: 0;
  border-radius: 5px 5px 0 0;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  @apply border-b border-gray-500 text-gray-300;
}

.container pre {
  max-height: 500px;
  overflow-y: auto;
  padding: .8rem 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Arial', Courier, monospace;
}

.container pre code {
  font-size: 0.9rem;
  line-height: 1;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #a2a2a2;
}
</style>
