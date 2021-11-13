import React from "react";
import { Inputs, Button, Dropdown, FIleUpload } from "../../../../components";

import styles from "./styles.module.css";

const BusinessDetails = ({ setCurrentNavItem }) => {
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
      <h2>Business Details</h2>
      <form>
        <div>
          <span className="d-block mb-4">
            <label htmlFor="">RC Number</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Business TIN</label>
            <Inputs borderLess />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Business Type</label>
            <Dropdown
              placeHolder="Select item"
              items={[
                "Sole Proprietorship",
                "Private Limited Company(Ltd,)",
                "Public Limited Company(Plc,)",
                "Public Company Limited by Guarantee (ULtd,)",
                "Private Unlimited Company",
              ]}
            />
          </span>
          <div className="d-flex">
            <span className="w-100 mb-4 me-3">
              <label htmlFor="">Incorporation Year</label>
              <Dropdown placeHolder="Select item" />
            </span>
            <span className="w-100 mb-4">
              <label htmlFor="">Incorporation State</label>
              <Dropdown placeHolder="Select item" />
            </span>
          </div>
          <span className="d-block mb-4">
            <label htmlFor="">Monthly Business Spend</label>
            <Dropdown
              placeHolder="Select item"
              items={[
                "	\u20A60 - 	\u20A6100,000",
                "	\u20A6100,000 - 	\u20A6500,000",
                "	\u20A6500,001 - 	\u20A61,000,000",
                "	\u20A61,000,001 - 	\u20A65,000,000",
                "	\u20A65,000,000+",
              ]}
            />
          </span>
          <span className="d-block mb-4">
            <label htmlFor="">Business Activity</label>
            <Inputs borderLess />
          </span>
          <div className="mb-4">
            <label htmlFor="">Upload CAC certificate</label>
            <FIleUpload />
          </div>
          <div className="mb-4">
            <label htmlFor="">Upload Form CAC 2</label>
            <FIleUpload />
          </div>
          <div className="mb-4">
            <label htmlFor="">Upload Form CAC 7</label>
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

export { BusinessDetails };
