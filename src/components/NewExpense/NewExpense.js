import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const onSaveExpenseHandler = (expenseDataAdded) => {
        const expense = {
            ...expenseDataAdded,
            id: Math.random().toString()
        }
        props.addExpense(expense);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
