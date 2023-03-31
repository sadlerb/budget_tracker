import { useState } from "react";

import Transactions from "../../components/transaction/transactions";
import Expenses from "../../components/expences/expences";
import AddTransactionForm from "../../components/add-transaction-form/add-transaction-form";
import AddExpenceForm from "../../components/add-expense-form/add-expense-form";
import PieChart from "../../components/pie-chart/pie-chart";

import {ReactComponent as EditIcon} from "../../assets/edit.svg";

import {HomeContent,HomeContainer,EditButton,GraphContainer} from "./home.styles";

const Home = () => {
  const [transactions, setTransactions] = useState([
    { Transaction: 100, Name: "Transaction Name", id: 0 },
    { Transaction: 244.24, Name: "Transaction Name", id: 2 },
    { Transaction: 600, Name: "Transaction Name", id: 1 },
  ]);
  const [isTransactionFormOpen, setIsTransactionFormOpen] = useState(false);
  const [isExpencesFormOpen, setIsExpencesFormOpen] = useState(false);
  const [spentBalance, setSpentBalance] = useState(
    transactions.reduce((s, a) => s + a.Transaction, 0)
    );
  const [expenses, setExpenses] = useState([
      { id: 1, name: "Food", amount: 400 },
      { id: 2, name: "Entertainment", amount: 600 },
      { id: 3, name: "Car", amount: 1000 },
    ]);
  const mainBalance = 10000;
    
  const chartData = {
      labels:expenses.map(({name}) =>name),
      datasets:[
        {
          label:"Amount",
          data: expenses.map(({amount})=>amount),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }
      ]
    }
  
  const openExpencesForm = () => {
    setIsExpencesFormOpen(true)
   
  }
  const closeExpencesForm = () => {
    setIsExpencesFormOpen(false)
  }

  const addExpence = (values) => {
      setExpenses([...expenses,{name:values.name,amount:values.price}])
  }

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
    <HomeContainer>
      {isTransactionFormOpen && (
        <AddTransactionForm
          closeTransactionForm={closeTransactionForm}
          addTransaction={addTransaction}
        />
      )}
      {isExpencesFormOpen && < AddExpenceForm closeForm={closeExpencesForm} confirmForm={addExpence}/>}
      <HomeContent disabled={isTransactionFormOpen || isExpencesFormOpen}>
        <div className="balance">
          <h2>Remaining Balance: {(mainBalance - spentBalance).toFixed(2)}</h2>
          <div className="income">
            <h3>Income: ${mainBalance}</h3>
            <button>Edit Income</button>
          </div>
          <h3>Spent: ${spentBalance}</h3>
          <h3>Total Bills: $500</h3>
        </div>
        <div>
          <PieChart chartData={chartData}></PieChart>
          <GraphContainer>
            <span></span>
          </GraphContainer>
          <Expenses expenses={expenses}  />
          <EditButton onClick={openExpencesForm}>Add Expense</EditButton>
        </div>
        <Transactions data={transactions} />
        <EditButton onClick={openAddTransactionForm}>Add Transaction</EditButton>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
