import * as yup from "yup";

export const CreateProjectSchema = yup.object({
  name: yup.string().required("required"),
  ticker: yup.string().required("required"),
  category: yup.string().required("required"),
  website: yup.string().required("required"),
});

export const EditProjectSchema = yup.object({});
