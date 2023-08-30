import { React, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [entertedTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredAmount: "",
  //   enteredTitle: "",
  //   enteredDate: "",
  // });
  //Alternative Way of dealing with state
  const titleChangeHandler = (Event) => {
    setEnteredTitle(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: Event.target.value,
    // });
  };

  const amountChangeHandler = (Event) => {
    setEnteredAmount(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: Event.target.value,
    // });
  };

  const dateChangeHandler = (Event) => {
    setEnteredDate(Event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: Event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submitedData = {
      title: entertedTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(submitedData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input
            type="text"
            value={entertedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount: </label>
          <input
            type="number"
            min="0.01"
            steps="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date: </label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
