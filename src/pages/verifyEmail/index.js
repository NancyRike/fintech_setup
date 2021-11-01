import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import { Inputs, Button, Loader } from "../../components";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";

const VerifyEmail = () => {
  const history = useHistory();

  const [load, setLoad] = useState(true);
  const handleOnSubmit = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
      history.push("./email-verification-success");
    }, 3000);
  };
  const { values, errors, handleSubmit, handleChange, touched } = useFormik({
    initialValues: {
      verificationCode: "",
    },
    onSubmit: handleOnSubmit,
    validationSchema: VerifyMailSchema,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <div>
      {load ? <Loader /> : ""}
      <main className={`${styles.container}`}>
        <form>
          <div>
            <h2 className="text-center fw-bold mb-5">Verify Email Address</h2>
            <div>
              <p>
                Type in the verification code sent to
                <b className={`${styles.textHighlight}`}> email@example.com</b>
              </p>
              <div>
                <label htmlFor="verificationCode" className="fw-bold">
                  Verification code
                </label>
                <Inputs
                  value={values.verificationCode}
                  type={"text"}
                  onChange={handleChange("verificationCode")}
                  error={
                    touched.verificationCode && errors.verificationCode
                      ? errors.verificationCode
                      : ""
                  }
                  borderLess
                  id="verificationCode"
                />
                <small>
                  Didn’t receive the code?
                  <b className={`${styles.textHighlight}`}> Resend </b>
                </small>
                <div className="row mt-5 justify-content-end ">
                  <div className="col-12 col-md-3 p-0">
                    <Button
                      buttonLabel="Submit"
                      onClick={handleSubmit}
                      buttonStyling="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export { VerifyEmail };

const VerifyMailSchema = yup.object().shape({
  verificationCode: yup
    .number("mkdmkfdkm")
    .required("verification number is required"),
});
