import React from 'react';
import styles from "./styles.module.css";

const Button = ({buttonLabel, type, disabled, onClick,buttonStyling, outlineButton, ...rest}) => {
    if (outlineButton) {
        
    }
    return (
        <>
           <button className={`${styles.button} ${buttonStyling} ${outlineButton? styles.outlineButton : styles.standardButton}`}  type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >{buttonLabel}</button> 
        </>
    )
}

export {Button}
