import React from "react";
import { Link } from "react-router-dom";
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
        <div className="ms-1 py-4">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
};

export { AuthLayout };
