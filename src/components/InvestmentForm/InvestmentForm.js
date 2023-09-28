import React, { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavingsInput, setCurrentSavingsInput] = useState("");
  const [yearlyContributionInput, setYearlyContributionInput] = useState("");
  const [expectedReturnInput, setExpectedReturnInput] = useState("");
  const [durationInput, setDurationInput] = useState("");

  const currentSavingsInputHandler = (e) => {
    setCurrentSavingsInput(e.target.value);
  };
  const yearlyContributionInputHandler = (e) => {
    setYearlyContributionInput(e.target.value);
  };
  const expectedReturnInputHandler = (e) => {
    setExpectedReturnInput(e.target.value);
  };
  const durationInputHandler = (e) => {
    setDurationInput(e.target.value);
  };

  const calculateHandler = (e) => {
    e.preventDefault();
    const yearlyData = []; // per-year results

    let totalInterestGained = 0;
    let totalInvested = 0;
    let currentSavings = +currentSavingsInput;
    const yearlyContribution = +yearlyContributionInput;
    const expectedReturn = +expectedReturnInput / 100;
    const duration = +durationInput;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInvested += yearlyContribution;
      totalInterestGained += yearlyInterest;

      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest,
        totalInterestGained,
        totalInvested,
      });
    }

    // add investment and reset form
    props.onSetInvestment(yearlyData);
  };

  const resetFormHandler = () => {
    setCurrentSavingsInput("");
    setYearlyContributionInput("");
    setExpectedReturnInput("");
    setDurationInput("");
    props.onSetInvestment([]);
  };

  return (
    <div>
      <form
        className="form"
        onSubmit={calculateHandler}
        onReset={resetFormHandler}
      >
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={currentSavingsInput}
              onChange={currentSavingsInputHandler}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              value={yearlyContributionInput}
              onChange={yearlyContributionInputHandler}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              value={expectedReturnInput}
              onChange={expectedReturnInputHandler}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={durationInput}
              onChange={durationInputHandler}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentForm;
