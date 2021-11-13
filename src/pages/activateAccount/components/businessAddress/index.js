import React from "react";
import { Inputs, Button, Dropdown, FIleUpload } from "../../../../components";

import styles from "./styles.module.css";

const BusinessAddress = ({ setCurrentNavItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentNavItem((currentNavItem) => {
      return currentNavItem + 1;
    });
  };

  const handlePrevious = (e) => {
    e.preventDefault();

    setCurrentNavItem((currentNavItem) => {
      return currentNavItem - 1;
    });
  };
  return (
    <div className={`${styles.container}`}>
      <h2>Business Address</h2>
      <form>
        <div>
          <span className="d-block mb-4">
            <label htmlFor="">Business Address</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Apartment, Unit, Floor</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">City</label>
            <Inputs borderLess />
          </span>
          <div className="d-flex">
            <span className="w-100 mb-4 me-3">
              <label htmlFor="">State/Region</label>
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
            <span className="w-100 mb-4">
              <label htmlFor="">Country</label>
              <Dropdown
                placeHolder="Select item"
                items={["1-4", "5-10", "11-20", "21-50", "51-100"]}
              />
            </span>
          </div>
          <div>
            <label htmlFor="">
              Upload Utility Bill of The Business Enterprise
            </label>
            <FIleUpload />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between mt-3">
          <Button
            buttonLabel="Previous"
            outlineButton
            onClick={handlePrevious}
          />
          <Button buttonLabel="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export { BusinessAddress };
