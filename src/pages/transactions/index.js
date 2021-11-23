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
import styles from "./styles.module.css";

const Transactions = () => {

  const pieChartLabel=[
    {activity: "Travels", colour: 'rgba(86, 133, 255, 1)', price: "₦200,000"},
    {activity: "Service and Bills", colour: 'rgba(26, 99, 255, 1)', price: "₦410,000"},
    {activity: "Entertainment", colour: 'rgba(80, 30, 255, 1) ', price: "₦270,000"},
    {activity: "Recurring Software", colour: 'rgba(255, 210, 0, 1)', price: "₦760,000"},
  ]
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
              className={`d-flex ${styles.dateOptions} mb-4 justify-content-between align-items-center`}
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
              <div className={`col-4`}>
                <div>
                  {pieChartLabel.map((chartDetails, index)=>{
                    return(
                       <div
                    className={`d-flex align-items-start  ${styles.chartLabel} `}
                  >
                    <div className={`${styles.labelColour}`} style={{backgroundColor: chartDetails.colour}}>
                      {}
                    </div>
                    <div>
                      <h6>{chartDetails.activity}</h6>
                      <p>{chartDetails.price}</p>
                    </div>
                  </div> 
                    )
                  })
                  }                
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
          <div className={` col-md-6 d-flex flex-nowrap justify-content-md-end`}>
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
                <td>
                  <TriangleIcon />
                </td>
                <td>24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td className={`${styles.editIcons}`}>
                  <WriteIcon />
                  <FIleIcon />
                </td>
              </tr>
              <tr className={`${styles.tableRow}`}>
                <td>
                  <EyeIcon />
                </td>
                <td className="py-1">24th 0ctober, 2022</td>
                <td>Ada Exe</td>
                <td>Netflix</td>
                <td>300,000</td>
                <td>3469 </td>
                <td>Virtual </td>
                <td>Entertainment </td>
                <td className={`${styles.editIcons}`}>
                  <WriteIcon />
                  <FIleIcon />
                </td>
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
                <td className={`${styles.editIcons}`}>
                  <WriteIcon />
                  <FIleIcon />
                </td>
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
                <td className={`${styles.editIcons}`}>
                  <WriteIcon />
                  <FIleIcon />
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
