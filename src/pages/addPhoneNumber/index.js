import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Inputs, Button, Loader } from "../../components";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import styles from "./styles.module.css";

const AddPhoneNumber = () => {
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
      history.push("./verify-phonenumber");
    }, 3000);
  };
  return (
    <div>
      {load ? <Loader /> : ""}
      <main className={`${styles.container}`}>
        <Formik
          initialValues={{
            phoneNumber: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={AddPhoneNumberSchema}
        >
          {(props) => {
            return (
              <form>
                <div>
                  <h2 className="text-center fw-bold mb-5">
                    Verify Phone Number
                  </h2>
                  <div>
                    <p>
                      Please verify your phone number to start account
                      activation
                    </p>
                    <div>
                      <label htmlFor="phoneNumber" className="fw-bold">
                        Phone number
                      </label>
                      <Inputs
                        borderLess
                        id="phoneNumber"
                        value={props.values.phoneNumber}
                        error={
                          props.touched.phoneNumber && props.errors.phoneNumber
                            ? props.errors.phoneNumber
                            : ""
                        }
                        onChange={props.handleChange("phoneNumber")}
                      />
                      <div className="container">
                        <div className="row mt-5 justify-content-end">
                          <div className="col-12 col-md-3 p-0">
                            <Button
                              buttonLabel="Submit"
                              onClick={props.handleSubmit}
                              buttonStyling="w-100"
                            />
                          </div>
                        </div>
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

export { AddPhoneNumber };

const AddPhoneNumberSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test("test number", "Invalid phone number", (value) => {
      return /^\+234[0-9]{10}$|^0[0-9]{10}$/.test(value);
    }),
});
