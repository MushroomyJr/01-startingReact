import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  // eslint-disable-next-line
  const dataPointValues = props.dataPoints.map((dataP) => dataP.value);
  const totalMax = Math.max(...dataPointValues);
  //console.log(props.dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
