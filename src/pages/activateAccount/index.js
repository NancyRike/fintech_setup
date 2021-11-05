import React from "react";
import { logo, NavListIconComplete, NavListIconHalf } from "../../assets";

import styles from "./styles.module.css";

const ActivateAccount = () => {
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
                      <span>Company Info</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span>Business Address</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span>Business Leadership</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span>Business Details</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span>Business Ownership</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconComplete />
                      <span>Bank Connection</span>
                    </div>
                  </li>
                  <li>
                    <div className={`${styles.navLink}`}>
                      <NavListIconHalf />
                      <span>Terms &amp; Conditions</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={`${styles.main} col-9`}></div>
        </div>
      </div>
    </div>
  );
};

export { ActivateAccount };
