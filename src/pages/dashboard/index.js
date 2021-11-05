import React from "react";
import { ArrowDown, ArrowRight, GreenCircle, GreyCircle, InfoIcon, WelcomeImage } from "../../assets";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Button } from "../../components";

const Dashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Spend",
        data: [33, 53, 85, 41, 44, 65, 33, 53, 85, 41, 44, 65],
        lineTension: 0.4,
        fill: false,
        borderColor: "rgba(26, 99, 255, 1)"
      }
    ]
  };
  const option = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
            color: '#2F3034',
          },
        }
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            display: false,
            color: '#2F3034',
        },
        }
      ]
    }
  };
    
  return (
    <main>
      <section className={`${styles.c} container py-5`}>
        <h2 className={`${styles.dashboardHeader}`}>Company Dashboard</h2>
        <div className={`${styles.c} row`}>
          <div className={`col-md-6 mb-4`}>
            <div className={`${styles.activateAccountCard} row justify-content-between align-items-center p-3 mx-1 bg-white`}>
              <div className={`${styles.textSection} col-7 `}>
                  <div>
                    <h3>Welcome Olamide</h3>
                    <p>Please activate your account to access full Evea services</p>
                    <Link>Activate Account</Link> 
                  </div>
              </div>
              <div className={`${styles.imageSection} col-5 `}>
                <WelcomeImage/>
              </div>
            </div>
          </div>
          <div className="col-md-6">
          </div>
          <div className={`${styles.c} col-md-6`}>
            <div className={`${styles.cardBody} p-4 `}>
              <div className="cardBody">
                <h3 className={`${styles.creditInfo} mb-4`}>Credit Info</h3>
                <h6 className={`${styles.creditLimit} `}>Credit Limit</h6>
                <h2 className={`${styles.creditLimitAmount} `}>₦ 500,000</h2>
                <div
                  class="progress my-3"
                  style={{ width: "100%", backgroundColor: "#E3FCFB", height: "10px" }}
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%", backgroundColor: "#50B83C" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="d-sm-flex justify-content-between align-items-center">
                  <div className={`${styles.balance}`}>
                    <GreenCircle /> <span className="">Spent </span>
                    <p>₦ 768,000</p>
                  </div>
                  <div className={`${styles.balance}`}>
                    <span className="">Available</span>
                    <GreyCircle />
                    <p>₦ 768,000</p>
                  </div>
                </div>
                <div>
                  <Link className={`${styles.requestLink}`}>
                    Request Credit Increase
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles} col-md-6`}>
            <div className={`${styles.paymentCard} px-4 py-3 mb-3`}>
              <span className="py-2">
                <InfoIcon /> Upcoming payment due
              </span>
              <div className="px-4">
                <p>
                  <b>₦426,500.00 </b> due by Fri, Nov 30, 2020
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link className={`${styles.requestLink}`}>Make Payment</Link>
                  <Link className={`${styles.requestLink}`}>
                    Change Payment Schedule
                  </Link>
                </div>
              </div>
            </div>
            <div className={`${styles.cashbackCard} bg-white `}>
              <div className="bg-whte pt-4 px-4 mt-3">
                <div className= {`${styles.cashbackBalance} d-flex justify-content-between align-items-center `}  >
                  <div>
                    <span>
                      Available cashback <InfoIcon />
                    </span>
                    <h3>₦46,000.00</h3>
                  </div>
                  <div>
                    <span>
                      Cashback this month <InfoIcon />
                    </span>
                    <h3>N46,000.00</h3>
                  </div>
                </div>
                <div className={`${styles.cashbackDetails} w-75 d-flex justify-content-between align-Items-center` }>
                  <p>
                    Total cashback <InfoIcon />
                  </p>
                  <h6>₦ 46,000</h6>
                </div>
              </div>
              <div className={`${styles.redeemBalance} d-flex justify-content-center`}>
                <span className="p-2">
                  <ArrowRight /> Redeem to your card balance
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5">
              <div className={` ${styles.graphContainer} col-12 p-5 bg-white`}>
                <div className={` d-flex justify-content-between align-items-center `}>
                  <h2 className={`${styles.graphHeader}`}>Company Spend</h2>
                  <div>
                    <Button outlineButton buttonStyling={'mx-2'} buttonLabel={<span>Nov <ArrowDown/></span>}/>
                    <Button outlineButton buttonStyling={'mx-2'} buttonLabel={<span>2020 <ArrowDown/></span>}/>
                  </div>
                </div>
                <div>
                  <Line data={data} options={option}/>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};
export { Dashboard };
