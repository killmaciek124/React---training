import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [newEnteredData2, setNewEnteredData2] = useState("2022");
  // powyzej jest STATE z aktualna data SELECTED
  const filteredExpenses = props.list.filter(
    (x) => x.date.getFullYear().toString() === newEnteredData2
  );

  const liftExample = (enteredData2) => {
    console.log("w expenses" + enteredData2);
    setNewEnteredData2(enteredData2);
  };
  console.log("current state w expenses :" + newEnteredData2);
  // tutaj musimy przekazac dane o zaznaczonym roku
  // bo ponizej display'ujemy te

  return (
    <div>
      <ExpensesFilter selected={newEnteredData2} onLiftExample={liftExample} />
      <div className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
