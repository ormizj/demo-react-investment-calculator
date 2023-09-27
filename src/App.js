import React, { useState } from "react";

import InvestmentForm from "components/InvestmentForm/InvestmentForm";
import InvestmentHeader from "components/InvestmentHeader/InvestmentHeader";
import InvestmentTable from "components/InvestmentTable/InvestmentTable";

function App() {
  const [investments, setInvestments] = useState([]);

  const addInvestmentHandler = (investment) => {
    setInvestments((prevInvestments) => [investment, ...prevInvestments]);
  };

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onAddInvestment={addInvestmentHandler} />
      <InvestmentTable investments={investments} />
    </div>
  );
}

export default App;
