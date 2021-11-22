import React from "react";
import { Close } from "../../../../assets";
import { Inputs, Dropdown, Button } from "../../../../components";

import styles from "./styles.module.css";

const MakePaymentModal = ({ closeModal }) => {
  return (
    <div className={`${styles.container} d-flex`}>
      <Close onClick={closeModal} className={`${styles.close}`} />
      <div className={`${styles.colA} p-5 `}>
        <h1 className="mt-3 mb-4">Make a card payment</h1>
        <div className="my-4">
          <h2>Current Balance vs Credit Limit</h2>
          <h3>
            <span>73,500.00</span>
            <span>/500,000.00</span>
          </h3>
        </div>
        <div className="my-4">
          <h2>Available Credit</h2>
          <h3>
            <span>426,500.00</span>
          </h3>
        </div>
        <div className="my-4">
          <h2>Payment Due</h2>
          <h3>
            <span>FRI, Nov 29, 2021</span>
          </h3>
        </div>
        <div className={`${styles.footerText}`}>
          <p>For Schedule Payment</p>
        </div>
      </div>
      <div
        className={`${styles.colB} d-flex justify-content-center align-items-center w-100 px-5`}
      >
        <div className="w-100 mx-5 px-2">
          <span className="mb-4 d-block">
            <label htmlFor="password">Payment Amount</label>
            <Dropdown
              placeHolder="Select Amount"
              items={[
                "Full Amount (73,500.00)",
                "Minimum Payment(29, 400.00)",
                "Enter Amount",
              ]}
            />
          </span>
          <span className="mb-4 d-block w-100">
            <label htmlFor="scheduleDate">Payment Date</label>
            <Inputs
              autoComplete="off"
              borderLess
              className="w-100"
              id="paymentDate"
              type="date"
            />
          </span>
          <div className={`${styles.footerText} d-flex align-items-center`}>
            <p>Payment Total: 73,500.00</p>
            <Button buttonLabel="Make Payment" buttonStyling="ms-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MakePaymentModal };
