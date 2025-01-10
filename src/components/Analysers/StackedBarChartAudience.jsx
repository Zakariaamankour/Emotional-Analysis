// StackedBarChartAudience.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChartAudience = () => {
  // Data for the chart
  const data = {
    labels: ['Average', 'This post'], // Labels for the Y-axis (stacked categories)
    datasets: [
      {
        label: 'Followers',
        data: [30, 40], // Data values for followers
        backgroundColor: 'rgba(33, 150, 243, 0.8)', // Blue bar color
      },
      {
        label: 'Non-followers',
        data: [50, 30], // Data values for non-followers
        backgroundColor: 'rgba(233, 30, 99, 0.8)', // Pink bar color
      },
      {
        label: 'Other',
        data: [20, 30], // Data values for "Other"
        backgroundColor: 'rgba(255, 193, 7, 0.8)', // Yellow bar color
      },
    ],
  };

  // Options for the chart
  const options = {
    indexAxis: 'y', // Makes the chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Places the legend at the top
      },
      title: {
        display: true,
        text: 'Stacked graph of followers vs non.', // Title of the chart
      },
    },
    scales: {
      x: {
        stacked: true, // Enables stacking on the X-axis
        ticks: {
          callback: (value) => `${value}%`, // Display percentage values
        },
      },
      y: {
        stacked: true, // Enables stacking on the Y-axis
        grid: {
          display: false, // Remove grid lines from Y-axis
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChartAudience;
