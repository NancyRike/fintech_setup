import React from "react";
import styles from "./styles.module.css";
const Modal = ({ children, }) => {
  return (
    <div className={`${styles.modal}`}>
      <div
        className="container bg-white my-4 p-4">
      <div>
        {children}
      </div>
        </div>
    </div>
  );
};

export {Modal};
