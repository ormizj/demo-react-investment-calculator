import InvestmentForm from "components/InvestmentForm/InvestmentForm";
import InvestmentHeader from "components/InvestmentHeader/InvestmentHeader";
import InvestmentTable from "components/InvestmentTable/InvestmentTable";

function App() {
  return (
    <div>
      <InvestmentHeader />
      <InvestmentForm />
      <InvestmentTable />
    </div>
  );
}

export default App;
