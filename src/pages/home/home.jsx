import { useState } from "react";

import Transactions from "../../components/transaction/transactions";
import Expenses from "../../components/expences/expences";
import AddTransactionForm from "../../components/add-transaction-form/add-transaction-form";

import "./home.scss";

const Home = () => {
  const [transactions, setTransactions] = useState([
    { Transaction: 100, Name: "Transaction Name", id: 0 },
    { Transaction: 244.24, Name: "Transaction Name", id: 2 },
    { Transaction: 600, Name: "Transaction Name", id: 1 },
  ]);
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [spentBalance, setSpentBalance] = useState(
    transactions.reduce((s, a) => s + a.Transaction, 0)
  );
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Food", amount: 400 },
    { id: 2, name: "Entertainment", amount: 600 },
    { id: 3, name: "Car", amount: 1000 },
  ]);
  const mainBalance = 10000;

  

  const openAddTransactionForm = () => {
    setIsTransactionFormOpen(true);
  };
  const closeTransactionForm = () => {
    setIsTransactionFormOpen(false);
  };
  const addTransaction = (values) => {
    setSpentBalance((parseFloat(spentBalance) + parseFloat(values.value)).toFixed(2));
    setTransactions([...transactions,{Transaction:values.value,Name:values.name}]);
  };
  return (
    <div className="home-container">
      {isTransactionFormOpen && (
        <AddTransactionForm
          closeTransactionForm={closeTransactionForm}
          addTransaction={addTransaction}
        />
      )}
      <div className="home" disabled={isTransactionFormOpen}>
        <h2>Remaining Balance: {(mainBalance - spentBalance).toFixed(2)}</h2>
        <h3>Income: ${mainBalance}</h3>
        <h3>Spent: ${spentBalance}</h3>
        <h3>Total Bills: $500</h3>
        <div>
          <div className="graph">
            <span></span>
          </div>
          <Expenses expenses={expenses} />
        </div>
        <Transactions data={transactions} />
        <button onClick={openAddTransactionForm}>Add Transaction</button>
      </div>
    </div>
  );
};

export default Home;
