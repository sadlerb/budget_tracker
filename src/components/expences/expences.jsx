import { useState } from "react";
import {ExpenceList,ExpenseCard,ExpensesContainer} from  "./expences.styles";
import AddExpenceForm from "../add-expense-form/add-expense-form";


const Expenses = ({ expenses, editExpence}) => {
  const [currentExpense,changeCurrentExpense] = useState({name:"",price:0} )
  const [isEditExpenseOpen,changeEditExpenceState] = useState(false)
  const changeValues = (values) => {
    editExpence(values)
  }
  const openForm = (expense) => {
    changeCurrentExpense(expense)
    changeEditExpenceState(true)
  }
  const closeForm = () => {
    changeEditExpenceState(false)
  }
  return (
    <ExpensesContainer>
      <h2>Monthly Budget</h2>
      {isEditExpenseOpen && <AddExpenceForm closeForm={closeForm} confirmForm={changeValues} expenseValues={currentExpense}></AddExpenceForm>}
      <ExpenceList>
        {expenses.map((expense) => {
          return (
            <ExpenseCard key={expense.id} onClick={() => openForm(expense)}>
              <p>{expense.name}</p>
              <p className="amount">{expense.amount}</p>
            </ExpenseCard>
          );
        })}
      </ExpenceList>

    </ExpensesContainer>
  );
};



export default Expenses;
