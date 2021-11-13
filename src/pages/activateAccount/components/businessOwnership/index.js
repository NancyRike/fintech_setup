import React, { useState } from "react";
import { Inputs, Button, RadioButton } from "../../../../components";

import styles from "./styles.module.css";

const BusinessOwnership = ({ setCurrentNavItem }) => {
  const [owned, setOwned] = useState(false);
  const [ownerList, setOwnerList] = useState([0]);

  const handleAddAnother = () => {
    setOwnerList((prevState) => [...prevState, 0]);
  };
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
      <h2>Business Ownership</h2>
      <form>
        <p>Does anyone own 25% or more of Eventbri?</p>
        <p>
          Regulation requires us to collect details for each person who owns
          <br /> 25% or more of a company
        </p>
        <div className="my-4">
          <span className="d-block my-2">
            <RadioButton
              label="Yes, someone owns 25% or more"
              name="owned"
              value="Yes"
              onChange={() => setOwned(true)}
            />
          </span>
          <span className="d-block my-2">
            <RadioButton
              label="No, no one 25% or more"
              name="owned"
              value="no"
              onChange={() => setOwned(false)}
            />
          </span>
        </div>

        {owned ? (
          <div>
            <h6>Owner information</h6>
            <p>
              Enter the information for each person who owns at least 25% of
              Eventbri.
            </p>
            {owned
              ? ownerList.map((_, index) => (
                  <div key={index}>
                    <span className="d-block mb-4">
                      <label htmlFor="">Job Title</label>
                      <Inputs borderLess />
                    </span>
                    <span className="d-block mb-4">
                      <label htmlFor="">Phone Number</label>
                      <Inputs borderLess type="phone" />
                    </span>
                  </div>
                ))
              : ""}
            <div className="mt-2 mb-5">
              <p className={`${styles["add-another"]} fw-bold`}>
                + <span onClick={handleAddAnother}>Add another owner</span>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex flex-wrap justify-content-between">
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

export { BusinessOwnership };
