import React, { useState } from "react";
import { useHistory } from "react-router";
import { Inputs, Button, Loader, ValidationMessage } from "../../components";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./styles.module.css";

const SignIn = () => {
  const history = useHistory();

  const [load, setLoad] = useState(false);

  const handleFormSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      alert("Login Successful!!");
    }, 3000);
  };

  return (
    <main className={`${styles.container} container pb-5`}>
      {load ? <Loader /> : ""}
      <div className={`${styles.formContainer} px-1 px-md-5  ms-lg-auto`}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, touched, errors }) => {
            return (
              <form onSubmit={handleSubmit}>
                <div className="py-4">
                  <h2 className="fw-bold">Sign Into Your Evea Account</h2>
                  <div className="mt-5">
                    {touched.email &&
                    errors.email &&
                    touched.password &&
                    errors.password ? (
                      <ValidationMessage error={"Invalid Credentials"} />
                    ) : (
                      ""
                    )}
                    <div>
                      <span className="my-3 d-block">
                        <label htmlFor="email" className="fw-bold">
                          Email Address
                        </label>
                        <Inputs
                          borderLess
                          id="email"
                          name="email"
                          onChange={handleChange}
                        />
                      </span>
                      <span className="my-3 d-block">
                        <label htmlFor="password" className="fw-bold">
                          Password
                        </label>
                        <Inputs
                          borderLess
                          id="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </span>
                      <span
                        className={`${styles.highlight} d-block text-end`}
                        onClick={() => history.push("/forgot-password")}
                      >
                        Forgot password?
                      </span>
                      <div
                        className={`${styles.footer} d-flex justify-content-between align-items-end`}
                      >
                        <p>
                          Don't have an account?{" "}
                          <span
                            className={`${styles.highlight}`}
                            onClick={() => history.push("/create-account")}
                          >
                            Sign up
                          </span>
                        </p>
                        <Button buttonLabel="Submit" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </main>
  );
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(8, "Password must be greater than 8")
    .required("Email is Required"),
  password: yup.string().min(10).required("Password is required"),
});

const initialValues = { email: "", password: "" };

export { SignIn };
