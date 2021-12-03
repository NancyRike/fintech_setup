import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, CardIcon, HomeIcon, logo, PowerIcon } from "../../assets";

import styles from "./styles.module.css";

const DashboardLayout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const showSideBar = () =>{
    setOpenNav(!openNav)
  }
  return (
    <>
    
      <div className={`bg-white d-block d-md-none`}>
        <div className="d-flex justify-content-between align-items-center px-3">
          <div className="ms-1 py-2">
            <Link to="/">
              <img src={logo} className={styles.mobileSizedLogo} alt="logo" />
            </Link>
          </div>
          <div onClick={showSideBar}>
            <i className={` fa fa-bars ${styles.hamburger}`}  aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.container} container-fluid`}>
        <div className={`row`}>
          <div className={` ${styles.sidebar}  ${openNav? (styles.smallSideBar) : 'd-none d-md-block col-md-2'}  `}>
            <div className={`${styles.sideBarContainer} `}>
              <div className="ms-3 py-4">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div>
                <ul className={`${styles.sideBarList}`}>
                  <li>
                    <PowerIcon />
                    <Link to="#"> Get Started</Link>
                  </li>
                  <li>
                    <HomeIcon />
                    <Link to="/dashboard"> Dashboard</Link>
                  </li>
                  <li>
                    <CardIcon />
                    <Link to="#">
                      Cards <ArrowDown className="ml-3" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.DashboardChild} col-md-10 `}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { DashboardLayout };
