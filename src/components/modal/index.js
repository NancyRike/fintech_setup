import React from "react";
import styles from "./styles.module.css";
const Modal = ({ children }) => {
  return (
    <div className={`${styles.modal}`}>
      <div className="container d-flex justify-content-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export { Modal };
