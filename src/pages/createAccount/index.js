import React, { useState } from "react";
import { useHistory } from "react-router";
import { EyeOpen } from "../../assets";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const CreateAccount = () => {
  const [newPassword, setNewPassword] = useState(false);

  const history = useHistory();

  return (
    <main className={`${styles.container} container pb-5`}>
      <div className={`${styles.formContainer} px-1 px-md-5  ms-lg-auto`}>
        <form>
          <div className="py-4">
            <h2 className="fw-bold">Create Your Evea Account</h2>
            <p>
              What do I need to{" "}
              <span className={`${styles.highlight}`}>get started</span>?
            </p>
            <div className="mt-5">
              <div>
                <div className="row my-3">
                  <span className="col-12 col-md-6 mb-3 mb-md-0">
                    <label htmlFor="firstName" className="fw-bold">
                      First Name
                    </label>
                    <Inputs borderLess id="firstName" />
                  </span>
                  <span className="col-12 col-md-6">
                    <label htmlFor="lastName" className="fw-bold">
                      Last Name
                    </label>
                    <Inputs borderLess id="lastName" />
                  </span>
                </div>
                <span className="my-3 d-block">
                  <label htmlFor="email" className="fw-bold">
                    Email Address
                  </label>
                  <Inputs borderLess id="email" />
                </span>
                <span className="my-3 d-block">
                  <label htmlFor="phone" className="fw-bold">
                    Phone Number
                  </label>
                  <Inputs borderLess id="phone" />
                </span>
                <span className="my-3 d-block">
                  <label htmlFor="password" className="fw-bold">
                    Password
                  </label>
                  <Inputs borderLess id="password" Icon2={<EyeOpen />} />
                </span>
                <span className="my-3 d-block">
                  <label htmlFor="aboutUs" className="fw-bold">
                    How Did You Hear About Us?
                  </label>
                  <Inputs borderLess id="aboutUs" />
                </span>
                <span className="my-3 d-block">
                  <label htmlFor="referral" className="fw-bold">
                    Referral Code (Optional)
                  </label>
                  <Inputs borderLess id="referral" />
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

export { CreateAccount };
