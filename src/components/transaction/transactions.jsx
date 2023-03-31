import {TransactionList} from "./transactions.styles";

const Transactions = ({ data }) => {
  return (
    <TransactionList>
      {data.map((transaction) => {
        return (
          <div key={transaction.id}>
            <p>{transaction.Name}</p>
            <p className="amount">${transaction.Transaction}</p>
          </div>
        );
      })}
    </TransactionList>
  );
};

export default Transactions;
