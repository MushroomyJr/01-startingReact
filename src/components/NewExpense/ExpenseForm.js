import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTtile, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //Setting the Changed Title of the expense after listening to it's changes
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //Setting the Changed Date of the expense, after listening to it's changes
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //Setting the Changed Amount after listening to it's changes
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTtile,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTtile}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            value={enteredDate}
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={props.formSwitch}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
