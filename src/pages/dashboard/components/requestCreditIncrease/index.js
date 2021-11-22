import React from "react";
import { CancelIcon } from "../../../../assets";
import { Inputs, TextArea, Button } from "../../../../components";
import styles from "./styles.module.css";

const RequestCreditIncrease = ({ setDisplayModal }) => {
  const handleClose = () => {
    setDisplayModal({
      visibility: false,
    });
  };
  return (
    <main className={`${styles.creditContainer} py-5 px-4`}>
      <div className={`d-flex justify-content-between align-items-center mb-4`}>
        <div>
          <h3>Request Credit Increase</h3>
        </div>
        <div onClick={handleClose} className={`${styles.cancelButton}`}>
          <CancelIcon />
        </div>
      </div>
      <div>
        <h6 className={`mb-1`}>
          What would you like to increase your credit line to?
        </h6>
        <p>
          Increase requests can be submitted once every 90 days. Please keep in
          mind that requests to increase credit are reviewed by Evea and we may
          need additional information. If this is the case with your account, we
          will contact you via email.
        </p>
      </div>
      <form action="">
        <div className={`row`}>
          <div className={`col-md-6`}>
            <Inputs borderLess={true} placeHolder="Current Credit Limit" />
          </div>
          <div className={`col-md-6`}>
            <Inputs borderLess={true} placeHolder="Enter Desired Limit" />
          </div>
          <div className={`my-3`}>
            <TextArea rows="2" placeholder="Reason for Increase" />
          </div>
        </div>
        <div className={`d-flex align-items-center justify-content-end`}>
          {/* <div> */}
          <Button
            buttonLabel="Cancel"
            outlineButton={true}
            buttonStyling="mr-2"
          />
          <Button buttonLabel="Submit Request" buttonStyling={`ml-2`} />
          {/* </div> */}
        </div>
      </form>
    </main>
  );
};

export { RequestCreditIncrease };
