import React, { useEffect, useState } from "react";
import { logo } from "../../assets/images";
import { Checkbox, Loader, RadioButton } from "../../components";
import { Button } from "../../components";

import styles from "./styles.module.css";

const Components = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <main className={styles.container}>
      {load ? <Loader /> : ""}
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
            <div className="my-3">
              <h6 className="fw-bold">Checkbox disabled</h6>
              <Checkbox label={<p>Click me</p>} disabled />
            </div>
          </div>
        </div>
        {/* Radio Button*/}
        <div className="my-4">
          <h1 className="fw-bold">RadioButton</h1>
          <div>
            <div className="my-3">
              <h6 className="fw-bold">Favourite Js framework</h6>
              <RadioButton label="React" name="jsFramework" value="React" />
              <RadioButton label="Vue" name="jsFramework" value="Vue" />
              <RadioButton label="Ember" name="jsFramework" value="Ember" />
            </div>
            <div className="my-3">
              <h6 className="fw-bold">RadioButton disabled</h6>
              <RadioButton label={<p>Click me</p>} disabled />
            </div>
          </div>
        </div>
        {/* buttons */}
        <h1 className="fw-bold my-4">Buttons</h1>

        <div className="d-flex w-100 justify-content-between align-item-center">
          <div>
            <p className="fw-bold">A standard button</p>
            <Button buttonLabel={"Save"} />
          </div>
          <div>
            <p className="fw-bold">An outline button</p>
            <Button buttonLabel={"Save Me"} outlineButton={true} />
          </div>
          <div className="w-50">
            <p className="fw-bold">A large standard button</p>
            <Button buttonLabel={"See Me"} buttonStyling={"w-50"} />
          </div>
        </div>
      </div>
    </main>
  );
};

export { Components };
