import "./ExpensesList.css";
import ExpesneItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <p>There is no expenses for the time period</p>;

  return props.items.map((expense) => (
    <ExpesneItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
};

export default ExpensesList;
