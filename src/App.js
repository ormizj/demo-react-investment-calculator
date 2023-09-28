import React, { useState } from "react";

import InvestmentForm from "components/InvestmentForm/InvestmentForm";
import InvestmentHeader from "components/InvestmentHeader/InvestmentHeader";
import InvestmentTable from "components/InvestmentTable/InvestmentTable";

function App() {
  const [investments, setInvestments] = useState([]);

  const calculateHandler = (userInputs) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInputs["current-savings"];
    const initialInvestment = currentSavings;
    const yearlyContribution = +userInputs["yearly-contribution"];
    const expectedReturn = +userInputs["expected-return"] / 100;
    const duration = +userInputs["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const year = i + 1;

      yearlyData.push({
        year,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        interestGained:
          currentSavings - initialInvestment - yearlyContribution * year,
        investedCapital: initialInvestment + yearlyContribution * year,
      });
    }

    // add investment and reset form
    setInvestments(yearlyData);
  };

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onCalculate={calculateHandler} />
      <InvestmentTable investments={investments} />
    </div>
  );
}

export default App;
