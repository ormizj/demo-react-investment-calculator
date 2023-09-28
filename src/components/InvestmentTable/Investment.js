import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Investment = (props) => {
  const invesetment = props.investment;

  return (
    <tr>
      {/* <td>YEAR NUMBER</td> */}
      <td>{invesetment.year}</td>
      {/* <td>TOTAL SAVINGS END OF YEAR</td> */}
      <td>{formatter.format(invesetment.savingsEndOfYear)}</td>
      {/* <td>INTEREST GAINED IN YEAR</td> */}
      <td>{formatter.format(invesetment.yearlyInterest)}</td>
      {/* <td>TOTAL INTEREST GAINED</td> */}
      <td>{formatter.format(invesetment.interestGained)}</td>
      {/* <td>TOTAL INVESTED CAPITAL</td> */}
      <td>{formatter.format(invesetment.investedCapital)}</td>
    </tr>
  );
};

export default Investment;
