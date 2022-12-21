import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setFormState(false);
  };

  const startEditingHandler = () => {
    setFormState(true);
  };

  const cancelHandler = () => {
    setFormState(false);
  };

  // if (formState === "default") { // moje returny STARE
  //   return <ExpenseDefaultForm setState={setFormState} />;
  // } else {
  //   return (
  //     <div className="new-expense">
  //       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  //     </div>
  //   );
  // }
  // ====================================================
  return (
    // && po tym znaku wykonuje sie dane wyrazenie jesli przed znakiem jest true
    <div className="new-expense">
      {!formState && (
        <button onClick={startEditingHandler}>Add New Expense!</button>
      )}
      {formState && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
