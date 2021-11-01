import React from "react";
import { emailSent } from "../../assets";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const EmailSent = () => {
  return (
    <main className={`${styles.container}`}>
      <div className="d-flex flex-column align-items-center">
        <img src={emailSent} alt="email-sent" />
        <h2 className="text-center fw-bold mt-2 mb-3">Email Sent</h2>
        <div>
          <p className="text-center">
            If the email you entered is associated with an Evea account, you
            should <br />
            receive a link to create a new password shortly.
          </p>
          <div className="container">
            <div className="row mt-5 justify-content-center ">
              <div className="col-12 col-md-4 p-0">
                <Button buttonLabel="Continue" buttonStyling="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { EmailSent };
