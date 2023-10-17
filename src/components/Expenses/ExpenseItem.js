import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
//import { useState } from "react";
const ExpesneItem = (props) => {
  //const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    //setTitle(props.title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};

export default ExpesneItem;
