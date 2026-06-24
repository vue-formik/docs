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

export const AsyncValidationExample = `
const initialValues = {
  username: "",
  email: "",
}

const validationSchema = {
  username: async (value: string) => {
    if (!value) {
      return "Username is required";
    }
    // Simulate API call to check if username is taken
    const isAvailable = await checkUsernameAvailability(value);
    if (!isAvailable) {
      return "Username is already taken";
    }
  },
  email: async (value: string) => {
    if (!value) {
      return "Email is required";
    }
    // Simulate API call to validate email
    const isValid = await validateEmailWithAPI(value);
    if (!isValid) {
      return "Invalid email address";
    }
  },
}

const formik = useFormik({
  initialValues,
  validationSchema,
  validateOnMount: true,
})

// The isValidating flag tracks async validation state
console.log(formik.isValidating.value) // true while validating
`;

export const DebounceValidationExample = `
const initialValues = {
  search: "",
  username: "",
}

const validationSchema = {
  search: (value: string) => {
    if (value.length < 3) {
      return "Search must be at least 3 characters";
    }
  },
  username: (value: string) => {
    if (value.length < 4) {
      return "Username must be at least 4 characters";
    }
  },
}

const formik = useFormik({
  initialValues,
  validationSchema,
  validationDebounce: 300, // Wait 300ms after user stops typing
  validateOnChange: true,
})

// With debounce:
// User types "abc..." quickly
// Validation runs only once after 300ms of inactivity
// Prevents excessive validation calls during typing
`;

export const CombinedExample = `
const initialValues = {
  username: "",
  searchTerm: "",
}

const validationSchema = {
  username: async (value: string) => {
    if (!value) {
      return "Username is required";
    }
    if (value.length < 4) {
      return "Username must be at least 4 characters";
    }
    // Async check with API
    const isAvailable = await checkUsernameAvailability(value);
    if (!isAvailable) {
      return "Username is already taken";
    }
  },
  searchTerm: (value: string) => {
    if (value.length < 2) {
      return "Search must be at least 2 characters";
    }
  },
}

const formik = useFormik({
  initialValues,
  validationSchema,
  validationDebounce: 300, // Debounce for 300ms
  validateOnChange: true,
  validateOnMount: false,
})

// Benefits:
// - Debouncing prevents excessive API calls
// - isValidating flag shows loading state
// - Only validates after user stops typing
`;

export const StandardSchemaZodExample = `
import { useFormik } from "vue-formik";
import { z } from "zod"; // zod v3.24+ / v4 implements Standard Schema

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "At least 8 characters"),
});

const formik = useFormik({
  initialValues: { email: "", password: "" },
  // One option for the whole Standard Schema ecosystem
  standardSchema: schema,
  onSubmit: (values) => console.log(values),
});
`;

export const StandardSchemaValibotExample = `
import { useFormik } from "vue-formik";
import * as v from "valibot";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Invalid email")),
  age: v.pipe(v.number(), v.minValue(18, "Must be 18+")),
});

const formik = useFormik({
  initialValues: { email: "", age: 0 },
  standardSchema: schema,
});
`;

export const StandardSchemaCustomExample = `
import type { StandardSchemaV1 } from "vue-formik";

// Standard Schema is just an interface — you can implement it by hand,
// no schema library required.
const schema: StandardSchemaV1<{ name: string }> = {
  "~standard": {
    version: 1,
    vendor: "custom",
    validate(value) {
      const v = value as { name: string };
      if (!v.name) {
        return { issues: [{ message: "Name is required", path: ["name"] }] };
      }
      return { value: v };
    },
  },
};

const formik = useFormik({
  initialValues: { name: "" },
  standardSchema: schema,
});
`;
