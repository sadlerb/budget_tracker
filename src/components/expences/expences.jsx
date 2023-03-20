import "./expences.scss";

const Expenses = ({ expenses }) => {
  return (
    <div className="expences">
      <h2>Monthly Budget</h2>
      <div className="expence-container">
        {expenses.map((expense) => {
          return (
            <div key={expense.id} className="expence-card">
              <p>{expense.name}</p>
              <p className="amount">{expense.amount}</p>
            </div>
          );
        })}
        <button onClick={addExpense}>
          <span>add expense</span>
        </button>
      </div>
    </div>
  );
};

const addExpense = () => {
  console.log("expence added");
};

export default Expenses;
