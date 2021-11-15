import React from "react";
import styles from "./styles.module.css";
const Modal = ({ children, modalWidth }) => {
  return (
    <div className={` ${styles.modal } m-auto`}>
      <div
        className= {`container bg-white my-4 p-4`} style={{width: modalWidth}} >
      <div>
        {children}
      </div>
        </div>
    </div>
  );
};

export {Modal};
