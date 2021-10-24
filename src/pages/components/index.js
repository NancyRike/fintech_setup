import React, {useState} from "react";
import { logo } from "../../assets/images";
import { Checkbox, Button, Modal } from "../../components";

import styles from "./styles.module.css";

const Components = () => {
  const [displayModal, setDisplayModal] = useState({details: "", visibility: false})
  const handleClick = ()=>{
    setDisplayModal({
      visibility: true,
    })
  }
  return (
    <main className={styles.container}>
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
          </div>
        </div>
        {/* buttons */}
        <h1 className="fw-bold my-4">Buttons</h1>

        <div className="d-flex w-100 justify-content-between align-item-center">
          <div>
            <p className="fw-bold">A standard button</p>
            <Button buttonLabel={'Save'}/>
          </div>
          <div>
            <p className="fw-bold">An outline button</p>
            <Button buttonLabel={'Save Me'} outlineButton={true}/>
          </div>
          <div className="w-50">
            <p className="fw-bold">A large standard button</p>
            <Button buttonLabel={'Prompt modal'} buttonStyling={'w-50'} onClick={handleClick}/>
          </div>

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