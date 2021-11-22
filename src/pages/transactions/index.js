import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { ArrowLeft, ExportIcon, GreenCircle, SettingsIcon } from "../../assets";
import styles from "./styles.module.css";

const Transactions = () => {
  const pieData = {
    maintainAspectRatio: false,
    responsive: false,
    labels: [
      `Travels`,
      `Service and Bills`,
      `Entertainment`,
      `Recurring Software`,
    ],
    datasets: [
      {
        data: [20, 41, 27, 76],
        backgroundColor: [
          "rgba(86, 133, 255, 1)",
          "rgba(26, 99, 255, 1)",
          "rgba(80, 30, 255, 1) ",
          "rgba(255, 210, 0, 1)",
        ],
      },
    ],
  };
  const pieOptions = {
    maintainAspectRatio: false,

    cutoutPercentage: 30,
    options: {
      // legend:{
      //   display: false,
      // },
      elements: {
        center: {
          text: "20% Travel",
          color: "#00246F",
        },
      },
    },
  };
  const pieLegend = {
    display: false,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const LineData = {
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
        data: [33, 53, 36, 41, 44, 11, 33, 53, 22, 41, 44, 65],
        lineTension: 0.4,
        fill: false,
        borderColor: "rgba(26, 99, 255, 1)",
      },
    ],
  };
  const lineOption = {
    maintainAspectRatio: false,
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
  return (
    <main className={`${styles.transactionContainer} p-4 container`}>
      <div className={`d-flex justify-content-between align-items-center`}>
        <div className={`${styles.transactionHeader}`}>
          <span>
            <ArrowLeft /> Transactions
          </span>
        </div>
        <div className={`${styles.settingsButton}`}>
          <button className={`btn btn-link`}>
            <SettingsIcon /> Settings
          </button>
        </div>
      </div>
      <div className={`${styles.transactionList}`}>
        <Link>All Transactions</Link>
        <hr className={`m-0`} />
      </div>
      <div
        className={`d-flex justify-content-between ${styles.exportTransaction}`}
      >
        <div>
          <p>All transactions from start of account activity</p>
        </div>
        <div>
          <Link>Export</Link> <ExportIcon />
        </div>
      </div>
      <div className={`row ${styles.graphContainer}`}>
        <div className={`col-md-6 ${styles.graphCard}`}>
          <div className={`bg-white p-3 h-100`}>
            <div
              className={`d-flex ${styles.dateOptions} justify-content-between align-items-center`}
            >
              <div>
                <h4>Your Activity</h4>
              </div>
              <div className={``}>
                <span>Day</span>
                <span>Week</span>
                <span>Month</span>
                <span>Year</span>
              </div>
            </div>
            <div className={`${styles.chartContainer} p-2 `}>
              <Line
                data={LineData}
                options={{
                  // reponsive: true,
                  maintainAspectRatio: false,
                  title: {
                    display: false,
                    text: "Performace Report",
                    fontSize: 14,
                  },
                  plugins: {
                    datalabels: {
                      display: false,
                    },
                    legend: {
                      display: false,
                      position: "top",
                      labels: {
                        fontFamily: "Manrope",
                        fontWeight: "300",
                        fontSize: 12,
                      },
                    },
                  },
                }}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className={`col-md-6 ${styles.graphCard}`}>
          <div className={`bg-white p-3 h-100`}>
            <div
              className={`d-flex ${styles.dateOptions} justify-content-between align-items-center`}
            >
              <div>
                <h4>Spent By Category</h4>
              </div>
              <div>
                <Link to="#">see more</Link>
              </div>
            </div>
            <div className={`row`}>
              <div className={`col-8`}>
                <div className={`${styles.chartContainer} p-2 `}>
                  <Doughnut
                    data={pieData}
                    options={{
                      // reponsive: true,
                      maintainAspectRatio: false,
                      title: {
                        display: false,
                        text: "Performace Report",
                        fontSize: 14,
                      },
                      plugins: {
                        datalabels: {
                          display: false,
                        },
                        legend: {
                          display: false,
                          position: "top",
                          labels: {
                            fontFamily: "Manrope",
                            fontWeight: "300",
                            fontSize: 12,
                          },
                        },
                      },
                    }}
                    height={250}
                  />
                </div>
              </div>
              <div className={`col-4`}>
                <div>
                  <div className={`d-flex align-items-start ${styles.chartLabel} `}>
                    <div>
                      <GreenCircle />
                    </div>
                    <div>
                      <h6>Travel</h6>
                      <p>₦100,000</p>
                    </div>
                  </div>
                  <div className={`d-flex align-items-start ${styles.chartLabel} `}>
                    <div>
                      <GreenCircle />
                    </div>
                    <div className={`ml-3`}>
                      <h6>Travel</h6>
                      <p>₦100,000</p>
                    </div>
                  </div>
                  <div className={`d-flex align-items-start ${styles.chartLabel} `}>
                    <div>
                      <GreenCircle />
                    </div>
                    <div>
                      <h6>Travel</h6>
                      <p>₦100,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={`bg-white p-4 mt-4`}>
        <div className={`row justify-content-between align-items-center`}>
          <div className={`col-md-6`}>
            <div>
              <h2>Transaction History</h2>
            </div>
          </div>
          <div className={`col-md-6`}>
            <input
              type="text"
              className={`${styles.searchTransactions}`}
              placeholder="Search"
            />
          </div>
        </div>
        <div className={`table-responsive`}>
          <table className={`table ${styles.tableContainer}`}>
            <thead>
              <tr>
                <th> </th>
                <th> Date </th>
                <th> Cardholder </th>
                <th> Merchant </th>
                <th>Amount</th>
                <th>Last 4 digits</th>
                <th>Card type</th>
                <th>Expense Cartegoy</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={`bg-white`}>
              <tr className={`${styles.tableRow}`}>
                <td></td>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td> </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <td></td>
                <td className="py-1">24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td> </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <td></td>
                <td className="py-1">24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td> </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <td></td>
                <td className="py-1">24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="col-3"></div>
    </main>
  );
};

export { Transactions };
