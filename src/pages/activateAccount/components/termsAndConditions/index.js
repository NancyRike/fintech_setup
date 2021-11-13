import React from "react";
import { useHistory } from "react-router";
import { Checkbox, Button } from "../../../../components";
import styles from "./styles.module.css";

const TermsAndConditions = ({ setCurrentNavItem }) => {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  const handlePrevious = (e) => {
    e.preventDefault();

    setCurrentNavItem((currentNavItem) => {
      return currentNavItem - 1;
    });
  };

  return (
    <div className={`${styles.container}`}>
      <h2>Terms &amp; Conditions</h2>
      <p>
        Welcome to our Terms and Conditions of Use. These terms affect your
        legal rights, endeavor to read them and treat with utmost importance.
      </p>
      <h6>Terms and Conditions</h6>
      <p>
        These terms and conditions ("Terms", "Agreement") are an agreement
        between EVEA Cards ("the Company", "us", "we" or "our") and you ("User",
        "you" or "your"). This Agreement sets forth the general terms and
        conditions of your use of the EVEA web and mobile application and any of
        its products or services (collectively, "Application" or "Services").
      </p>
      <hr />
      <div>
        <Checkbox label="I have read and accepted Evea’s Terms &amp; Conditions." />
        <Checkbox label="I have read and accepted Evea’s Privacy Policy." />
        <Checkbox label="I accept to let Evea to access my bank financial details and use my bank financial data for underwriting" />
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        <Button buttonLabel="Previous" outlineButton onClick={handlePrevious} />
        <Button buttonLabel="Accept" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export { TermsAndConditions };
