/* eslint-disable @typescript-eslint/no-explicit-any */
import { InitialValues } from "@/constants/homeFormik.ts";
import { useFormik } from "vue-formik";
import type { ObjectSchema } from "yup";

const useFormikForm = (
  schema: ObjectSchema<any> | Partial<Record<string, (value: any) => any>>,
) => {
  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: schema,
    onSubmit: (values: any) => {
      console.log("Submitted:", values);
    },
    validateOnMount: false,
  });

  return { formik };
};

export default useFormikForm;
