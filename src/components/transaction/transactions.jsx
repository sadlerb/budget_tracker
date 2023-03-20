import "./transactions.scss";

const Transactions = ({ data }) => {
  return (
    <div className="transaction-list">
      {data.map((transaction) => {
        return (
          <div key={transaction.id}>
            <p>{transaction.Name}</p>
            <p className="amount">${transaction.Transaction}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
