import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
        <div className="expense-item__Location">
          at {props.LocationOfExpenditure}
        </div>
      </div>
    </div>
  );
}
export default ExpenseItems;
