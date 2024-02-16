import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyTextInput, MySelect, MyCheckBox } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

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
          // @ts-ignore
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Name"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="jonh@google.com"
            />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="it-jr">it-jr</option>
              <option value="other">Other</option>
            </MySelect>

            <MyCheckBox label="Terms & Condition" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
