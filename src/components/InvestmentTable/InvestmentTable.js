import React from "react";

import styles from "./InvestmentTable.module.scss";
import Investment from "./Investment";

const InvestmentTable = (props) => {
  const investments = props.investments;

  if (investments.length === 0) {
    return (
      <p className={`result ${styles.empty}`}>Waiting for calculation...</p>
    );
  }

  return (
    <table className={styles.result}>
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
        {investments.map((invesetment) => (
          <Investment key={invesetment.year} investment={invesetment} />
        ))}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
