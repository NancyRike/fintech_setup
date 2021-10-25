import React from "react";
import { useBodyScrollLock } from "../../hooks";

import styles from "./styles.module.css";

const Loader = () => {
  useBodyScrollLock();

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
};

export { Loader };
