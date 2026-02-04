<template>
  <section class="pg-view">
    <h2 class="text-xl! pb-1!">Simple form validation with Vue Formik</h2>
    <hr class="mb-6" />

    <div class="mb-4 border-b flex gap-4 items-center flex-wrap">
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
    </div>
    <div class="flex gap-4 items-center flex-wrap mb-4">
      <label for="validateOnMount" class="flex items-center">
        <input id="validateOnMount" v-model="validateOnMount" type="checkbox" class="mr-2" />
        <span class="text-sm">Validate on mount</span>
      </label>

      <label for="validateOnChange" class="flex items-center">
        <input id="validateOnChange" v-model="validateOnChange" type="checkbox" class="mr-2" />
        <span class="text-sm">Validate on change</span>
      </label>

      <label for="validateOnBlur" class="flex items-center">
        <input id="validateOnBlur" v-model="validateOnBlur" type="checkbox" class="mr-2" />
        <span class="text-sm">Validate on blur</span>
      </label>

      <label for="preventDefault" class="flex items-center">
        <input id="preventDefault" v-model="preventDefault" type="checkbox" class="mr-2" />
        <span class="text-sm">Prevent default</span>
      </label>

      <label for="validationDebounce" class="flex items-center gap-2">
        <span class="text-sm">Debounce (ms):</span>
        <input
          id="validationDebounce"
          v-model.number="validationDebounce"
          type="number"
          min="0"
          step="100"
          class="w-20 px-2 py-1 border rounded bg-gray-400 text-gray-900"
        />
      </label>
    </div>

    <div class="pg-view__content">
      <template v-for="tabItem in DemoTabs" :key="tabItem.value">
        <ExpoForm
          v-if="activeTab?.value === tabItem.value"
          :validate-on-mount="validateOnMount"
          :validate-on-change="validateOnChange"
          :validate-on-blur="validateOnBlur"
          :validation-debounce="validationDebounce"
          :prevent-default="preventDefault"
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
import { DemoTabs } from "@/constants/demo";
import Links from "@/constants/Links";

onBeforeMount(() => {
  document.title = "Home | Vue Formik";
});

const tab = ref(1);
const activeTab = computed(() => DemoTabs.find((t) => t.value === tab.value));
const validateOnMount = ref(true);
const validateOnChange = ref(true);
const validateOnBlur = ref(true);
const validationDebounce = ref(0);
const preventDefault = ref(true);
</script>
