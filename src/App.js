import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "1",
      title: "Computer",
      amount: 1000,
      date: new Date(2021, 3, 10),
    },
    {
      id: "2",
      title: "Aspirapolvere",
      amount: 400,
      date: new Date(2021, 5, 23),
    },
    {
      id: "3",
      title: "Nuova tv",
      amount: 2000,
      date: new Date(2021, 10, 20),
    },
    {
      id: "4",
      title: "Zaino",
      amount: 50,
      date: new Date(2021, 2, 15),
    },
  ];
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
