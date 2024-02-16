import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Component</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First Name is Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last Name is Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
          terms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions"),
          jobType: Yup.string()
            .required("Job Type is Required")
            .notOneOf(["it-jr"], "Invalid Job Type"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="it-jr">it-jr</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field type="checkbox" name="terms" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
