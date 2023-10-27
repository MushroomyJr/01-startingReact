import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    formSwitchHandler();
  };
  const formSwitchHandler = () => {
    setFormState((prevState) => {
      return !prevState;
    });
  };
  return (
    <div className="new-expense">
      {!formState && <button onClick={formSwitchHandler}>add expense</button>}
      {formState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          formSwitch={formSwitchHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
