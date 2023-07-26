import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./personal-info.css";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

const onSubmit = (values) => {
  console.log("Formik Content:", values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (
    !/^[+]?[0-9]{1,3}\s[0-9]{1,3}\s[0-9]{1,3}\s[0-9]{1,3}\s[0-9]{1,3}$/i.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "Invalid phone number";
  }

  return errors;
};

export default function PersonalInfo() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validate}
    >
      <div>
        <div className="page-01-text">
          <h4>Personal Info</h4>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Stephen King"
              required
            />
            <ErrorMessage name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="e.g. stephenking@lorem.com"
              required
            />
            <ErrorMessage name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <Field
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g. +1 234 567 890"
              required
            />
            <ErrorMessage name="phoneNumber" />
          </div>
        </Form>
      </div>
    </Formik>
  );
}
