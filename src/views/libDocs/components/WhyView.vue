<template>
  <section class="info_page">
    <section>
      <h1>Why Components?</h1>
      <p>
        Components are the building blocks of modern front-end development. They allow us to break
        down complex UIs into smaller, reusable, and self-contained pieces of code. This not only
        improves code readability but also enhances maintainability, scalability, and testability.
      </p>

      <p>
        Vue Formik provides a set of components that encapsulate common form patterns, such as
        input, textarea, and many more. These components are designed to work seamlessly with Formik
        and help you build forms faster and more efficiently. Let's see how components can simplify
        form development by comparing two approaches: one without components and the other with
        components.
      </p>
    </section>

    <section>
      <h2>Without Components</h2>
      <CodeBlock :content="ExampleWithoutComponents" />

      <p>
        In this example, the code involves directly handling the value, input event, blur event, and
        field error messages for each input field. While this approach works for simple forms, it
        becomes cumbersome and error-prone as the form grows in complexity. Each field requires
        repetitive boilerplate code, making the implementation harder to read, debug, and maintain.
      </p>
    </section>

    <section>
      <h2>With Components</h2>
      <CodeBlock :content="ExampleWithComponents" />

      <p>
        By using a <code>FormInput</code> component, we encapsulate all the repetitive logic into a
        single reusable unit. This significantly reduces the amount of code in our form and ensures
        consistency across input fields. We only need to pass the necessary <code>name</code> and
        <code>formik</code> props, and the component takes care of managing events, validations, and
        error handling for us.
      </p>

      <h3>Comparison: Without vs. With Components</h3>
      <p>
        Using components brings a clear advantage in terms of readability, reusability, and ease of
        maintenance. Without components, you might struggle with verbose and repetitive code that is
        challenging to manage as your application grows. In contrast, with components, the codebase
        remains clean and modular. Updates to shared logic, such as validation rules, can be applied
        in one place rather than across multiple input fields.
      </p>

      <p>We will explore more about the power of components in the next section.</p>
    </section>
  </section>
</template>

<script setup lang="ts">
import CodeBlock from "@/components/core/CodeBlock.vue";
import {
  ExampleWithComponents,
  ExampleWithoutComponents,
} from "@/constants/examples/whyComponents.ts";
</script>
