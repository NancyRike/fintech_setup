import React from "react";
import { useHistory } from "react-router";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const ForgotPassword = () => {
  const history = useHistory();

  const handleSubmit = () => history.push("email-sent");

  return (
    <main className={`${styles.container}`}>
      <form>
        <div>
          <h2 className="text-center fw-bold mb-5">Forgot Password</h2>
          <div>
            <p>We will send you a link to create a new password</p>
            <div>
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <Inputs borderLess id="email" />
              <div className="row align-items-center justify-content-between mt-5">
                <div className="col-12 col-md-3">
                  <Button
                    buttonLabel="Back"
                    outlineButton
                    buttonStyling="w-100 mb-4 mb-md-0"
                  />
                </div>
                <div className="col-12 col-md-3">
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
  );
};

export { ForgotPassword };
