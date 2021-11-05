import React from "react";
import { Inputs, Button } from "../../../../components";

import styles from "./styles.module.css";

const BankDetails = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Bank Connection</h2>
      <form>
        <p className="mb-4">
          We use your business account balances to determine your credit limit
        </p>
        <div>
          <span className="d-block mb-4">
            <label htmlFor="">Business Account Number</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">
              BVN <span>(of controlling officer)</span>
            </label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Date of Birth</label>
            <Inputs borderLess type="date" />
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

export { BankDetails };
