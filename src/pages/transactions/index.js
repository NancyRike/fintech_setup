import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ExportIcon,
  EyeIcon,
  FIleIcon,
  FilterIcon,
  SearchIcon,
  SettingsIcon,
  TriangleIcon,
  WriteIcon,
} from "../../assets";
import FileIcon from "../../assets/svgs/file-text.svg";

import TextIcon from "../../assets/svgs/edit-3.svg";

import styles from "./styles.module.css";

const Transactions = () => {
  const pieChartLabel = [
    { activity: "Travels", colour: "rgba(86, 133, 255, 1)", price: "₦200,000" },
    {
      activity: "Service and Bills",
      colour: "rgba(26, 99, 255, 1)",
      price: "₦410,000",
    },
    {
      activity: "Entertainment",
      colour: "rgba(80, 30, 255, 1) ",
      price: "₦270,000",
    },
    {
      activity: "Recurring Software",
      colour: "rgba(255, 210, 0, 1)",
      price: "₦760,000",
    },
  ];
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

  return (
    <main className={`${styles.transactionContainer} p-sm-4 p-0 container`}>
      <div className={`d-sm-flex d-block justify-content-between align-items-center`}>
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
        className={`d-sm-flex d-block justify-content-between ${styles.exportTransaction}`}
      >
        <div>
          <p>All transactions from start of account activity</p>
        </div>
        <div className={`${styles.exportLink}`}>
          <Link>Export</Link> <ExportIcon />
        </div>
      </div>
      <div className={`row ${styles.graphContainer}`}>
        <div className={`col-md-6 ${styles.graphCard}`}>
          <div className={`bg-white p-3 h-100`}>
            <div
              className={`d-lg-flex ${styles.dateOptions} justify-content-between align-items-center`}
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
                  maintainAspectRatio: false,
                  plugins: {
                    datalabels: {
                      display: false,
                    },
                    legend: {
                      display: false,
                      position: "top",
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
              className={`d-lg-flex ${styles.dateOptions} mb-4 justify-content-between align-items-center`}
            >
              <div>
                <h4>Spent By Category</h4>
              </div>
              <div>
                <Link to="#">see more</Link>
              </div>
            </div>
            <div className={`row`}>
              <div className={`col-8 ${styles.pieChartImage}`}>
                <div className={`${styles.chartContainer} p-2 `}>
                  <Doughnut
                    data={pieData}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        datalabels: {
                          display: false,
                        },
                        legend: {
                          display: false,
                          position: "top",
                        },
                      },
                    }}
                    height={250}
                  />
                </div>
              </div>
              <div className={`col-4 ${styles.pieChartDetails}`}>
                <div>
                  {pieChartLabel.map((chartDetails, index) => {
                    return (
                      <div
                        className={`d-flex align-items-start  ${styles.chartLabel} `}
                      >
                        <div
                          className={`${styles.labelColour}`}
                          style={{ backgroundColor: chartDetails.colour }}
                        >
                          {}
                        </div>
                        <div>
                          <h6>{chartDetails.activity}</h6>
                          <p>{chartDetails.price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={`bg-white p-4 mt-4`}>
        <div className={`row justify-content-between align-items-center`}>
          <div className={` col-md-6 `}>
            <div>
              <h2>Transaction History</h2>
            </div>
          </div>
          <div
            className={` col-md-6 d-flex flex-nowrap justify-content-md-end`}
          >
            <span className={`${styles.searchTransactions}`}>
              <SearchIcon />
              <input type="text" placeholder="Search" />
            </span>
            <span className={`${styles.filterTransactions} `}>
              <FilterIcon />
              <input type="text" placeholder="Filter" />
            </span>
          </div>
        </div>
        <div className="table-responsive">
          <table className={`table ${styles.tableContainer} `}x>
            {/* <caption>List of users</caption> */}
            <thead>
              {/* <tr> */}
                <th scope="col"></th>
                <th scope="col">Date</th>
                <th scope="col">Cardholder</th>
                <th scope="col">Merchant</th>
                <th scope="col">Amount</th>
                <th scope="col">Last 4 digits</th>
                <th scope="col">Card type</th>
                <th scope="col">Expense Cartegoy</th>
                <th scope="col"> </th>
              {/* </tr> */}
            </thead>
            <tbody>
              <tr className={`${styles.tableRow}`}>
                <th scope="row"><TriangleIcon /></th>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469</td>
                <td>Virtual</td>
                <td>Entertainment</td>
                <td>
                  <div className={`d-flex justify-content-around`}>
                  <img src={FileIcon} alt="" className={`${styles.editIcon}`}/>
                  <img src={TextIcon} alt="" className={`${styles.editIcon}`} />
                </div>
                </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <th scope="row"><TriangleIcon /></th>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469</td>
                <td>Virtual</td>
                <td>Entertainment</td>
                <td>
                  <div className={`d-flex justify-content-around`}>
                  <img src={FileIcon} alt="" className={`${styles.editIcon}`}/>
                  <img src={TextIcon} alt="" className={`${styles.editIcon}`} />
                </div>
                </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <th scope="row"><TriangleIcon /></th>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469</td>
                <td>Virtual</td>
                <td>Entertainment</td>
                <td>
                  <div className={`d-flex justify-content-around`}>
                  <img src={FileIcon} alt="" className={`${styles.editIcon}`}/>
                  <img src={TextIcon} alt="" className={`${styles.editIcon}`} />
                </div>
                </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <th scope="row"><TriangleIcon /></th>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469</td>
                <td>Virtual</td>
                <td>Entertainment</td>
                <td>
                  <div className={`d-flex justify-content-around`}>
                  <img src={FileIcon} alt="" className={`${styles.editIcon}`}/>
                  <img src={TextIcon} alt="" className={`${styles.editIcon}`} />
                </div>
                </td>
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
