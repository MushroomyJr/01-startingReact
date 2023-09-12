import ExpesneItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpesneItem
        date={props.expense[0].date}
        title={props.expense[0].title}
        amount={props.expense[0].amount}
      />
      <ExpesneItem
        date={props.expense[1].date}
        title={props.expense[1].title}
        amount={props.expense[1].amount}
      />
      <ExpesneItem
        date={props.expense[2].date}
        title={props.expense[2].title}
        amount={props.expense[2].amount}
      />
      <ExpesneItem
        date={props.expense[3].date}
        title={props.expense[3].title}
        amount={props.expense[3].amount}
      />
    </div>
  );
}

export default Expenses;
