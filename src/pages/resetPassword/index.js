import React, { useState } from "react";
import { EyeClose, EyeOpen } from "../../assets";
import { Inputs, Button } from "../../components";

import styles from "./styles.module.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState(false);

  return (
    <main className={`${styles.container} mt-5`}>
      <form>
        <div>
          <h1 className="text-center fw-bold mb-5">Set Your New Password</h1>
          <div>
            <p>
              Ensure your new password contains at least 1 lowercase, 1
              uppercase, 1 number and 1 symbol.
            </p>
            <div>
              <span className="d-block mb-3">
                <label htmlFor="email" className="fw-bold">
                  New Password
                </label>
                <Inputs
                  borderLess
                  id="email"
                  Icon2={
                    <div onClick={() => setNewPassword(!newPassword)}>
                      {!newPassword ? <EyeOpen /> : <EyeClose />}
                    </div>
                  }
                  type={!newPassword ? "text" : "password"}
                />
              </span>
              <span className="d-block mb-3">
                <label htmlFor="email" className="fw-bold">
                  Confirm New Password
                </label>
                <Inputs
                  borderLess
                  id="email"
                  Icon2={
                    <div
                      onClick={() => setConfirmNewPassword(!confirmNewPassword)}
                    >
                      {!confirmNewPassword ? <EyeOpen /> : <EyeClose />}
                    </div>
                  }
                  type={!confirmNewPassword ? "text" : "password"}
                />
              </span>
              <div className="d-flex justify-content-between mt-5">
                <Button buttonLabel="Back" outlineButton />
                <Button buttonLabel="Submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export { ResetPassword };
