// BarChart.js
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

const BarChart = () => {
  // Data for the chart
  const data = {
    labels: ['Shares', 'Comment', 'Likes', 'Saves', 'Follows'], // X-axis labels
    datasets: [
      {
        label: '', // No label for the dataset
        data: [12, 10, 18, 20, 5], // Y-axis data values
        backgroundColor: 'rgba(200, 200, 200, 0.6)', // Bar color (light gray)
        borderColor: 'rgba(200, 200, 200, 1)', // Border color
        borderWidth: 1,
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
      title: {
        display: true,
        text: 'Bar Chart of Engagement Metrics', // Chart title
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines from X-axis
        },
      },
      y: {
        beginAtZero: true, // Y-axis starts from zero
        grid: {
          color: 'rgba(200, 200, 200, 0.2)', // Light gray grid lines
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
