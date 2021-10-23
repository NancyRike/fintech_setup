import React from "react";
import { logo } from "../../assets/images";
import { Checkbox } from "../../components";

import styles from "./styles.module.css";

const Components = () => {
  return (
    <main className={styles.container}>
      <div className="container py-4">
        <div>
          <img src={logo} alt="logo" />
        </div>
        {/* Checkbox */}
        <div className="my-4">
          <h1 className="fw-bold">Checkbox</h1>

          <div>
            <div className="my-3">
              <h6 className="fw-bold">Simple checkbox</h6>
              <Checkbox label="Click me please" />
            </div>
            <div className="my-3">
              <h6 className="fw-bold">Checkbox with bold font label</h6>
              <Checkbox label={<p className="fw-bold">Click me</p>} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Components };
