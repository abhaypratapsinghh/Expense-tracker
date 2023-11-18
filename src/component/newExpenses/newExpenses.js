import React from "react";

import "./newExpenses.css";

import ExpenseForm from "./ExpenseForm";

const newExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
    } 
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  );
};

export default newExpenses;
