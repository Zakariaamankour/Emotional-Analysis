import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartLocation = () => {
  // Data for the chart
  const data = {
    labels: ["UK", "USA", "Dubai", "India", "Russia"], // Labels on the X-axis
    datasets: [
      {
        label: "Demographics", // Legend title
        data: [80, 80, 60, 40, 20], // Heights of the bars
        backgroundColor: "blue", // Bar color
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Show tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on X-axis
        },
      },
      y: {
        grid: {
          display: true, // Show grid lines on Y-axis
        },
        beginAtZero: true, // Start Y-axis from 0
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartLocation;
