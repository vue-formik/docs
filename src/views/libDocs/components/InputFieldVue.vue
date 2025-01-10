<script setup lang="ts"></script>

<template>
  <section class="input-field-vue">
    <h1>Input Field</h1>
    <p>
      The <code>InputFieldVue</code> component is a simple input field that can be used to collect
      user input. It is designed to work with the <code>useFormik</code> composable.
    </p>
    <p>The <code>InputFieldVue</code> component accepts the following props:</p>
    <ul>
      <li><code>name</code> - The name of the input field.</li>
      <li><code>label</code> - The label for the input field.</li>
      <li><code>type</code> - The type of the input field (e.g., text, email, password).</li>
      <li><code>placeholder</code> - The placeholder text for the input field.</li>
      <li><code>value</code> - The value of the input field.</li>
      <li><code>error</code> - The error message for the input field.</li>
      <li><code>onChange</code> - The event handler for the input field.</li>
    </ul>
    <p>The <code>InputFieldVue</code> component emits the following events:</p>
    <ul>
      <li><code>input</code> - The event is emitted when the value of the input field changes.</li>
    </ul>
    <p>The <code>InputFieldVue</code> component is used as follows:</p>
  </section>
</template>

<style scoped lang="sass"></style>
