// PieCharts.js
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts = () => {
  // Data for the first pie chart (Audience Age)
  const ageData = {
    labels: ["18-24", "25-34"], // Labels for pie slices
    datasets: [
      {
        label: "Audience Age",
        data: [50, 50], // Data values (percentages)
        backgroundColor: ["#003f87", "#ff5722"], // Colors for the slices
        borderWidth: 0, // No borders
      },
    ],
  };

  // Data for the second pie chart (Audience Gender)
  const genderData = {
    labels: ["Male", "Female", "Non-binary", "Other"],
    datasets: [
      {
        label: "Audience Gender",
        data: [40, 30, 20, 10], // Data values (percentages)
        backgroundColor: ["#00bcd4", "#673ab7", "#8bc34a", "#f44336"], // Colors for the slices
        borderWidth: 0, // No borders
      },
    ],
  };

  // Options for both pie charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Display the legend at the top
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
      {/* First Pie Chart */}
      <div style={{ width: "300px", textAlign: "center" }}>
        <Pie data={ageData} options={{ ...options, plugins: { ...options.plugins, title: { text: "Piechart of audience age", display: true } } }} />
      </div>
      {/* Second Pie Chart */}
      <div style={{ width: "300px", textAlign: "center" }}>
        <Pie data={genderData} options={{ ...options, plugins: { ...options.plugins, title: { text: "Piechart of audience gender", display: true } } }} />
      </div>
    </div>
  );
};

export default PieCharts;
