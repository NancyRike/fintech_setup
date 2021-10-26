import React, { useRef, useState } from "react";
import { ArrowDown } from "../../assets";
import { useOnClickOutside } from "../../hooks/useOutsideClick";

import styles from "./styles.module.css";

const Dropdown = ({ placeHolder, items }) => {
  const [showList, setShowList] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);

  const ref = useRef();

  useOnClickOutside(ref, () => setShowList(false));

  const handleShowList = () => {
    setShowList(!showList);
  };

  const handleCurrentValue = ({ target: { value } }) => {
    setCurrentValue(value);
    setShowList(false);
  };

  return (
    <div className={`${styles.container}`} ref={ref}>
      <div className={`${styles.header} py-2`} onClick={handleShowList}>
        <div>
          <span>{currentValue ? currentValue : placeHolder}</span>
          <ArrowDown
            className={styles.arrow}
            style={{ transform: showList ? "rotate(180deg)" : "" }}
          />
        </div>
      </div>
      {showList ? (
        <div className={`${styles.list} mt-3 p-3`}>
          <ul>
            {items
              ? items.map((item, index) => (
                  <li key={index + 2} className="my-2">
                    <button
                      className="px-1"
                      value={item}
                      onClick={handleCurrentValue}
                    >
                      {item}
                    </button>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Dropdown };
