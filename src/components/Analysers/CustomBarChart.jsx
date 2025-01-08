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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomBarChart = () => {
  // Data for the graph
  const data = {
    labels: ["Shares", "Comment", "Likes", "Saves", "Follows"], // X-axis labels
    datasets: [
      {
        label: "Dataset 1",
        data: [12, 15, 14, 16, 13], // Values for first dataset
        backgroundColor: "#0033CC", // Dark blue
      },
      {
        label: "Dataset 2",
        data: [13, 14, 15, 14, 12], // Values for second dataset
        backgroundColor: "#0055FF", // Medium blue
      },
      {
        label: "Dataset 3",
        data: [14, 13, 16, 15, 14], // Values for third dataset
        backgroundColor: "#66A3FF", // Light blue
      },
    ],
  };

  // Options for customization
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend to match the example
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical gridlines
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false, // Hide top gridline
        },
      },
    },
  };

  return (
    <div style={{ width: "600px", height: "400px", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomBarChart;
