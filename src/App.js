import React, { useState } from "react";

import InvestmentForm from "components/InvestmentForm/InvestmentForm";
import InvestmentHeader from "components/InvestmentHeader/InvestmentHeader";
import InvestmentTable from "components/InvestmentTable/InvestmentTable";

function App() {
  const [investments, setInvestments] = useState([]);

  const setInvestmentHandler = (investments) => {
    setInvestments(investments);
  };

  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm onSetInvestment={setInvestmentHandler} />
      <InvestmentTable investments={investments} />
    </div>
  );
}

export default App;
