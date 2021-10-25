import React from "react";
import { ValidationMessage } from "../validationMessage";

import styles from "./styles.module.css";

function Inputs({
  className,
  disabled,
  placeHolder,
  type,
  error,
  Icon1,
  Icon2,
  toggleType,
  borderLess,
  ...rest
}) {
  return (
    <>
      <div
        className={`d-flex align-items-center ${
          styles.container
        }  ${className} ${borderLess ? styles.borderLess : ""} ${
          error ? styles.error : ""
        } ${disabled ? styles.disabled : ""}`}
      >
        {Icon1 ? Icon1 : ""}
        <input
          type={toggleType || type}
          disabled={disabled}
          placeholder={placeHolder}
          className="w-100"
          {...rest}
        />
        {Icon2 ? Icon2 : ""}
      </div>

      {error ? (
        <div className="mt-2">
          <ValidationMessage error={error} />{" "}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export { Inputs };
