<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full col-span-2 lg:col-span-3">
    <div class="container">
      <h3>Initial Values</h3>
      <pre><code>{{ initialValuesCode }}</code></pre>
    </div>
    <div class="container">
      <h3>{{ preview.title }}</h3>
      <p class="hint">Passed to <code>useFormik</code> via <code>{{ preview.option }}</code></p>
      <pre><code>{{ preview.code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { DemoTabValues } from "@/constants/demo";

const props = defineProps<{ value: number }>();

const initialValuesCode = `const initialValues = {
  name: "",
  email: "",
  contacts: [{ code: "", number: "" }],
  sex: "",
  message: "",
  addresses: [""],
};`;

const customCode = `const ValidationSchema = {
  name: (value) => (!value ? "Name is required" : undefined),
  email: (value) => {
    if (!value) return "Email is required";
    if (!value.includes("@")) return "Invalid email";
  },
  contacts: (value) => {
    // return an array of { code?, number? } errors, or undefined
  },
  addresses: (value) => {
    // return an array of string errors, or undefined
  },
};`;

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
    .min(1, "At least one contact is required"),
  sex: Yup.string().required("Sex is required"),
  message: Yup.string().required("Message is required"),
  addresses: Yup.array()
    .of(Yup.string().min(3).max(50).required("Address is required"))
    .min(1, "At least one address is required"),
});`;

const joiCode = `const ValidationSchemaJoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  contacts: Joi.array()
    .items(
      Joi.object({
        code: Joi.string().pattern(/^\\+\\d{2,3}$/).required(),
        number: Joi.string().pattern(/^\\d{10}$/).required(),
      }),
    )
    .min(1)
    .required(),
  sex: Joi.string().required(),
  message: Joi.string().required(),
  addresses: Joi.array().items(Joi.string().min(3).max(50).required()).min(1).required(),
});`;

const zodCode = `const ValidationSchemaZod = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  contacts: z
    .array(
      z.object({
        code: z.string().regex(/^\\+\\d{2,3}$/, "Invalid code. Must be in format +91").min(1, "Code is required"),
        number: z.string().regex(/^\\d{10}$/, "Invalid phone number. Must be 10 digits").min(1, "Number is required"),
      }),
    )
    .min(1, "At least one contact is required"),
  sex: z.string().min(1, "Sex is required"),
  message: z.string().min(1, "Message is required"),
  addresses: z
    .array(z.string().min(3, "Min 3 characters").max(50, "Max 50 characters"))
    .min(1, "At least one address is required"),
});`;

const superstructCode = `const ValidationSchemaSuperstruct = object({
  name: requiredString,
  email: emailPattern,
  contacts: size(
    array(object({ code: codePattern, number: numberPattern })),
    1,
  ),
  sex: requiredString,
  message: requiredString,
  addresses: size(array(addressPattern), 1),
});`;

const standardCode = `// Standard Schema (https://standardschema.dev) is a shared interface
// implemented by Zod, Valibot, ArkType, and more.
//
// Pass ANY compliant schema through the single \`standardSchema\` option —
// here we reuse the Zod schema above:

const formik = useFormik({
  initialValues,
  standardSchema: ValidationSchemaZod, // zod implements ~standard
});`;

const previews: Record<number, { title: string; option: string; code: string }> = {
  [DemoTabValues.CUSTOM]: { title: "Custom Validation Schema", option: "validationSchema", code: customCode },
  [DemoTabValues.YUP]: { title: "Yup Schema", option: "yupSchema", code: yupCode },
  [DemoTabValues.JOI]: { title: "Joi Schema", option: "joiSchema", code: joiCode },
  [DemoTabValues.ZOD]: { title: "Zod Schema", option: "zodSchema", code: zodCode },
  [DemoTabValues.SUPERSTRUCT]: { title: "Superstruct Schema", option: "structSchema", code: superstructCode },
  [DemoTabValues.STANDARD]: { title: "Standard Schema", option: "standardSchema", code: standardCode },
};

const preview = computed(() => previews[props.value] ?? previews[DemoTabValues.CUSTOM]!);
</script>

<style scoped>
@reference "tailwindcss";

.container {
  margin-block: 2rem;
  border-radius: 5px;
  @apply border border-gray-500;
}

.container h3 {
  padding: 1rem 1rem 0.25rem;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  @apply text-gray-300;
}

.container .hint {
  padding: 0 1rem 0.75rem;
  margin: 0;
  font-size: 0.8rem;
  @apply text-gray-400 border-b border-gray-500;
}

.container pre {
  max-height: 500px;
  overflow-y: auto;
  padding: 0.8rem 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.3;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: "Arial", Courier, monospace;
}

.container pre code {
  font-size: 0.9rem;
  line-height: 1.3;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #a2a2a2;
}
</style>
