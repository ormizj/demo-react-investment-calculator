import React, { useState } from "react";
import styles from "./InvestmentForm.module.scss";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const InvestmentForm = (props) => {
  const [currentSavingsInput, setCurrentSavingsInput] = useState("");
  const [yearlyContributionInput, setYearlyContributionInput] = useState("");
  const [expectedReturnInput, setExpectedReturnInput] = useState("");
  const [durationInput, setDurationInput] = useState("");

  const inputHandler = (e, setCb) => {
    setCb(e.target.value);
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
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyInterest: formatter.format(yearlyInterest),
        totalInterestGained: formatter.format(totalInterestGained),
        totalInvested: formatter.format(totalInvested),
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
        className={styles.form}
        onSubmit={calculateHandler}
        onReset={resetFormHandler}
      >
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={currentSavingsInput}
              onChange={(e) => inputHandler(e, setCurrentSavingsInput)}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              value={yearlyContributionInput}
              onChange={(e) => inputHandler(e, setYearlyContributionInput)}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              value={expectedReturnInput}
              onChange={(e) => inputHandler(e, setExpectedReturnInput)}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={durationInput}
              onChange={(e) => inputHandler(e, setDurationInput)}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default InvestmentForm;
