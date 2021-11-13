import React, { useState } from "react";
import { useHistory } from "react-router";
import { EyeClose, EyeOpen } from "../../assets";
import { Inputs, Button, Loader } from "../../components";

import { Formik } from "formik";
import * as yup from "yup";

import styles from "./styles.module.css";

const CreateAccount = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [load, setLoad] = useState(false);

  const history = useHistory();

  const handleFormSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      history.push("/verify-email");
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
                  <h2 className="fw-bold">Create Your Evea Account</h2>
                  <p>
                    What do I need to{" "}
                    <span
                      className={`${styles.highlight}`}
                      onClick={() => history.push("/get-started")}
                    >
                      get started
                    </span>
                    ?
                  </p>
                  <div className="mt-5">
                    <div>
                      <div className="row my-3">
                        <span className="col-12 col-md-6 mb-3 mb-md-0">
                          <label htmlFor="firstName" className="fw-bold">
                            First Name
                          </label>
                          <Inputs
                            autoComplete="off"
                            borderLess
                            id="firstName"
                            name="firstName"
                            onChange={handleChange}
                            error={
                              touched.firstName && errors.firstName
                                ? errors.firstName
                                : ""
                            }
                          />
                        </span>
                        <span className="col-12 col-md-6">
                          <label htmlFor="lastName" className="fw-bold">
                            Last Name
                          </label>
                          <Inputs
                            autoComplete="off"
                            borderLess
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                            error={
                              touched.lastName && errors.lastName
                                ? errors.lastName
                                : ""
                            }
                          />
                        </span>
                      </div>
                      <span className="my-3 d-block">
                        <label htmlFor="email" className="fw-bold">
                          Email Address
                        </label>
                        <Inputs
                          autoComplete="off"
                          borderLess
                          id="email"
                          name="email"
                          onChange={handleChange}
                          error={
                            touched.email && errors.email ? errors.email : ""
                          }
                        />
                      </span>
                      <span className="my-3 d-block">
                        <label htmlFor="phone" className="fw-bold">
                          Phone Number
                        </label>
                        <Inputs
                          autoComplete="off"
                          borderLess
                          id="phone"
                          name="phone"
                          onChange={handleChange}
                          error={
                            touched.phone && errors.phone ? errors.phone : ""
                          }
                        />
                      </span>
                      <span className="my-3 d-block">
                        <label htmlFor="password" className="fw-bold">
                          Password
                        </label>
                        <Inputs
                          autoComplete="off"
                          borderLess
                          id="password"
                          Icon2={
                            <div onClick={() => setNewPassword(!newPassword)}>
                              {!newPassword ? <EyeOpen /> : <EyeClose />}
                            </div>
                          }
                          type={newPassword ? "text" : "password"}
                          name="password"
                          onChange={handleChange}
                          error={
                            touched.password && errors.password
                              ? errors.password
                              : ""
                          }
                        />
                      </span>
                      <span className="my-3 d-block">
                        <label htmlFor="aboutUs" className="fw-bold">
                          How Did You Hear About Us?
                        </label>
                        <Inputs
                          autoComplete="off"
                          borderLess
                          id="aboutUs"
                          name="aboutUs"
                          onChange={handleChange}
                          error={
                            touched.aboutUs && errors.aboutUs
                              ? errors.aboutUs
                              : ""
                          }
                        />
                      </span>
                      <span className="my-3 d-block">
                        <label htmlFor="referral" className="fw-bold">
                          Referral Code (Optional)
                        </label>
                        <Inputs
                          autoComplete="off"
                          borderLess
                          id="referral"
                          name="referral"
                          onChange={handleChange}
                        />
                      </span>
                      <div className="d-flex justify-content-between align-items-end mt-5">
                        <p>
                          Have an account?{" "}
                          <span
                            className={`${styles.highlight}`}
                            onClick={() => history.push("/sign-in")}
                          >
                            Sign in
                          </span>
                        </p>
                        <Button buttonLabel="Submit" onClick={handleSubmit} />
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
  firstName: yup.string().required("Firstname is Required"),
  lastName: yup.string().required("Lastname is Required"),
  email: yup
    .string()
    .email("Not valid email")
    .min(8, "Password must be greater than 8")
    .required("Email is Required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("test number", "Invalid phone number", (value) => {
      return /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value);
    }),
  password: yup.string().min(10).required("Password is required"),
  aboutUs: yup.string().required("Required"),
  referral: yup.string(),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  aboutUs: "",
  referral: "",
};

export { CreateAccount };
