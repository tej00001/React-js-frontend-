import ExpenseItems from "./components/ExpenseItems";

const expenses = [
  {
    id: "el",
    name: "Food",
    amount: 500,
    date:new Date(2022, 7, 15),
    LocationOfExpenditure: "Restaurent Hyd",
  },
  {
    id: "bl",
    name: "Shopping",
    amount: 5000,
    date:new Date(2022, 10, 12),
    LocationOfExpenditure: "Trends hyd",
  },
  {
    id: "ml",
    name: "Movie",
    amount: 1000,
    date:new Date(2022, 7, 13),
    LocationOfExpenditure: "Imax Hyd",
  },
  {
    id: "cl",
    name: "Tour",
    amount: 20000,
    date: new Date(2022, 4, 12),
    LocationOfExpenditure: "goa trip",
  },
];
function App() {
  return (
    <div>
      <h1>let's start</h1>
      <h2>Focus on React js</h2>
      <ExpenseItems
        name={expenses[0].name}
        amount={expenses[0].amount}
        date={expenses[0].date}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={expenses[1].name}
        amount={expenses[1].amount}
        date={expenses[1].date}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={expenses[2].name}
        amount={expenses[2].amount}
        date={expenses[2].date}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItems>
      <ExpenseItems
        name={expenses[3].name}
        amount={expenses[3].amount}
        date={expenses[3].date}
        LocationOfExpenditure={expenses[3].LocationOfExpenditure}
      ></ExpenseItems>
    </div>
  );
}

export default App;
