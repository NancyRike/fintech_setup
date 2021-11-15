import React, { useState } from "react";
import { Close, EyeClose, EyeOpen } from "../../../../assets";
import { Inputs, Dropdown, Button } from "../../../../components";

import styles from "./styles.module.css";

const PaymentScheduleModal = ({ closeModal }) => {
  const [newPassword, setNewPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={`${styles.container} pt-2 pb-5`}>
      <div className={`${styles.header} px-3 py-2`}>
        <h1 className="">Set Up Payment Schedule</h1>
        <Close onClick={closeModal} />
      </div>
      <div className={`${styles.tabs} d-flex justify-content-between mb-4`}>
        <div
          className={`${
            activeTab === 0 ? styles.active : ""
          } py-3 text-center w-100`}
          onClick={() => setActiveTab(0)}
        >
          One-time Payment
        </div>
        <div
          className={`${
            activeTab === 1 ? styles.active : ""
          } ms-2 py-3 text-center w-100`}
          onClick={() => setActiveTab(1)}
        >
          Recurring Payments
        </div>
      </div>
      <div className="px-3">
        <div className="d-flex  justify-content-between">
          <span className="mb-4 d-block w-100 me-3">
            <label htmlFor="paymentAmout">Payment Amount</label>
            <Inputs
              autoComplete="off"
              borderLess
              className="w-100"
              id="paymentAmount"
              type="text"
            />
          </span>
          <span className="mb-4 d-block w-100 ms-3">
            <label htmlFor="scheduleDate">Schedule Date</label>
            <Inputs
              autoComplete="off"
              borderLess
              className="w-100"
              id="scheduleDate"
              type="date"
            />
          </span>
        </div>
        <span className="mb-4 d-block">
          <label htmlFor="password">Payment Card</label>
          <Dropdown
            placeHolder="Select Payment Card"
            items={["**** **** **** 1234", "Add Bank Card"]}
          />
        </span>
        <span className="mb-4 d-block">
          <label htmlFor="password">Password</label>
          <Inputs
            autoComplete="off"
            borderLess
            id="password"
            Icon2={
              <div onClick={() => setNewPassword(!newPassword)}>
                {!newPassword ? <EyeOpen /> : <EyeClose />}
              </div>
            }
            type={newPassword ? "text" : "password"}
            name="password"
          />
        </span>
        <div>
          <Button
            buttonLabel="Confirm"
            buttonStyling="w-100"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export { PaymentScheduleModal };
