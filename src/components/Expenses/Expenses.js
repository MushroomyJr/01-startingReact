import ExpesneItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
//import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  const yearFilter = (yearChosen) => {
    props.yearFilter(yearChosen);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={props.yearPicked} onChangeFilter={yearFilter} />
      {props.items.map((expense) => (
        <ExpesneItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
