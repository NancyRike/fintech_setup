import { Formik } from "formik";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import { Inputs, Button, Loader } from "../../components";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";

const VerifyPhoneNumber = () => {
  const history = useHistory();

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  const handleSubmit = () => {
    setLoad(true);    
      setTimeout(() => {
        setLoad(false);
        history.push("./phone-verification-success");
      }, 3000);
    
  };
  return (
    <div>
     {load ? <Loader /> : ""}
      <main className={`${styles.container}`}>
        <Formik
          initialValues={{
            verificationCode: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={VerifyPhoneSchema}
        >
          {(props) => {
            return (
        <form>
          <div>
            <h1 className="text-center fw-bold mb-5">Verify Phone Number</h1>
            <div>
              <p>
                Type in the verification code sent to <b className={`${styles.textHighlight}`}>+2348012345678</b>
              </p>
              <div>
                <label htmlFor="verificationCode" className="fw-bold">
                  Verification code
                </label>
                <Inputs borderLess id="verificationCode" value={props.values.verificationCode}
                        type={"text"}
                        onChange={props.handleChange("verificationCode")}
                        error={props.errors.verificationCode}/>
                <small>
                  Didn’t receive the code?
                  <b className={`${styles.textHighlight}`}> Resend </b>
                </small>
                <div className="d-flex justify-content-end mt-5">
                        <Button buttonLabel="Submit" onClick={props.handleSubmit} />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </main>
    </div>
  );
};

export default VerifyPhoneNumber;

export const VerifyPhoneSchema = yup.object().shape({
  verificationCode: yup.number().required("verification number is required"),
});