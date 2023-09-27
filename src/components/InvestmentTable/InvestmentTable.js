import React from "react";

import styles from "./InvestmentTable.module.scss";

const InvestmentTable = (props) => {
  if (props.investments.length === 0) {
    return <div className={`result ${styles.empty}`}>No investments exist</div>;
  }

  return (
    // {/* Todo: Show below table conditionally (only once result data is available) */}

    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <td>YEAR NUMBER</td> */}
          <td></td>
          {/* <td>TOTAL SAVINGS END OF YEAR</td> */}
          <td></td>
          {/* <td>INTEREST GAINED IN YEAR</td> */}
          <td></td>
          {/* <td>TOTAL INTEREST GAINED</td> */}
          <td></td>
          {/* <td>TOTAL INVESTED CAPITAL</td> */}
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default InvestmentTable;
