import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown, CardIcon, HomeIcon, logo, PowerIcon } from "../../assets";

import styles from "./styles.module.css";

const DashboardLayout = ({children}) => {
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${styles} row`}>
        <div className={`${styles} col-md-2`}>
          <div className={`${styles.sideBarContainer}`}>
            <div className="ms-1 py-4">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div>
              <ul className={`${styles.sideBarList}`}>
                <li><PowerIcon/><Link> Get Started</Link></li>
                <li><HomeIcon/><Link> Dashboard</Link></li>
                <li><CardIcon/><Link> Cards <ArrowDown className="ml-3"/></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.DashboardChild} col-md-10 col-sm-12`}>
            {children}
        </div>
      </div>
    </div>
  );
};

export { DashboardLayout };
