import * as Yup from "yup";

export const DemoTabValues = {
  CUSTOM: 1,
  YUP: 0,
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
      const err = {
        code: "",
        number: "",
      };

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

      errs[i] = err;
    }

    return errs.length ? errs : undefined;
  },
  addresses: (value: string[]) => {
    if (value.length === 0) {
      return "Address is required";
    }
    console.log(value);

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

export const DemoTabs = [
  { name: "Custom", value: DemoTabValues.CUSTOM, schema: ValidationSchema },
  { name: "Yup", value: DemoTabValues.YUP, schema: ValidationSchemaYup },
];
