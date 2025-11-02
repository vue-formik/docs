import * as Yup from "yup";
import * as Joi from "joi";
import { z } from "zod";
import { object, string, array, refine, size } from "superstruct";

export const DemoTabValues = {
  CUSTOM: 1,
  YUP: 0,
  JOI: 2,
  ZOD: 3,
  SUPERSTRUCT: 4,
};

interface IContact {
  code: string;
  number: string;
}

export const InitialValues = {
  name: "",
  email: "",
  contacts: [{ code: "", number: "" }],
  sex: "",
  message: "",
  addresses: [""],
};

export const ValidationSchema = {
  name: (value: string) => {
    if (!value) {
      return "Name is required";
    }
  },
  email: (value: string) => {
    if (!value) {
      return "Email is required";
    }
    if (!value.includes("@")) {
      return "Invalid email";
    }
  },
  contacts: (value: IContact[]) => {
    if (value.length === 0) {
      return "Contact is required";
    }

    const errs = [];
    for (let i = 0; i < value.length; i++) {
      const err: {
        code?: string;
        number?: string;
      } = {};

      if (!value[i].code) {
        err.code = "Code is required";
      }
      if (!/^\+\d{2,3}$/.test(value[i].code)) {
        err.code = "Invalid code. Must be in format +91";
      }
      if (!value[i].number) {
        err.number = "Number is required";
      }
      if (!/^\d{10}$/.test(value[i].number)) {
        err.number = "Invalid phone number. Must be 10 digits";
      }

      if (err.code || err.number) {
        errs[i] = err;
      }
    }

    return errs.length ? errs : undefined;
  },
  addresses: (value: string[]) => {
    if (value.length === 0) {
      return "Address is required";
    }

    const errs = [];
    for (let i = 0; i < value.length; i++) {
      if (!value[i]) {
        errs[i] = "Address is required";
        continue;
      }

      if (value[i].length < 3) {
        errs[i] = "Address must be at least 3 characters";
        continue;
      }

      if (value[i].length > 50) {
        errs[i] = "Address must be at most 50 characters";
      }
    }

    return errs.length ? errs : undefined;
  },
};

export const ValidationSchemaYup = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contacts: Yup.array()
    .of(
      Yup.object().shape({
        code: Yup.string()
          .matches(/^\+\d{2,3}$/, "Invalid code. Must be in format +91")
          .required("Code is required"),
        number: Yup.string()
          .matches(/^\d{10}$/, "Invalid phone number. Must be 10 digits")
          .required("Number is required"),
      }),
    )
    .min(1, "At least one contact is required")
    .required("Contacts are required")
    .default([{ code: "", number: "" }]), // Ensures contacts array is initialized
  sex: Yup.string().required("Sex is required"),
  message: Yup.string().required("Message is required"),
  addresses: Yup.array()
    .of(
      Yup.string()
        .min(3, "Address must be at least 3 characters")
        .max(50, "Address must be at most 50 characters")
        .required("Address is required"),
    )
    .min(1, "At least one address is required")
    .required("Addresses are required")
    .default([""]), // Ensures addresses array is initialized
});

export const ValidationSchemaJoi = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      tlds: { allow: false },
    })
    .required(),
  contacts: Joi.array()
    .items(
      Joi.object({
        code: Joi.string()
          .pattern(/^\+\d{2,3}$/)
          .required(),
        number: Joi.string()
          .pattern(/^\d{10}$/)
          .required(),
      }),
    )
    .min(1)
    .required(),
  sex: Joi.string().required(),
  message: Joi.string().required(),
  addresses: Joi.array().items(Joi.string().min(3).max(50).required()).min(1).required(),
});

export const ValidationSchemaZod = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  contacts: z
    .array(
      z.object({
        code: z
          .string()
          .regex(/^\+\d{2,3}$/, "Invalid code. Must be in format +91")
          .min(1, "Code is required"),
        number: z
          .string()
          .regex(/^\d{10}$/, "Invalid phone number. Must be 10 digits")
          .min(1, "Number is required"),
      }),
    )
    .min(1, "At least one contact is required"),
  sex: z.string().min(1, "Sex is required"),
  message: z.string().min(1, "Message is required"),
  addresses: z
    .array(
      z
        .string()
        .min(3, "Address must be at least 3 characters")
        .max(50, "Address must be at most 50 characters"),
    )
    .min(1, "At least one address is required"),
});

const codePattern = refine(string(), "code", (value) => {
  if (!value || value.length === 0) {
    return "Code is required";
  }
  return /^\+\d{2,3}$/.test(value) ? true : "Invalid code. Must be in format +91";
});

const numberPattern = refine(string(), "number", (value) => {
  if (!value || value.length === 0) {
    return "Number is required";
  }
  return /^\d{10}$/.test(value) ? true : "Invalid phone number. Must be 10 digits";
});

const emailPattern = refine(string(), "email", (value) => {
  if (!value || value.length === 0) {
    return "Email is required";
  }
  return value.includes("@") ? true : "Invalid email";
});

const requiredString = refine(string(), "required", (value) => {
  return value && value.length > 0 ? true : "This field is required";
});

const addressPattern = refine(string(), "address", (value) => {
  if (!value || value.length < 3) {
    return "Address must be at least 3 characters";
  }
  if (value.length > 50) {
    return "Address must be at most 50 characters";
  }
  return true;
});

export const ValidationSchemaSuperstruct = object({
  name: requiredString,
  email: emailPattern,
  contacts: size(
    array(
      object({
        code: codePattern,
        number: numberPattern,
      }),
    ),
    1,
  ),
  sex: requiredString,
  message: requiredString,
  addresses: size(array(addressPattern), 1),
});

export const DemoTabs = [
  { name: "Custom", value: DemoTabValues.CUSTOM, schema: ValidationSchema },
  { name: "Yup", value: DemoTabValues.YUP, schema: ValidationSchemaYup },
  { name: "Joi", value: DemoTabValues.JOI, schema: ValidationSchemaJoi },
  { name: "Zod", value: DemoTabValues.ZOD, schema: ValidationSchemaZod },
  { name: "Superstruct", value: DemoTabValues.SUPERSTRUCT, schema: ValidationSchemaSuperstruct },
];
