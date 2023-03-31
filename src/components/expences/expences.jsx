import {ExpenceList,ExpenseCard,ExpensesContainer} from  "./expences.styles";


const Expenses = ({ expenses }) => {
  return (
    <ExpensesContainer>
      <h2>Monthly Budget</h2>
      <ExpenceList>
        {expenses.map((expense) => {
          return (
            <ExpenseCard key={expense.id}>
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
