import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterForminkPage = () => {
  return (
    <div>
      <h1>Register Formink Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(2, "Must be 3 characters or more")
            .max(15, "Must be 15 characters or less")
            .required("First Name is Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
          password1: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is Required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must match")
            .required("Password is Required"),
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
              label="Email"
              name="email"
              type="email"
              placeholder="jonh@google.com"
            />

            <MyTextInput
              label="Password1"
              name="password1"
              type="password"
              placeholder="xxxxxx"
            />

            <MyTextInput
              label="Password2"
              name="password2"
              type="password"
              placeholder="xxxxxx"
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
