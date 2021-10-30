import React from "react";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const SignIn = () => {
  return (
    <main className={`${styles.container} container pb-5`}>
      <div className={`${styles.formContainer} px-1 px-md-5  ms-lg-auto`}>
        <form>
          <div className="py-4">
            <h2 className="fw-bold">Sign Into Your Evea Account</h2>
            <div className="mt-5">
              <div>
                <span className="my-3 d-block">
                  <label htmlFor="email" className="fw-bold">
                    Email Address
                  </label>
                  <Inputs borderLess id="email" />
                </span>
                <span className="my-3 d-block">
                  <label htmlFor="password" className="fw-bold">
                    Password
                  </label>
                  <Inputs borderLess id="password" />
                </span>
                <span className={`${styles.highlight} d-block text-end`}>
                  Forgot password?
                </span>
                <div
                  className={`${styles.footer} d-flex justify-content-between align-items-end`}
                >
                  <p>
                    Don't have an account?{" "}
                    <span className={`${styles.highlight}`}>Sign up</span>
                  </p>
                  <Button buttonLabel="Submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export { SignIn };
