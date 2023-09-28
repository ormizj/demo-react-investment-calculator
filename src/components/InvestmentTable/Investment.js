import React from "react";

const Investment = (props) => {
  const invesetment = props.investment;

  return (
    <tr>
      {/* <td>YEAR NUMBER</td> */}
      <td>{invesetment.year}</td>
      {/* <td>TOTAL SAVINGS END OF YEAR</td> */}
      <td>{invesetment.savingsEndOfYear}</td>
      {/* <td>INTEREST GAINED IN YEAR</td> */}
      <td>{invesetment.yearlyInterest}</td>
      {/* <td>TOTAL INTEREST GAINED</td> */}
      <td>{invesetment.totalInterestGained}</td>
      {/* <td>TOTAL INVESTED CAPITAL</td> */}
      <td>{invesetment.totalInvested}</td>
    </tr>
  );
};

export default Investment;
