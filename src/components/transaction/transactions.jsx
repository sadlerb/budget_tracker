import {TransactionList} from "./transactions.styles";

const Transactions = ({ data }) => {
  return (
    <TransactionList>
      {data.map((transaction,index) => {
        return (
          <div key={index}>
            <p>{transaction.name}</p>
            <p className="amount">${transaction.transaction}</p>
            <p>{transaction.category}</p>
          </div>
        );
      })}
    </TransactionList>
  );
};

export default Transactions;
