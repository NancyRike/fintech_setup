import React from "react";
import { Inputs, Button } from "../../../../components";

import styles from "./styles.module.css";

const CompanyInfo = () => {
  return (
    <div className={`${styles.container}`}>
      <h2>Company Info</h2>
      <form>
        <div>
          <span className="d-block mb-4">
            <label htmlFor="">Legal Company Name</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Company Website</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Company Type</label>
            <Inputs borderLess />
          </span>
        </div>
        <div className="d-flex flex-wrap justify-content-end">
          <Button buttonLabel="Submit" />
        </div>
      </form>
    </div>
  );
};

export { CompanyInfo };
