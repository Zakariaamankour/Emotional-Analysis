import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ title, data, colors }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: title,
        data: data.values,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Pie data={chartData} />
      <p>{title}</p>
    </div>
  );
};

export default PieChartComponent;
