<template>
  <section class="pg-view">
    <h2 class="!text-xl !pb-1">Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />

    <div class="mb-4 border-b">
      <button
        v-for="tabItem in DemoTabs"
        :key="tabItem.value"
        :class="{ 'bg-gray-800 text-white': tab === tabItem.value }"
        class="py-2 px-4 mr-2 last:mr-0"
        @click="() => (tab = tabItem.value)"
      >
        {{ tabItem.name }}
      </button>

      <label for="validateOnMount">
        <input id="validateOnMount" v-model="validateOnMount" type="checkbox" class="ml-4" />
        <span class="ml-2">Validate on mount</span>
      </label>
    </div>

    <div class="pg-view__content">
      <template v-for="tabItem in DemoTabs" :key="tabItem.value">
        <ExpoForm
          v-if="tab === tabItem.value"
          :validation-schema="tabItem.schema"
          :value="tab"
          :validate-on-mount="validateOnMount"
        />
      </template>

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
import { DemoTabs } from "@/constants/demo.ts";

onBeforeMount(() => {
  document.title = "Home | Vue Formik";
});

const tab = ref(1);
const validateOnMount = ref(false);
</script>
