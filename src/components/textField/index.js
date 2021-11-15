import React from 'react';
import styles from "./styles.module.css";


const TextArea = ({rows, placeholder, disabled, onChange, value, name, required, textAreaStyle, ...restProps }) => {
    return (
        <div>
            <textarea
                className={` ${textAreaStyle} ${styles.textFieldStyle}`}
                rows={rows}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                value={value}
                name={name}
                required={required}
                {...restProps}
                />
        </div>
    )
}

export {TextArea}


