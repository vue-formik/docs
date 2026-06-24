<script setup lang="ts">
import CodeBlock from "@/components/core/CodeBlock.vue";

const ImportExample = `import { useField } from 'vue-formik';

// Resolves the formik instance from a prop or Vue injection,
// then exposes a reactive binding for a single field.
const {
  value,      // writable ref: get/set the field's value
  error,      // current error for the field (if any)
  touched,    // whether the field has been touched
  hasError,   // boolean: error AND touched
  attrs,      // { id, name, aria-invalid, aria-describedby }
  setValue,
  setTouched,
  onInput,    // event handler -> updates value
  onChange,   // alias of onInput
  onBlur,     // marks touched + runs blur validation
} = useField('email');`;

const CustomInputExample = `<script setup lang="ts">
import { useField } from 'vue-formik';

const props = defineProps<{ name: string }>();
const { value, hasError, error, onInput, onBlur, attrs } = useField(() => props.name);
<\/script>

<template>
  <div :class="{ 'has-error': hasError }">
    <input
      v-bind="attrs"
      :value="value"
      @input="onInput"
      @blur="onBlur"
    />
    <p v-if="hasError" role="alert">{{ error }}</p>
  </div>
</template>`;

const ThirdPartyExample = `<script setup lang="ts">
import { useField } from 'vue-formik';
// Works with any UI library component that has a v-model + error slot
const { value, hasError, error } = useField('country');
<\/script>

<template>
  <UiSelect
    v-model="value"
    :error="hasError ? error : undefined"
    :options="countries"
  />
</template>`;

const FieldValidationExample = `import { useField } from 'vue-formik';

// A field-level rule is merged into the form's validation and
// takes precedence for this field. It is unregistered automatically
// when the component unmounts.
const { value } = useField('username', {
  validation: (v) => (v ? undefined : 'Username is required'),
});`;

const ParentSchemaExample = `<!-- SignupForm.vue (parent) -->
<script setup lang="ts">
import { useFormik, FormikForm } from 'vue-formik';
import { z } from 'zod';
import TextField from './TextField.vue';

// 1. Define the form + schema ONCE in the parent.
const formik = useFormik({
  initialValues: { email: '', password: '' },
  zodSchema: z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'At least 8 characters'),
  }),
  onSubmit: (values) => console.log(values),
});
<\/script>

<template>
  <!-- 2. FormikForm provides the instance via Vue's inject(). -->
  <FormikForm :formik="formik">
    <!-- 3. Children just reference field names — no schema wiring needed. -->
    <TextField name="email" label="Email" type="email" />
    <TextField name="password" label="Password" type="password" />
    <button type="submit" :disabled="!formik.isValid.value">Sign up</button>
  </FormikForm>
</template>`;

const ChildInputExample = `<!-- TextField.vue (child) -->
<script setup lang="ts">
import { useField } from 'vue-formik';

const props = defineProps<{ name: string; label: string; type?: string }>();

// useField finds the parent formik through inject('formik') — no prop needed.
// Errors for this field come from the PARENT schema automatically.
const { value, hasError, error, onInput, onBlur, attrs } = useField(() => props.name);
<\/script>

<template>
  <label :for="name">{{ label }}</label>
  <input
    v-bind="attrs"
    :type="type ?? 'text'"
    :value="value"
    @input="onInput"
    @blur="onBlur"
  />
  <p v-if="hasError" role="alert">{{ error }}</p>
</template>`;

const ExplicitFormikExample = `<script setup lang="ts">
import { useField } from 'vue-formik';
import type { Formik } from 'vue-formik';

const props = defineProps<{ name: string; formik: Formik }>();

// When you are NOT inside a <FormikForm> (or want to target a specific form),
// pass the instance explicitly instead of relying on injection.
const { value, error, hasError } = useField(() => props.name, {
  formik: props.formik,
});
<\/script>`;

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "useField - Vue Formik",
  description:
    "Use the headless useField composable to bind any input — including third-party UI components — to Vue Formik state.",
  keywords: ["vue-formik", "useField", "composable", "headless", "custom inputs"],
});
</script>

<template>
  <section class="info_page">
    <section>
      <h1 class="mb-8!">🪝 <code>useField</code> Composable</h1>

      <p class="mb-2">
        <code>useField</code> is a <strong>headless</strong> binding for a single form field. It
        resolves the <code>formik</code> instance from a prop or Vue injection and gives you a
        reactive value, error/touched state, ready-made event handlers, and accessibility
        attributes — so you can wire <em>any</em> input to Vue Formik without the bundled
        components.
      </p>
      <p class="mb-2">
        The built-in components (<code>FormInput</code>, <code>FormTextArea</code>,
        <code>FormSelectField</code>, <code>FormContentEditable</code>) are themselves built on
        <code>useField</code>.
      </p>
    </section>

    <section>
      <h2 class="mb-4!">📦 Usage</h2>
      <CodeBlock :content="ImportExample" />

      <blockquote>
        <p class="font-semibold">Tip: pass a getter for reactive names</p>
        <p>
          When the field name comes from a prop, pass a getter — <code>useField(() => props.name)</code> —
          so the binding stays reactive if the name changes.
        </p>
      </blockquote>
    </section>

    <section>
      <h2 class="mb-4!">🧱 Building a custom input</h2>
      <CodeBlock :content="CustomInputExample" />
    </section>

    <section>
      <h2 class="mb-4!">🌳 Parent schema, child inputs (recommended pattern)</h2>
      <p class="mb-2">
        The cleanest way to build forms is to declare the schema and form state <strong>once in a
        parent</strong>, then let small input components bind to individual fields with
        <code>useField</code>. The children don't know anything about the schema — they only
        reference a field name, and validation errors flow down automatically.
      </p>
      <p class="mb-2">
        This works because <code>&lt;FormikForm&gt;</code> <em>provides</em> the formik instance via
        Vue's <code>provide()</code>, and <code>useField</code> picks it up with
        <code>inject('formik')</code>.
      </p>

      <h3>1. Parent owns the schema</h3>
      <CodeBlock :content="ParentSchemaExample" />

      <h3>2. Child binds to a field</h3>
      <p class="mb-2">
        Each field's error comes from the parent's schema — define the rules in one place, reuse the
        input everywhere.
      </p>
      <CodeBlock :content="ChildInputExample" />

      <blockquote>
        <p class="font-semibold">How errors reach the input</p>
        <p>
          The parent's <code>zodSchema</code> (or <code>yupSchema</code>,
          <code>standardSchema</code>, <code>validationSchema</code>, …) produces an
          <code>errors</code> object keyed by field path. <code>useField('email')</code> reads
          <code>errors.email</code> for you and exposes it as <code>error</code> /
          <code>hasError</code> — which only becomes truthy once the field is also touched.
        </p>
      </blockquote>

      <h3>Without a <code>FormikForm</code> wrapper</h3>
      <p class="mb-2">
        If you're not wrapping fields in <code>&lt;FormikForm&gt;</code>, either
        <code>provide('formik', formik)</code> yourself in the parent, or pass the instance to each
        field explicitly via the <code>formik</code> option:
      </p>
      <CodeBlock :content="ExplicitFormikExample" />
    </section>

    <section>
      <h2 class="mb-4!">🔌 Wrapping a third-party component</h2>
      <p class="mb-2">
        Because <code>value</code> is a writable ref, it works directly with
        <code>v-model</code> on UI-library components (Vuetify, PrimeVue, Element Plus, …).
      </p>
      <CodeBlock :content="ThirdPartyExample" />
    </section>

    <section>
      <h2 class="mb-4!">✅ Field-level validation</h2>
      <p class="mb-2">
        Pass a <code>validation</code> rule to validate this field. It runs alongside any schema
        validation and takes precedence for its own field, and is cleaned up automatically on
        unmount.
      </p>
      <CodeBlock :content="FieldValidationExample" />
    </section>
  </section>
</template>
