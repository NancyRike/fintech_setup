import React from "react";
import { Inputs, Button, Dropdown } from "../../../../components";

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
          <span className="d-block mb-4">
            <label htmlFor="">Funding Source(Optional)</label>
            <Dropdown
              placeHolder="Select item"
              items={[
                "Venture Capital/ Angel Investor/Accelerator",
                "Crowdsourced",
                "Initial Coin Offering",
                "Family",
                "Self-funded",
              ]}
            />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Estimated Employee Count</label>
            <Dropdown
              placeHolder="Select item"
              items={["1-4", "5-10", "11-20", "21-50", "51-100"]}
            />
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
