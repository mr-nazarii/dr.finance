import * as yup from "yup";

const registerSchema = yup.object({
  firstname: yup.string().required("Name is required"),
  lastname: yup.string().required("Surname is required"),
  email: yup
    .string()
    .email("Not an Email")
    .required("Email is a required field")
    .min(8, "Too short"),
  password: yup.string().required("Password is required").min(8, "Too short"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default registerSchema;
