import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

// task: zrob filter do selecta z datami :
// hint 1 : use filter
// hint 2: keep it simple ( nie zmieniaj arraya)

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance3",
    amount: 55,
    date: new Date(2022, 2, 25),
  },
  {
    id: "e2",
    title: "Car Insurance4",
    amount: 55,
    date: new Date(2021, 2, 25),
  },
  { id: "e3", title: "Car Insurance", amount: 55, date: new Date(2020, 2, 25) },
  {
    id: "e4",
    title: "Car Insurance5",
    amount: 55,
    date: new Date(2019, 2, 25),
  },
  { id: "e5", title: "Car Insurance", amount: 55, date: new Date(2019, 2, 25) },
];

// NOTE : FORMAT DOCUMENT SHORTCUT => CTRL + SHIFT + I/L

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //setExpenses([expense, ...expenses]); // spread operator (...) na arraye i obiekty
    // tlumaczenie lini wyzej to => dodajemy expense i reszta expenses taka sama..
    // ... z nadpisaniem expense
    // CZYSTSZA WERSJA TEGO CO WYZEJ : (bo mamy dostep do prev stanu)
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <Card>PRZYKLAD CARDA! WSZYSTKIE CSS </Card>

      {/* <div className="dupa"> nie dziala props</div>
      <div className="card"> dziala props</div>
      <div className="card i chuj">dziala props/ new EXPENSE</div> */}
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses list={expenses}></Expenses>
    </div>
  );
}

export default App;
