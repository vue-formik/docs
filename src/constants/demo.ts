import * as Yup from "yup";
import Joi from "joi";
import { z } from "zod";

export const DemoTabValues = {
  CUSTOM: 1,
  YUP: 0,
  JOI: 2,
  ZOD: 3,
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
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  contacts: z
    .array(
      z.object({
        code: z
          .string()
          .regex(/^\+\d{2,3}$/, "Invalid code. Must be in format +91")
          .nonempty("Code is required"),
        number: z
          .string()
          .regex(/^\d{10}$/, "Invalid phone number. Must be 10 digits")
          .nonempty("Number is required"),
      }),
    )
    .min(1, "At least one contact is required")
    .nonempty("Contacts are required"),
  sex: z.string().nonempty("Sex is required"),
  message: z.string().nonempty("Message is required"),
  addresses: z
    .array(
      z
        .string()
        .min(3, "Address must be at least 3 characters")
        .max(50, "Address must be at most 50 characters")
        .nonempty("Address is required"),
    )
    .min(1, "At least one address is required")
    .nonempty("Addresses are required"),
});

export const DemoTabs = [
  { name: "Custom", value: DemoTabValues.CUSTOM, schema: ValidationSchema },
  { name: "Yup", value: DemoTabValues.YUP, schema: ValidationSchemaYup },
  { name: "Joi", value: DemoTabValues.JOI, schema: ValidationSchemaJoi },
  { name: "Zod", value: DemoTabValues.ZOD, schema: ValidationSchemaZod },
];
