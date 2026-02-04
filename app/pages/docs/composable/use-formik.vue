<script setup lang="ts">
import IntroSection from "@/views/libDocs/composables/useFormik/sections/IntroSection.vue";
import ParameterSection from "@/views/libDocs/composables/useFormik/sections/ParameterSection.vue";
import PropertiesSection from "@/views/libDocs/composables/useFormik/sections/PropertiesSection.vue";
import MethodsSection from "@/views/libDocs/composables/useFormik/sections/MethodsSection.vue";
import CustomValidationSection from "@/views/libDocs/composables/useFormik/sections/CustomValidationSection.vue";
import AsyncValidationSection from "@/views/libDocs/composables/useFormik/sections/AsyncValidationSection.vue";
import InfoPageFooter from "@/components/core/InfoPageFooter.vue";

definePageMeta({
  sidebar: true,
});

useSEO({
  title: "useFormik - Vue Formik",
  description:
    "Learn how to use the useFormik composable to manage form state, validation, and submission in Vue.js applications.",
  keywords: ["vue-formik", "useFormik", "composable", "forms", "validation"],
});
</script>

<template>
  <section class="info_page">
    <IntroSection />
    <ParameterSection />
    <PropertiesSection />
    <MethodsSection />
    <CustomValidationSection />
    <AsyncValidationSection />
    <InfoPageFooter />
  </section>
</template>

<style scoped>
@reference "tailwindcss";

code {
  @apply text-red-100 border rounded px-2 py-0.5 border-red-50;
}
</style>
