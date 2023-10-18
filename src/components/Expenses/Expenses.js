import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const yearFilter = (yearChosen) => {
    setFilteredYear(yearChosen);
  };
  const filteredExpenses = props.items.filter((expense) => {
    //eslint-disable-next-line
    return expense.date.getFullYear() == filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={yearFilter} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
