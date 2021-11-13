import React, { useState } from "react";
import { Close, UploadCloud } from "../../assets";
import { ValidationMessage } from "../validationMessage";

import "./style.css";

const FIleUpload = ({ className, name, onChange, errorText }) => {
  const [currentValue, setCurrentValue] = useState(null);

  const handleChange = (e) => setCurrentValue(e.target.files[0]);

  return (
    <div>
      {!currentValue ? (
        <div
          className={`upload_dotted_box  ${className} ${
            errorText ? "upload_error" : ""
          } `}
        >
          <div>
            <UploadCloud />
            <p>
              Drag and drop your file(s) or <span>browse</span>
            </p>
            <p>Size limit: 5MB (Jpg or Png)</p>
          </div>
          <div>
            <input type="file" onChange={handleChange} name={name} />
          </div>
        </div>
      ) : (
        ""
      )}
      {currentValue ? (
        <div className="upload_file_info p-2 my-3">
          <span>{currentValue.name}</span>
          <Close
            className="file-upload-close"
            onClick={() => setCurrentValue(null)}
          />
        </div>
      ) : (
        ""
      )}
      {errorText ? (
        <div className="mt-2">
          <ValidationMessage error={errorText} />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { FIleUpload };
