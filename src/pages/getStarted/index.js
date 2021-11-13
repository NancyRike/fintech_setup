import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router";
import { Close, Hamburger, logo, TimeClock } from "../../assets";

import styles from "./styles.module.css";

const MobileNavbar = ({ setShowMobileNav }) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(
      document.querySelector(":root")
    ).overflow;
    document
      .querySelector(":root")
      .style.setProperty("overflow", "hidden", "important");
    return () =>
      (document.querySelector(":root").style.overflow = originalStyle);
  }, []);

  return (
    <div
      className={`${styles["col-a"]} ${styles["col-a-small"]} d-flex d-lg-none flex-column justify-content-between py-5`}
    >
      <Close
        onClick={() => setShowMobileNav(false)}
        className={styles["close-small"]}
      />
      <div className="px-3">
        <img src={logo} alt="logo" className="mb-3" />
        <h2>To get started, what do I need?</h2>
        <p className="fw-bold">
          You'll need the following information to <br />
          complete your application:
        </p>
        <div className="d-flex mt-5">
          <div className="me-3">
            <TimeClock />
          </div>
          <p className="fw-bold">
            Average Completion Time <br /> 3-5 Mins
          </p>
        </div>
      </div>
      <p className={`${styles.contact} px-3`}>
        <span>Contact us</span> for any assistance
      </p>
    </div>
  );
};

const GetStarted = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { goBack } = useHistory();

  return (
    <div className={styles.container}>
      <div className="d-flex">
        {/* Navbar for big screens */}
        <div
          className={`${styles["col-a"]} d-none d-lg-flex flex-column justify-content-between py-5`}
        >
          <div className="px-5">
            <img src={logo} alt="logo" className="mb-3" />
            <h1>To get started, what do I need?</h1>
            <p className="fw-bold">
              You'll need the following information to <br />
              complete your application:
            </p>
            <div className="d-flex mt-4">
              <div className="me-3">
                <TimeClock />
              </div>
              <p className="fw-bold">
                Average Completion Time <br /> 3-5 Mins
              </p>
            </div>
          </div>
          <p className={`${styles.contact} px-5`}>
            <span>Contact us</span> for any assistance
          </p>
        </div>
        {/* Navbar for mobile screens */}
        {showMobileNav ? (
          <MobileNavbar setShowMobileNav={setShowMobileNav} />
        ) : (
          ""
        )}
        <div className={`${styles["col-b"]} mt-4  py-5 px-3 px-lg-5`}>
          <div
            className={`${styles["mobile-toggle"]} d-flex align-items-center d-lg-none`}
            onClick={() => setShowMobileNav(true)}
          >
            <Hamburger />
            <img src={logo} alt="logo" />
          </div>
          <Close onClick={goBack} className={styles["close"]} />
          <div className={`${styles["col-b-1"]} mt-5 mt-lg-3 mx-auto mx-lg-0`}>
            <h2>Who is eligible to apply?</h2>
            <p>
              Businesses such as sole proprietorship (Business Name), Limited
              Liability Company (LLC/LTD), are eligible to use Evea.{" "}
            </p>
            <p>
              Consumers, a mom-and-pop shop, and other unregistered businesses
              are ineligible.
            </p>
            <div>
              <span className="fw-bold">Note:</span>
              <p>
                Applications must be submitted by either the
                Founder/Owner/C-suite executive of the company, or an employee
                authorized to apply on the company's behalf.
              </p>
            </div>
            <h2>Documents</h2>
            <p>
              To assist us in verifying your company, you will need to upload
              some documents. Please have digital copies of the following items
              on hand:
            </p>
            <div>
              <h6>For Limited Liabilities</h6>
              <ul>
                <li>Certificate of Incorporation </li>
                <li>
                  CAC 1.1 Form (CAC 2 and CAC 7 for Old Registration) [Certified
                  True Copy]
                </li>
                <li>
                  Certified True Copy of Memorandum and Articles of Association
                  of the Business
                </li>
                <li>Tax Identification Number (TIN)</li>
                <li>Valid National ID</li>
                <li>Company ID </li>
                <li>Utility Bill (of the intended address)</li>
              </ul>
            </div>
            <div>
              <h6>For Sole proprietorship (Business Name):</h6>
              <ul>
                <li>Certificate of Incorporation </li>
                <li>Form BN-01 (Proprietor’s Particulars)</li>
                <li>
                  Tax Identification Number (TIN)Tax Identification Number (TIN)
                </li>
                <li>Valid National ID</li>
                <li>Company ID </li>
                <li>Utility Bill (of the intended address)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GetStarted };
