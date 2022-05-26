import * as yup from "yup";

const loginSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
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

export default loginSchema;
