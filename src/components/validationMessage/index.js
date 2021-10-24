import React from "react";
import { WarningIcon } from "../../assets";

import styles from "./styles.module.css";

const ValidationMessage = ({ error }) => {
  return (
    <div className={`${styles.validation}`}>
      {<WarningIcon />}
      <span>{error}</span>
    </div>
  );
};

export { ValidationMessage };
