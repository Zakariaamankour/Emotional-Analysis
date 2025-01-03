import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart elements
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SpiderGraph = () => {
  // Data for the radar chart
  const data = {
    labels: ["Picture", "Name", "Bio", "Link", "Music", "Banner"],
    datasets: [
      {
        label: "Profile Analysis",
        data: [4, 5, 3, 4, 2, 5], // Replace with dynamic values if needed
        backgroundColor: "rgba(0, 112, 255, 0.2)",
        borderColor: "#0070FF",
        borderWidth: 2,
        pointBackgroundColor: "#0070FF",
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "400px" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderGraph;
