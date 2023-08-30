import "./App.css";
import { React, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
let dummy_Expenses = [
  {
    id: "e1",
    title: "electric bill",
    amount: 1200,
    date: new Date(2023, 5, 9),
  },
  {
    id: "e2",
    title: "Rent",
    amount: 42000,
    date: new Date(2022, 3, 9),
  },
  {
    id: "e3",
    title: "morgage",
    amount: 16000,
    date: new Date(2020, 2, 9),
  },
  {
    id: "e4",
    title: "Insurance",
    amount: 5000,
    date: new Date(2022, 7, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
