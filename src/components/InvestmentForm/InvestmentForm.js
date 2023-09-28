import React, { useState } from "react";
import styles from "./InvestmentForm.module.scss";

const initialUserInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const InvestmentForm = (props) => {
  const [userInputs, setUserInputs] = useState(initialUserInput);

  const inputChangeHandler = (input, value) => {
    setUserInputs((prevInput) => ({
      ...prevInput,
      [input]: +value, // casting to number
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInputs);
  };

  const resetHandler = () => {
    setUserInputs(initialUserInput);
    props.onSetInvestment([]);
  };

  return (
    <div>
      <form
        className={styles.form}
        onSubmit={submitHandler}
        onReset={resetHandler}
      >
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              value={userInputs["current-savings"]}
              onChange={(e) =>
                inputChangeHandler("current-savings", e.target.value)
              }
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              value={userInputs["yearly-contribution"]}
              onChange={(e) =>
                inputChangeHandler("yearly-contribution", e.target.value)
              }
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
              value={userInputs["expected-return"]}
              onChange={(e) =>
                inputChangeHandler("expected-return", e.target.value)
              }
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              value={userInputs["duration"]}
              onChange={(e) => inputChangeHandler("duration", e.target.value)}
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
