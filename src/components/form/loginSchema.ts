import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Not an Email")
    .required("Email is a required field")
    .min(8, "Too short"),
  password: yup.string().required("Password is required").min(8, "Too short"),
});

export default loginSchema;
