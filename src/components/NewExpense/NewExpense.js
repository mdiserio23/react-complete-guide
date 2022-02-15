import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseHandler = (expenseDataAdded) => {
    const expense = {
      ...expenseDataAdded,
      id: Math.random().toString(),
    };
    props.addExpense(expense);

    setIsEditing(false);
  };

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancel={stopEditingHandler}/>}
      {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
