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

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SpiderGraph = () => {
  // Data for the radar chart
  const data = {
    labels: [
      "Physics",
      "Maths",
      "Sport",
      "English",
      "Geography",
      "Art",
      "Programming",
      "Music",
      "Biology",
    ], // Labels based on the categories in your image
    datasets: [
      {
        label: "Skills Analysis",
        data: [12, 10, 8, 7, 5, 6, 4, 18, 10], // Custom values for each label
        backgroundColor: "rgba(0, 112, 255, 0.2)", // Fill color
        borderColor: "#0070FF", // Border color
        borderWidth: 2,
        pointBackgroundColor: "#0070FF", // Point color
      },
    ],
  };

  // Options for customization
  const options = {
    scales: {
      r: {
        angleLines: {
          color: "#EAEAEA", // Light gridlines
        },
        suggestedMin: 0,
        suggestedMax: 20, // Maximum value
        ticks: {
          stepSize: 5, // Values increment
          backdropColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // Legend position
      },
    },
  };

  return (
    <div style={{ width: "500px", height: "500px", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderGraph;
