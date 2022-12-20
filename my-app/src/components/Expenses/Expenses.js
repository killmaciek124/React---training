import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [newEnteredData2, setNewEnteredData2] = useState("2022");

  // RODZIC
  const liftExample = (enteredData2) => {
    console.log("w expenses" + enteredData2);
    setNewEnteredData2(enteredData2);
  };
  console.log("current state w expenses :" + newEnteredData2);

  return (
    <div>
      <ExpensesFilter selected={newEnteredData2} onLiftExample={liftExample} />
      <div className="expenses">
        <ExpenseItem
          title={props.list[0].title}
          amount={props.list[0].amount}
          date={props.list[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.list[1].title}
          amount={props.list[1].amount}
          date={props.list[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.list[2].title}
          amount={props.list[2].amount}
          date={props.list[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.list[3].title}
          amount={props.list[3].amount}
          date={props.list[3].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.list[4].title}
          amount={props.list[4].amount}
          date={props.list[4].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default Expenses;
