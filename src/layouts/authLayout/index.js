import React from "react";
import { logo } from "../../assets";

import styles from "./styles.module.css";

const AuthLayout = ({ children, authBgA }) => {
  return (
    <div
      className={`${styles.container} ${
        authBgA ? styles.authBgA : styles.authBgB
      }`}
    >
      <header className="container-fluid">
        <div className="ms-4 py-4">
          <img src={logo} alt="logo" />
        </div>
      </header>
      {children}
    </div>
  );
};

export { AuthLayout };
