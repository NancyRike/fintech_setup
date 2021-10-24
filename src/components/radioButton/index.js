import React from "react";

import styles from "./styles.module.css";

const RadioButton = ({ label, checked, ...rest }) => {
  return (
    <label className={`${styles.container}`}>
      {label}
      <input type="radio" checked={checked} {...rest} />
      <span></span>
    </label>
  );
};

export { RadioButton };
