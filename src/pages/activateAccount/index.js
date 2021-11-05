import React, { useState } from "react";
import { logo, NavListIconComplete, NavListIconHalf } from "../../assets";
import {
  BankDetails,
  BusinessLeadership,
  BusinessOwnership,
  CompanyInfo,
  TermsAndConditions,
} from "./components";

import styles from "./styles.module.css";

const ActivateAccount = () => {
  const [currentNavItem, setCurrentNavItem] = useState(1);

  return (
    <div className={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className={`${styles.navbar} col-3`}>
            <div className="mt-4 px-4">
              <span className="d-block mb-5">
                <img src={logo} alt="logo" />
              </span>
              <nav>
                <ul>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(1)}>
                        Company Info
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(2)}>
                        Business Address
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(3)}>
                        Business Leadership
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(4)}>
                        Business Details
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(5)}>
                        Business Ownership
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span onClick={() => setCurrentNavItem(6)}>
                        Bank Connection
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconHalf />
                      <span onClick={() => setCurrentNavItem(7)}>
                        Terms &amp; Conditions
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            className={`${styles.main} col-9 d-flex pt-3 pb-5 justify-content-center`}
          >
            {currentNavItem === 1 ? (
              <CompanyInfo />
            ) : currentNavItem === 2 ? (
              ""
            ) : currentNavItem === 3 ? (
              <BusinessLeadership />
            ) : currentNavItem === 4 ? (
              ""
            ) : currentNavItem === 5 ? (
              <BusinessOwnership />
            ) : currentNavItem === 6 ? (
              <BankDetails />
            ) : currentNavItem === 7 ? (
              <TermsAndConditions />
            ) : (
              <CompanyInfo />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ActivateAccount };
