import React from "react";

import styles from "./styles.module.css";

const Checkbox = ({ label, checked, ...rest }) => {
  return (
    <label className={`${styles.container}`}>
      {label}
      <input type="checkbox" checked={checked} {...rest} />
      <span></span>
    </label>
  );
};

export { Checkbox };
