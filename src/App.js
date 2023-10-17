//import ExpesneItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Gym",
    amount: 55.85,
    date: new Date(2023, 8, 1),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.69,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [pickedYear, setPickedYear] = useState(2019);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const yearChoiceHandler = (yearChosen) => {
    setPickedYear(yearChosen);
  };
  const filteredExpenses = expenses.filter((expense) => {
    //console.log(expense.date.getFullYear());
    //console.log(pickedYear);
    return expense.date.getFullYear() == pickedYear;
  });
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={filteredExpenses}
        yearFilter={yearChoiceHandler}
        yearPicked={pickedYear}
      />
    </div>
  );
};

export default App;
