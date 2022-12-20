import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";

// NOTE : FORMAT DOCUMENT SHORTCUT => CTRL + SHIFT + I/L
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 55, date: new Date(2002, 2, 25) },
    { title: "Car Insurance", amount: 55, date: new Date(2002, 2, 25) },
    { title: "Car Insurance", amount: 55, date: new Date(2002, 2, 25) },
    { title: "Car Insurance", amount: 55, date: new Date(2002, 2, 25) },
    { title: "Car Insurance", amount: 55, date: new Date(2002, 2, 25) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App");
    console.log(expense);
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
