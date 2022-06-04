import * as yup from "yup";

const feedbackSchema = yup.object({
  title: yup
    .string()
    .required("Email is a required field")
    .min(4, "Too short")
    .max(50, "50 characters is the max"),
  description: yup
    .string()
    .min(8, "Too short")
    .max(200, "200 characters is the max"),
});

export default feedbackSchema;
