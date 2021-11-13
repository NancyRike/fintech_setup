import React, { useState } from "react";
import { Info } from "../../../../assets";
import {
  Inputs,
  Button,
  RadioButton,
  Dropdown,
  FIleUpload,
  Checkbox,
} from "../../../../components";

import styles from "./styles.module.css";

const BusinessLeadership = () => {
  const [controllingOfficer, setControllingOfficer] = useState(false);

  return (
    <div className={`${styles.container}`}>
      <h2>Business Leadership</h2>
      <form>
        <div className="my-5">
          <div className={`${styles.info} py-2 px-3 mb-4`}>
            <Info />
            <span>A controlling officer must be a C-suite execuite</span>
          </div>
          <label htmlFor="" className="mb-3">
            Are you a controlling officer at your company?
          </label>
          <Checkbox
            label="Yes, I am a controlling officer"
            value={controllingOfficer}
            onChange={() => setControllingOfficer(!controllingOfficer)}
          />
        </div>
        {controllingOfficer ? (
          <div>
            <h6>Controlling officer information</h6>
            <p>
              Federal law requires us to collect information for a controlling
              officer in your company.
            </p>
            <span className="d-block mb-4">
              <label htmlFor="">Job Title</label>
              <Dropdown
                placeHolder="Select item"
                items={[
                  "Chief Executive Officer (CEO)",
                  "Chief Financial Officer (CFO)",
                  "Founder / Co-Founder",
                  "Chief Operating Officer (COO)",
                  "Other",
                ]}
              />
            </span>
            <span className="d-block mb-4">
              <label htmlFor="">Phone Number</label>
              <Inputs borderLess />
            </span>
            <span className="d-block mb-4">
              <label htmlFor="">ID Type</label>
              <Dropdown
                placeHolder="Select item"
                items={[
                  "National Identification (NIMC)",
                  "Drivers License",
                  "International Passport",
                  "Voter's Card",
                ]}
              />
            </span>
            <span className="d-block mb-4">
              <label htmlFor="">ID Number</label>
              <Inputs borderLess />
            </span>
            <div className="mb-4">
              <label htmlFor="">Upload valid ID of controlling officer</label>
              <FIleUpload />
            </div>
            <div className="mb-4">
              <label htmlFor="">Upload company ID of controlling officer</label>
              <FIleUpload />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex flex-wrap justify-content-between">
          <Button buttonLabel="Previous" outlineButton />
          <Button buttonLabel="Submit" />
        </div>
      </form>
    </div>
  );
};

export { BusinessLeadership };
