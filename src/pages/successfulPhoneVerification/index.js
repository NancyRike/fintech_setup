import React, {useEffect, useState} from "react";
import { logo } from "../../assets";
import { Button, Loader } from "../../components";

import styles from "./styles.module.css";

const PhoneVerificationSuccess = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <div>
      {load? <Loader/>: ""}
      <main className={`${styles.container}`}>
        <div className={`${styles.bodyContent}`}>
          <div className="text-center">
            <div className= {`${ styles.successGif } d-flex justify-content-center align-items-center m-auto bg-white`}>
              <img src={logo} alt =""/>
            </div>
            <h1 className="text-center fw-bold mb-3">Verification Successful</h1>
            <div>
              <p>Your phone number was successfully verified. You’ll be automatically redirected to the next step in 5 seconds or click the button below.</p>
              <div>
                <div className="d-flex justify-content-center mt-4">
                  <Button buttonLabel="Continue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhoneVerificationSuccess;
