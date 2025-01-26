<template>
  <section class="pg-view">
    <h2 class="!text-xl !pb-1">Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />

    <div class="mb-4 border-b flex gap-4 items-center">
      <button
        v-for="tabItem in DemoTabs"
        :key="tabItem.value"
        :class="{
          'py-2 px-4 rounded-t-md rounded-b-none': true,
          'bg-gray-800 text-white': tab === tabItem.value,
        }"
        @click="() => (tab = tabItem.value)"
      >
        {{ tabItem.name }}
      </button>

      <label for="validateOnMount">
        <input id="validateOnMount" :checked="validateOnMount" type="checkbox" disabled />
        <span class="text-sm ml-2">Validate on mount</span>
      </label>
    </div>

    <div class="pg-view__content">
      <template v-for="tabItem in DemoTabs" :key="tabItem.value">
        <ExpoForm
          v-if="activeTab?.value === tabItem.value"
          :validate-on-mount="validateOnMount"
          :validation-schema="tabItem.schema"
          :value="tabItem.value"
        />
      </template>

      <ValidationSchemaPreview />
    </div>

    <p class="py-2 text-sm">
      <span> You can find the source code for this example on </span>
      <a
        :href="Links.DemoViewGHPage"
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
import { computed, onBeforeMount, ref } from "vue";
import ValidationSchemaPreview from "@/components/home/ValidationSchemaPreview.vue";
import ExpoForm from "@/components/home/ExpoForm.vue";
import { DemoTabs } from "@/constants/demo.ts";
import Links from "@/constants/Links.ts";

onBeforeMount(() => {
  document.title = "Home | Vue Formik";
});

const tab = ref(1);
const activeTab = computed(() => DemoTabs.find((t) => t.value === tab.value));
const validateOnMount = ref(true);
</script>
