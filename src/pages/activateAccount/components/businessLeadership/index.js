import React from "react";
import { Inputs, Button, RadioButton } from "../../../../components";

import styles from "./styles.module.css";

const BusinessLeadership = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Business Leadership</h2>
      <form>
        <div className="my-5">
          <label htmlFor="" className="mb-3">
            Are you a controlling officer at your company?
          </label>
          <RadioButton label="Yes, I am a controlling officer" />
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <Button buttonLabel="Previous" outlineButton />
          <Button buttonLabel="Submit" />
        </div>
      </form>
    </div>
  );
};

export { BusinessLeadership };
