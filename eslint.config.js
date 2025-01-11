import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import pluginVitest from "@vitest/eslint-plugin";
import pluginPlaywright from "eslint-plugin-playwright";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },

  {
    ...pluginPlaywright.configs["flat/recommended"],
    files: ["e2e/**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
  skipFormatting,
  {
    rules: {
      "vue/no-console": ["error", { allow: ["warn", "error"] }],
      "vue/eqeqeq": "error",
      "vue/no-unused-emit-declarations": "error",
      "vue/no-unused-properties": "error",
      "vue/no-unused-refs": "error",
      "vue/no-useless-mustaches": "error",
      "vue/no-useless-v-bind": "error",
      "vue/padding-line-between-blocks": "error",
      "vue/script-indent": [
        "error",
        2,
        {
          baseIndent: 0,
          switchCase: 2,
          ignores: [],
        },
      ],
      "vue/array-bracket-spacing": ["error", "never"],
      "vue/arrow-spacing": "error",
      "vue/block-spacing": "error",
      "vue/brace-style": "error",
      "vue/comma-dangle": "always-multiline",
      "vue/dot-notation": "error",
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: 3,
          multiline: 2,
        },
      ],
      "vue/first-attribute-linebreak": "error",
    },
  },
];
