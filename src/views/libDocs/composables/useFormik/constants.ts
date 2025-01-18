import type { IColumn, IRow } from "@/components/core/simpleTable/types.ts";

export const UseFormikParameterColumns = [
  { header: "Parameter", field: "name" },
  { header: "Type", field: "type", code: true },
  { header: "Required", field: "required" },
  { header: "Default", field: "default" },
  { header: "Description", field: "description" },
] as IColumn[];
export const UseFormikParameters = [
  {
    name: "initialValues",
    type: "object: <T>",
    required: true,
    default: "-",
    description: "An object containing the initial values for the form fields.",
  },
  {
    name: "validationSchema",
    type: "FormikValidationSchema<T>",
    required: false,
    default: "-",
    description: "A yup schema or a validation rules object for validating the form fields.",
  },
  {
    name: "mode",
    type: "YUP|JOI|JOD|CUSTOM<string>",
    required: false,
    default: "CUSTOM",
    description: "The mode to use for validation.",
  },
  {
    name: "onSubmit",
    type: "FormikOnSubmit<T>",
    required: false,
    default: "-",
    description:
      "A function to handle form submission. It receives the current form values and helpers.",
  },
  {
    name: "validateOnMount",
    type: "boolean",
    required: false,
    default: "true",
    description: "If true, performs validation when the form is initialized.",
  },
  {
    name: "preventDefault",
    type: "boolean",
    required: false,
    default: "true",
    description: "If true, prevents the default form submission behavior.",
  },
] as IRow[];

export const UseFormikReturnedPropertiesColumns = [
  { header: "Property", field: "name" },
  { header: "Type", field: "type", code: true },
  { header: "Description", field: "description" },
] as IColumn[];

export const UseFormikReturnedProperties = [
  {
    name: "values",
    type: "reactive<T>",
    description: "Reactive object containing the current values of form fields.",
  },
  {
    name: "errors",
    type: "reactive<object>",
    description: "Reactive object containing field-level validation errors.",
  },
  {
    name: "touched",
    type: "reactive<object>",
    description: "Reactive object indicating whether a field has been interacted with.",
  },
  {
    name: "isValid",
    type: "computed<boolean>",
    description: "Computed property indicating if the form is valid.",
  },
  {
    name: "isDirty",
    type: "computed<boolean>",
    description:
      "Computed property indicating if the form values have changed from the initial values.",
  },
  {
    name: "isSubmitting",
    type: "ref<boolean>",
    description: "Ref indicating if the form is in the submitting state.",
  },
  {
    name: "isValidating",
    type: "ref<boolean>",
    description: "Ref indicating if the form is in the validating state.",
  },
  {
    name: "submitCount",
    type: "ref<number>",
    description: "Ref containing the number of form submission attempts.",
  },
  {
    name: "fieldHandlers",
    type: "computed<object>",
    description: "Handlers (onBlur and onChange) for form fields.",
  },
] as IRow[];

export const UseFormikReturnedMethodsColumns = [
  { header: "Method", field: "name" },
  { header: "Parameters", field: "parameters", code: true },
  { header: "Description", field: "description" },
] as IColumn[];

export const UseFormikReturnedMethods = [
  {
    name: "setValues",
    parameters: "(newValues: Partial<T>)",
    description: "Updates the form values.",
  },
  {
    name: "setErrors",
    parameters: "(newErrors: object)",
    description: "Updates the form errors.",
  },
  {
    name: "setTouched",
    parameters: "(newTouched: object)",
    description: "Updates the form’s touched state.",
  },
  {
    name: "reset",
    parameters: "({ values }: { values?: Partial<T> })",
    description: "Resets the form to the initial state or provided values.",
  },
  {
    name: "setFieldValue",
    parameters: "(field: string, value: unknown)",
    description: "Updates the value of a specific field.",
  },
  {
    name: "setFieldTouched",
    parameters: "(field: string, touchedValue: boolean)",
    description: "Marks a specific field as touched.",
  },
  {
    name: "setSubmitting",
    parameters: "(value: boolean)",
    description: "Updates the submitting state.",
  },
  {
    name: "handleSubmit",
    parameters: "(e: Event)",
    description: "Handles form submission, triggers validation, and executes onSubmit.",
  },
  {
    name: "handleFieldBlur",
    parameters: "(e: FocusEvent)",
    description: "Marks the corresponding field as touched on blur.",
  },
  {
    name: "handleFieldChange",
    parameters: "(e: Event)",
    description: "Updates the corresponding field’s value and marks it as touched on change.",
  },
  {
    name: "hasFieldError",
    parameters: "(field: string): boolean",
    description: "Checks if a specific field has an error and has been touched.",
  },
  {
    name: "getFieldError",
    parameters: "(field: string): string",
    description: "Retrieves the error message for a specific field if it exists.",
  },
  {
    name: "getFieldValue",
    parameters: "(field: string): unknown",
    description: "Retrieves the current value of a specific field.",
  },
] as IRow[];
