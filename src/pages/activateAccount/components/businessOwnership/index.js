import React from "react";
import { Inputs, Button, RadioButton } from "../../../../components";

import styles from "./styles.module.css";

const BusinessOwnership = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Business Ownership</h2>
      <form>
        <p>Does anyone own 25% or more of Eventbri?</p>
        <p>
          Regulation requires us to collect details for each person who owns
          <br /> 25% or more of a company
        </p>
        <div className="my-4">
          <span className="d-block my-2">
            <RadioButton label="Yes, someone owns 25% or more" />
          </span>
          <span className="d-block my-2">
            <RadioButton label="No, no one 25% or more" />
          </span>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <Button buttonLabel="Previous" outlineButton />
          <Button buttonLabel="Submit" />
        </div>
      </form>
    </div>
  );
};

export { BusinessOwnership };
