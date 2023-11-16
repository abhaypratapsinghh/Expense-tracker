import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";

import NewExpenses from "./component/newExpenses/newExpenses";

let dummy_expense = [

];
const App = () => {
  
  const [expenses, setExpenses] = useState(dummy_expense);


  const addExpenseHandler = (expense) => {
    const upddatedExpense = [expense, ...expenses];
    setExpenses(upddatedExpense);
  }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses item={expenses}></Expenses>
    </div>
  );
};

export default App;
