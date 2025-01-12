<template>
  <section>
    <h1 class="!mb-8">✨ <code>useFormik</code> Composable</h1>

    <p class="mb-2">
      The <code>useFormik</code> composable is your ultimate ally for managing complex forms in Vue
      3 applications. With its simplicity and efficiency, it provides:
    </p>

    <ul class="list-disc ml-6 mb-4">
      <li class="mb-1">⚡ <strong>Reactive state management</strong></li>
      <li class="mb-1">
        ✅ <strong>Schema-based validation (supporting libraries like Yup)</strong>
      </li>
      <li>🚀 <strong>Streamlined form submission handling</strong></li>
    </ul>
    <p class="mb-1">
      With <code>useFormik</code>, you can effortlessly create dynamic, user-friendly forms that
      deliver a robust and consistent user experience.
    </p>

    <article class="!my-10">
      <h4 title="performance" class="flex items-center gap-2"><InfoIcon /> Performance:</h4>
      <p>
        Form validation runs deeply on every value change. To keep things snappy, optimize your
        validation schema and rules.
      </p>
    </article>
  </section>
</template>

<script setup lang="ts">
import InfoIcon from "@/components/svgIcons/InfoIcon.vue";
</script>
