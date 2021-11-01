import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { logo, success } from "../../assets";
import { Button, Loader } from "../../components";

import styles from "./styles.module.css";

const EmailVerificationSuccess = () => {
  const [load, setLoad] = useState(true);

  const history = useHistory();

  const handleContinue = () => history.push("add-phonenumber");

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <div>
      {load ? <Loader /> : ""}
      <main className={`${styles.container}`}>
        <div className={`${styles.bodyContent}`}>
          <div className="text-center">
            <div
              className={`${styles.successGif} d-flex justify-content-center align-items-center m-auto bg-white`}
            >
              <img src={success} alt="successful!" />
            </div>
            <h1 className="text-center fw-bold mt-2 mb-3">
              Verification Successful
            </h1>
            <div>
              <p>
                Your email was successfully verified. You’ll be automatically
                redirected to the Dashboard in 5 seconds or click the button
                below.
              </p>
              <div>
                <div className="d-flex justify-content-center mt-4">
                  <Button buttonLabel="Continue" onClick={handleContinue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { EmailVerificationSuccess };
