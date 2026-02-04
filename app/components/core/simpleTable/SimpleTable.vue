<script lang="ts" setup>
import { computed } from "vue";
import type { Props, IClasses } from "./types";
import FieldPreview from "@/views/libDocs/composables/useFormik/FieldPreview.vue";

const defaultClasses = {
  root: "vf-table-root",
  table: "vf-table",
  thead: "vf-table-head",
  tbody: "vf-table-body",
  tr: "vf-table-row",
  th: "vf-table-header",
  td: "vf-table-data",
};

const props = withDefaults(defineProps<Props>(), {
  classes: () => ({}) as IClasses,
  minWidth: 800,
});

const classesDict = computed(() => {
  return {
    root: `${defaultClasses.root} ${props.classes.root ?? ""}`,
    table: `${defaultClasses.table} ${props.classes.table ?? ""}`,
    thead: `${defaultClasses.thead} ${props.classes.thead ?? ""}`,
    tbody: `${defaultClasses.tbody} ${props.classes.tbody ?? ""}`,
    tr: `${defaultClasses.tr} ${props.classes.tr ?? ""}`,
    th: `${defaultClasses.th} ${props.classes.th ?? ""}`,
    td: `${defaultClasses.td} ${props.classes.td ?? ""}`,
  };
});
</script>

<template>
  <section
    :class="classesDict.root"
    :style="{
      overflowX: 'auto',
    }"
  >
    <table
      :class="classesDict.table"
      :style="{
        minWidth: `${props.minWidth}px`,
      }"
    >
      <thead :class="classesDict.thead">
        <tr :class="classesDict.tr">
          <th
            v-for="column in columns"
            :key="column.field"
            :style="{
              textAlign: column.align ?? 'start',
              width: column.width ?? 'auto',
            }"
            :class="classesDict.th"
          >
            {{ column.header }}
          </th>
        </tr>
      </thead>
      <tbody :class="classesDict.tbody">
        <tr v-for="(row, index) in rows" :key="index" :class="classesDict.tr">
          <td
            v-for="column in columns"
            :key="column.field"
            :style="{ textAlign: column.align ?? 'start' }"
            :class="classesDict.td"
          >
            <FieldPreview :row="row" :column="column" />
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
