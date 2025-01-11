export const CustomValidationObjectExample = `
const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
}
const validationSchema = {
  email: (value: string) => {
    if (!value) {
      return "Email is required";
    }
    if (!isEmail(value)) {
      return "Invalid email";
    }
  },
  password: (value: string) => {
    if (!value) {
      return "Password is required";
    }
    if (value.length < 8) {
      return "Password must be at least 8 characters";
    }
  },
  confirmPassword: (value: string) => {
    if (!value) {
      return "Confirm password is required";
    }
    if (value !== initialValues.password) {
      return "Passwords do not match";
    }
  },
}
`;

export const CustomValidationWithEmailArrayExample = `
const initialValues = {
  email: [""],
}
const validationSchema = {
  email: (values: string[]) => {
    if (!values?.length) {
      return "Email is required";
    }
    const errs = [];
    values.forEach((value, index) => {
      if (!value) {
        errs.push("Email is required");
        return; // Skip further validation
      }
      if (!isEmail(value)) {
        errs.push("Invalid email");
      }
    });
  }
}
`;
