import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { id: 0, label: "Gen", value: 0 },
    { id: 1, label: "Feb", value: 0 },
    { id: 2, label: "Mar", value: 0 },
    { id: 3, label: "Apr", value: 0 },
    { id: 4, label: "Mag", value: 0 },
    { id: 5, label: "Giu", value: 0 },
    { id: 6, label: "Lug", value: 0 },
    { id: 7, label: "Ago", value: 0 },
    { id: 8, label: "Set", value: 0 },
    { id: 9, label: "Ott", value: 0 },
    { id: 10, label: "Nov", value: 0 },
    { id: 11, label: "Dic", value: 0 },
  ];

  props.expenses.forEach(expense => {
    const month = expense.date.getMonth();
    chartDataPoints[month].value += expense.amount
  });

  return <Chart dataPoints={chartDataPoints}/>;
};

export default ExpensesChart;
