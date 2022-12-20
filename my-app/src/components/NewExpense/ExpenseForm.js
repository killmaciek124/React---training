import "./ExpenseForm.css";
import React, { useState } from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(""); // Z TEGO KORZYSTAJ
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    console.log(event.target.value); // W TEJ VALUE PRZECHOWUJEMY TO CO WPISZEMY W INPUT..
    // ... (onChange linia 13 input)
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // }); // lepsza opcja setUserInput: (z dostepem do prev state!)

    // setUserInput((prevState) => {
    // Z TEGO KORZYSTAJ
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault(); // zapobiega refreshowi strony

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    props.onSaveExpenseData(expenseData); // funkcja parenta z danymi childa!!!
    setEnteredAmount(""); // clearowanie inputow po submicie, ...
    setEnteredDate(""); // .. + <title value={enteredTitle}/> (TWO WAY BINDING)
    setEnteredTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>title</label>
        <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        {/*onChange=kiedy cos sie zmieni w inpucie*/}
      </div>
      <div className="new-expense__control">
        <label>amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
          value={enteredAmount}
        />
      </div>
      <div className="new-expense__control">
        <label>date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
          value={enteredDate}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense!</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
