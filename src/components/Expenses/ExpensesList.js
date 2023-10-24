import "./ExpensesList.css";
import ExpesneItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0)
    return (
      <h2 className="expenses-list__fallback ">
        There is no expenses for the time period
      </h2>
    );

  return props.items.map((expense) => (
    <ul className="expenses-list">
      <ExpesneItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
};

export default ExpensesList;
