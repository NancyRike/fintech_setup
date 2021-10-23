import React from "react";

import styles from "./styles.module.css";

const Checkbox = ({ label, checked, disabled, ...rest }) => {
  return (
    <label className={`${styles.container}`} disabled>
      {label}
      <input type="checkbox" checked={checked} disabled={disabled} {...rest} />
      <span></span>
    </label>
  );
};

export { Checkbox };
