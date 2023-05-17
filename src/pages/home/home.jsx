import { useEffect, useState } from "react";

import Transactions from "../../components/transaction/transactions";
import Expenses from "../../components/expences/expences";
import PieChart from "../../components/pie-chart/pie-chart";


import { HomeContent, HomeContainer, EditButton, GraphContainer } from "./home.styles";
import MultiForm from "../../components/multi-form/multi-form";

const Home = () => {

  const [transactions, setTransactions] = useState([])
  const [isMultiFormOpen, setIsMultiFormOpen] = useState(false);
  const [formValues, setFormValues] = useState({})
  const [spentBalance, setSpentBalance] = useState(0)
    
  
  const [expenses, setExpenses] = useState([
    { id: "CAT1", name: "Food", amount: 400 },
    { id: "CAT2", name: "Entertainment", amount: 600 },
    { id: "CAT3", name: "Car", amount: 1000 },
  ]);
  const [mainBalance, setMainBalance] = useState(10000);



  const chartData = {
    labels: expenses.map(({ name }) => name),
    datasets: [
      {
        label: "Amount",
        data: expenses.map(({ amount }) => amount),
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

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await(
        await fetch("http://localhost:5050/transactions",{
          method:"GET",
          headers:{"Content-Type": "application/json",}
        })
      ).json()
      
      setTransactions(data)
      const spentBalance = transactions.reduce((s, a) => s + a.transaction, 0)
      console.log(spentBalance)
      setSpentBalance(transactions.reduce((s, a) => s + a.transaction, 0))
    }
    fetchTransactions()
    
  },[])

  const editExpence = (values) => {
    const index = expenses.findIndex(x => x.id === values.id)
    var newArray = [...expenses]
    newArray[index] = values
    setExpenses(newArray)
    console.log(index, newArray)
  }

  const editIncomeForm = () => {
    setFormValues({
      "type": "EditInc",
      "submit": editIncome,
      "props": { "currentValue": mainBalance }
    })
    setIsMultiFormOpen(true)
  }
  const openExpencesForm = () => {
    setFormValues({
      "type": "AddExp",
      "submit": addExpence,
      "props": null
    })
    setIsMultiFormOpen(true)

  }
  const openAddTransactionForm = () => {
    setFormValues({
      "type": "AddTrans",
      "submit": addTransaction,
      "props": { "categories": expenses }
    })
    setIsMultiFormOpen(true)
  };

  const closeMultiForm = () => {
    setIsMultiFormOpen(false)
  }

  const addExpence = (values) => {
    
    setExpenses([...expenses, { name: values.name, amount: parseFloat(values.amount).toFixed(2), id: "CAT" + expenses.length + 1 }])
    
  }


  const addTransaction = (values) => {
    setSpentBalance((parseFloat(spentBalance) + parseFloat(values.Value)).toFixed(2));
    setTransactions([...transactions, { Transaction: parseFloat(values.Value).toFixed(2), Name: values.Name, category: values.category }]);

  };

  const editIncome = ({ value }) => {
    setMainBalance(value)
  }



  return (
    <HomeContainer>
      {isMultiFormOpen && (<MultiForm submitAction={formValues.submit} closeAction={closeMultiForm} type={formValues.type} props={formValues.props} />)}
      <HomeContent disabled={isMultiFormOpen}>
        <div>
          <span><EditButton variant="outline-primary" className="reset">Start New Period</EditButton></span>
          <span><EditButton variant="outline-primary" className="reset">Reports</EditButton></span>
        </div>
        <div className="balance">
          <h2>Remaining Balance: {(mainBalance - spentBalance).toFixed(2)}</h2>
          <div className="income">
            <h3>Income: ${mainBalance}</h3>
            <EditButton variant="outline-primary" size="sm" onClick={editIncomeForm} className="m-2">Edit Income</EditButton>
          </div>
          <h3>Spent: ${spentBalance}</h3>
        </div>
        <div>
          <GraphContainer>
            <PieChart chartData={chartData}></PieChart>
          </GraphContainer>
          <Expenses expenses={expenses} editExpence={editExpence} />
          <EditButton onClick={openExpencesForm} className="my-3">Add Expense</EditButton>
        </div>
        <Transactions data={transactions} />
        <EditButton onClick={openAddTransactionForm}>Add Transaction</EditButton>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
