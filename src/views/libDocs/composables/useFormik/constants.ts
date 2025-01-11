/**
 *Parameters Table Data:
 * ---
 * Parameter	Type	Required	Default	Description
 * initialValues	object	Yes	-	An object containing the initial values for the form fields.
 * validationSchema	ObjectSchema or object	No	-	A yup schema or a validation rules object for validating the form fields.
 * onSubmit	(values, helpers) => void	No	-	A function to handle form submission. It receives the current form values and helpers.
 * validateOnMount	boolean	No	true	If true, performs validation when the form is initialized.
 * preventDefault	boolean	No	true	If true, prevents the default form submission behavior.
 */
/**
 * Returned Properties Table Data:
 * ---
 * Property  Type	Description
 * values	reactive<object>	Reactive object containing the current values of form fields.
 * errors	reactive<object>	Reactive object containing field-level validation errors.
 * touched	reactive<object>	Reactive object indicating whether a field has been interacted with.
 * isValid	computed<boolean>	Computed property indicating if the form is valid.
 * isDirty	computed<boolean>	Computed property indicating if the form values have changed from the initial values.
 * isSubmitting	ref<boolean>	Ref indicating if the form is in the submitting state.
 * fieldHandlers	computed<object>	Handlers (onBlur and onChange) for form fields.
 */
/**
 * Returned Methods Table Data:
 * ---
 * Method	Parameters	Description
 * setValues	(newValues: Partial<T>)	Updates the form values.
 * setErrors	(newErrors: object)	Updates the form errors.
 * setTouched	(newTouched: object)	Updates the form’s touched state.
 * reset	({ values }: { values?: Partial<T> })	Resets the form to the initial state or provided values.
 * setFieldValue	(field: string, value: unknown)	Updates the value of a specific field.
 * setFieldTouched	(field: string, touchedValue: boolean)	Marks a specific field as touched.
 * setSubmitting	(value: boolean)	Updates the submitting state.
 * handleSubmit	(e: Event)	Handles form submission, triggers validation, and executes onSubmit.
 * handleFieldBlur	(e: FocusEvent)	Marks the corresponding field as touched on blur.
 * handleFieldChange	(e: Event)	Updates the corresponding field’s value and marks it as touched on change.
 * hasFieldError	(field: string): boolean	Checks if a specific field has an error and has been touched.
 * getFieldError	(field: string): string	Retrieves the error message for a specific field if it exists.
 * getFieldValue	(field: string): unknown	Retrieves the current value of a specific field.
 */
