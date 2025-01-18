<template>
  <section class="pg-view">
    <h2 class="!text-xl !pb-1">Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />

    <div class="mb-4 border-b">
      <button
        :class="{ 'bg-gray-800 text-white': tab === 1 }"
        class="py-2 px-4 mr-2"
        @click="() => (tab = 1)"
      >
        Custom
      </button>
      <button
        :class="{ 'bg-gray-800 text-white': tab === 0 }"
        class="py-2 px-4 mr-2"
        @click="() => (tab = 0)"
      >
        Yup
      </button>
    </div>

    <div class="pg-view__content">
      <ExpoForm v-if="tab === 1" :validation-schema="ValidationSchema" />
      <ExpoForm v-else :validation-schema="ValidationSchemaYup" />

      <ValidationSchemaPreview />
    </div>

    <p class="py-2 text-sm">
      <span> You can find the source code for this example on </span>
      <a
        href="https://github.com/vue-formik/docs/blob/main/src/views/DemoView.vue"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue-500 underline"
      >
        GitHub
      </a>
      <span>.</span>
    </p>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import ValidationSchemaPreview from "@/components/home/ValidationSchemaPreview.vue";
import ExpoForm from "@/components/home/ExpoForm.vue";
import { ValidationSchema, ValidationSchemaYup } from "@/constants/homeFormik.ts";

onBeforeMount(() => {
  document.title = "Home | Vue Formik";
});

const tab = ref<number>(1);
</script>
