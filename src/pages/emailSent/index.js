import React from "react";
import { emailSent } from "../../assets";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const EmailSent = () => {
  return (
    <main className={`${styles.container} mt-5`}>
      <div className="d-flex flex-column align-items-center">
        <img src={emailSent} alt="email-sent" />
        <h3 className="text-center fw-bold mt-2 mb-3">Email Sent</h3>
        <div>
          <p className="text-center">
            If the email you entered is associated with an Evea account, you
            should <br />
            receive a link to create a new password shortly.
          </p>
          <div className="text-center mt-4">
            <Button buttonLabel="Done" />
          </div>
        </div>
      </div>
    </main>
  );
};

export { EmailSent };
