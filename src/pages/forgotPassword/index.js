import React from "react";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const ForgotPassword = () => {
  return (
    <main className={`${styles.container} mt-5`}>
      <form>
        <div>
          <h1 className="text-center fw-bold mb-5">Forgot Password</h1>
          <div>
            <p>We will send you a link to create a new password</p>
            <div>
              <label htmlFor="email" className="fw-bold">
                Email
              </label>
              <Inputs borderLess id="email" />
              <div className="d-flex justify-content-between mt-5">
                <Button buttonLabel="Back" outlineButton />
                <Button buttonLabel="Submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export { ForgotPassword };
