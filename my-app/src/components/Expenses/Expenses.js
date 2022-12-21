import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [newEnteredData2, setNewEnteredData2] = useState("2022");
  const [currentDate, setCurrentDate] = useState("");

  const currentChosenDate = (chosenDate) => {
    setCurrentDate(chosenDate);
    console.log("chosenDATE" + chosenDate);
  };
  // RODZIC
  const liftExample = (enteredData2) => {
    console.log("w expenses" + enteredData2);
    setNewEnteredData2(enteredData2);
  };
  console.log("current state w expenses :" + newEnteredData2);
  // tutaj musimy przekazac dane o zaznaczonym roku
  // bo ponizej display'ujemy te elementy
  return (
    <div>
      <ExpensesFilter
        onCurrentChosenDate={currentChosenDate}
        selected={newEnteredData2}
        onLiftExample={liftExample}
      />
      <div className="expenses">
        {props.list
          .filter((x) => x.date.getFullYear().toString() === currentDate)
          // x.date to dane typu newDate(miesiac dzien rok). wyciagamy rok. i do stringa
          .map((expense) => (
            <ExpenseItem
              key={expense.id} // zapobiega bugom przy dodawaniu nowego elementu do listy
              //... zawsze to dodawaj przy mappingu listy
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </div>
    </div>
  );
}

export default Expenses;
