import React from 'react'
import styles from "./styles.module.css";

const CreditCard = ({children, cardTitle}) => {
    return (
        <div className= {`${styles.cardContainer} `}>
            <div className= {`${styles.cardHeader} mx-auto`} >
                <h2 className={`${styles.cardTitle} py-2`}>{cardTitle}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export {CreditCard}
