import React, { useState } from "react";

import "./ExpensesFilter.css";
// CEL ZADANIA:
// Dane o tym jaki miesiac wybierze uzytkownik w naszej tabeli miesiecy
// maja pojawic sie w pliku Expenses.js, a tam przechowywac jako state

const ExpensesFilter = (props) => {
  const [enteredDate2, setEnteredDate2] = useState("");

  // DZIECKO EXPENSES
  const onChangeHandler = (event) => {
    console.log(event.target.value); // nasza wartosc CZYLI ROK KTORY WYBIERAMY
    console.log("props" + props);
    // setEnteredDate2(event.target.value);
    // console.log("x" + enteredDate2);
    props.onLiftExample(event.target.value);
    // tutaj ustal zmiane statea:
    props.onCurrentChosenDate(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
