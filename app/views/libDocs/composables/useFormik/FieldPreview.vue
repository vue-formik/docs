<script lang="ts" setup>
import type { IColumn, IRow } from "@/components/core/simpleTable/types.ts";
import { computed } from "vue";

const props = defineProps<{
  row: IRow;
  column: IColumn;
}>();
const fieldValue = computed(() => props.row[props.column.field] ?? props.column.default);

const wrapWithCode = computed(() => {
  if (props.column.code) {
    return true;
  }
  if (typeof fieldValue.value === "string") {
    return ["true", "false"].includes(fieldValue.value.toLowerCase());
  }
  return true;
});
</script>

<template>
  <template v-if="wrapWithCode">
    <code>{{ fieldValue }}</code>
  </template>
  <template v-else>{{ fieldValue }}</template>
</template>
