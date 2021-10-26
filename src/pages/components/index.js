import React, { useEffect, useState } from "react";
import { logo } from "../../assets/images";
import { Checkbox, Inputs, Loader, RadioButton, Button, Modal, CreditCard, ToggleButton } from "../../components";

import styles from "./styles.module.css";

const Components = () => {
  const [displayModal, setDisplayModal] = useState({details: "", visibility: false})
  const handleClick = ()=>{
    setDisplayModal({
      visibility: true,
    })
  }
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  return (
    <main className={styles.container}>
      {load ? <Loader /> : ""}
      {displayModal.visibility? (<Modal><ViewModalContent setDisplayModal={setDisplayModal}/></Modal>): null}
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
        {/* Inputs*/}
        <div className="my-4">
          <h1 className="fw-bold">Input</h1>
          <div>
            <div className="my-3">
              <h6 className="fw-bold">Different input states</h6>
              <div className="my-3">
                <Inputs borderLess placeHolder="This is a bordeless input" />
              </div>
              <div className="my-3">
                <Inputs placeHolder="This is a bordered input" />
              </div>
              <div className="my-3">
                <Inputs
                  placeHolder="This is a bordered input's error state"
                  error="Something went wrong "
                />
              </div>
              <div className="my-3">
                <Inputs
                  borderLess
                  placeHolder="This is a borderless input's error state"
                  error="Something went wrong "
                />
              </div>
              <div className="my-3">
                <Inputs disabled placeHolder="This is a disabled input" />
              </div>
              <div className="my-3">
                <Inputs
                  disabled
                  borderLess
                  placeHolder="This is a disabled borderless input"
                />
              </div>
            </div>
          </div>
        </div>
        {/* buttons */}
        <h1 className="fw-bold my-4">Buttons</h1>

        <div className="d-md-flex w-100 justify-content-between align-item-center">
          <div>
          <p className="fw-bold">A Toggle button</p>
            <ToggleButton/>
          </div>
          <div>
            <p className="fw-bold">A standard button</p>
            <Button buttonLabel={"Save"} />
          </div>
          <div>
            <p className="fw-bold">An outline button</p>
            <Button buttonLabel={"Save Me"} outlineButton={true} />
          </div>
          <div className="w-md-50 w-sm-100">
            <p className="fw-bold">A large standard button</p>
            <Button buttonLabel={'Prompt modal'} buttonStyling={'w-md-50'} onClick={handleClick}/>
          </div>
        </div>
        {/* Credit card */}
        <div>
        <h1 className="fw-bold my-4">Credit Card</h1>

          <CreditCard cardTitle={'Mock Credit Card'}>
              <img src={logo} alt="" />
          </CreditCard>
        </div>
      </div>
    </main>
  );
};

export { Components };

// modal
export const ViewModalContent =({setDisplayModal}) => {
  const handleClose=()=>{
    setDisplayModal({
      visibility:false,
    })
  }
  return(
    <div>
      <h1 className="d-flex justify-content-end" onClick={handleClose}  style={{cursor: "pointer"}}>x</h1>
      <h2>refresh to close modal</h2>
    </div>
  )
}
