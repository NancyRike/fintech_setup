import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  GreenCircle,
  GreyCircle,
  InfoIcon,
  WelcomeImage,
} from "../../assets";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Button, Inputs, Modal } from "../../components";
import {
  MakePaymentModal,
  PaymentScheduleModal,
  RequestCreditIncrease,
} from "./components";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Monthly Spend",
      data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
      lineTension: 0.4,
      fill: false,
      borderColor: "rgba(26, 99, 255, 1)",
    },
  ],
};
const option = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: true,
          color: "#2F3034",
        },
      },
    ],
    yAxes: [
      {
        display: false,
        gridLines: {
          display: false,
          color: "#2F3034",
        },
      },
    ],
  },
};

const Dashboard = () => {
  const [showPaymentScheduleModal, setShowPaymentScheduleModal] =
    useState(false);
  const [displayModal, setDisplayModal] = useState({
    details: "",
    visibility: false,
  });
  const handleModal = () => {
    setDisplayModal({
      visibility: true,
    });
  };
  const [showMakePaymentModal, setShowMakePaymentModal] = useState(false);

  return (
    <>
      {showPaymentScheduleModal ? (
        <Modal>
          <PaymentScheduleModal
            closeModal={() => setShowPaymentScheduleModal(false)}
          />
        </Modal>
      ) : (
        ""
      )}
      {displayModal.visibility ? (
        <Modal>
          <RequestCreditIncrease setDisplayModal={setDisplayModal} />
        </Modal>
      ) : null}
      {showMakePaymentModal ? (
        <Modal>
          <MakePaymentModal closeModal={() => setShowMakePaymentModal(false)} />
        </Modal>
      ) : (
        ""
      )}
      <main>
        <section
          className={`container-md py-3 py-sm-5 ${styles.containerBody}`}
        >
          <h2 className={`${styles.dashboardHeader}`}>Company Dashboard</h2>
          <div className={`${styles.c} row`}>
            <div className={`col-md-6 mb-4`}>
              <div
                className={`${styles.activateAccountCard} row justify-content-between align-items-center p-lg-3 p-2 mx-1 bg-white`}
              >
                <div className={`${styles.textSection} col-sm-7 `}>
                  <div>
                    <h3>Welcome Olamide</h3>
                    <p>
                      Please activate your account to access full Evea services
                    </p>
                    <Link to="/activate-account">Activate Account</Link>
                  </div>
                </div>
                <div className={`${styles.imageSection} col-sm-5 `}>
                  <WelcomeImage className={`${styles.welcomeImage}`} />
                </div>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className={` col-md-6`}>
              <div className={`${styles.cardBody} p-4 `}>
                <div className="cardBody">
                  <h3 className={`${styles.creditInfo} mb-4`}>Credit Info</h3>
                  <h6 className={`${styles.creditLimit} `}>Credit Limit</h6>
                  <h2 className={`${styles.creditLimitAmount} `}>-</h2>
                  <div
                    class="progress my-3"
                    style={{
                      width: "100%",
                      backgroundColor: "#E3FCFB",
                      height: "10px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "0%", backgroundColor: "#50B83C" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="d-sm-flex justify-content-between align-items-center">
                    <div className={`${styles.balance}`}>
                      <GreenCircle /> <span className="">Spent </span>
                      <p>-</p>
                    </div>
                    <div className={`${styles.balance}`}>
                      <span className="">Available</span>
                      <GreyCircle />
                      <p>-</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link
                    to="#"
                    className={`${styles.requestLink}`}
                    onClick={handleModal}
                  >
                    Request Credit Increase
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles} col-md-6`}>
              <div
                className={`${styles.paymentCard} px-lg-4 px-2 py-3 mb-lg-3 mb-2`}
              >
                <span className="py-2">
                  <InfoIcon className={`${styles.infoIcon}`} /> Upcoming payment
                  due
                </span>
                <div className="px-4">
                  <p>
                    <b> - </b>
                  </p>
                  <div className="d-lg-flex justify-content-between align-items-center">
                    <span
                      className={`${styles.requestLink} d-block`}
                      onClick={() => setShowMakePaymentModal(true)}
                    >
                      Make Payment
                    </span>
                    <span
                      className={`${styles.requestLink} d-block`}
                      onClick={() => setShowPaymentScheduleModal(true)}
                    >
                      Change Payment Schedule
                    </span>
                  </div>
                </div>
              </div>
              <div className={`${styles.cashbackCard} bg-white `}>
                <div className="bg-whte pt-4 px-2 px-lg-4 mt-lg-3">
                  <div
                    className={`${styles.cashbackBalance} d-flex justify-content-between align-items-center `}
                  >
                    <div>
                      <span>
                        Available cashback{" "}
                        <InfoIcon className={`${styles.infoIcon}`} />
                      </span>
                      <h3>-</h3>
                    </div>
                    <div>
                      <span>
                        Cashback this month{" "}
                        <InfoIcon className={`${styles.infoIcon}`} />
                      </span>
                      <h3>-</h3>
                    </div>
                  </div>
                  <div
                    className={`${styles.cashbackDetails} w-75 d-flex justify-content-between align-Items-center`}
                  >
                    <p>
                      Total cashback{" "}
                      <InfoIcon className={`${styles.infoIcon}`} />
                    </p>
                    <h6>-</h6>
                  </div>
                </div>
                <div
                  className={`${styles.redeemBalance} d-flex justify-content-center`}
                >
                  <span className="p-2">
                    <ArrowRight /> Redeem to your card balance
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div
                className={` ${styles.graphContainer} col-12 p-sm-5 p-2 bg-white`}
              >
                <div
                  className={` d-flex justify-content-between align-items-center `}
                >
                  <h2 className={`${styles.graphHeader}`}>Company Spend</h2>
                  <div>
                    <Button
                      outlineButton
                      buttonStyling={`mx-2 ${styles.graphFilter}`}
                      buttonLabel={
                        <span>
                          Nov <ArrowDown />
                        </span>
                      }
                    />
                    <Button
                      outlineButton
                      buttonStyling={`mx-2 ${styles.graphFilter}`}
                      buttonLabel={
                        <span>
                          2020 <ArrowDown />
                        </span>
                      }
                    />
                  </div>
                </div>
                <div>
                  <Line data={data} options={option} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export { Dashboard };
