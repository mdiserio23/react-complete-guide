import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const totalMaxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value))
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaxValue}
          key={dataPoint.id}
        />
      ))}
    </div>
  );
};

export default Chart;
