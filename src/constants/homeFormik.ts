import * as Yup from "yup";

const InitialValues: {
  name: string;
  email: string;
  phone: string;
  sex: string;
  message: string;
  addresses: string[];
} = {
  name: "",
  email: "",
  phone: "",
  sex: "",
  message: "",
  addresses: [""],
};

const ValidationSchema = {
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
  phone: (value: string) => {
    if (!value) {
      return "Phone is required";
    }
    if (!/^\d{10}$/.test(value)) {
      return "Invalid phone number. Must be 10 digits";
    }
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
    console.log(errs);

    return errs.length ? errs : undefined;
  },
};

const ValidationSchemaYup = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone number. Must be 10 digits")
    .required("Phone is required"),
  addresses: Yup.array()
    .of(
      Yup.string()
        .min(3, "Address must be at least 3 characters")
        .max(50, "Address must be at most 50 characters"),
    )
    .min(1, "Address is required")
    .max(3, "You can add up to 3 addresses"),
});

export { InitialValues, ValidationSchema, ValidationSchemaYup };
