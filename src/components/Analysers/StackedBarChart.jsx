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

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StackedBarChart = () => {
  const data = {
    labels: ['Profile', 'Follows', 'CTR'], // Y-axis labels
    datasets: [
      {
        label: 'Post 1',
        data: [10, 20, 30], // Blue segment
        backgroundColor: '#007bff', // Blue
      },
      {
        label: 'Post 2',
        data: [15, 25, 35], // Gray segment
        backgroundColor: '#d3d3d3', // Gray
      },
      {
        label: 'Post 3',
        data: [5, 10, 15], // Remaining gray
        backgroundColor: '#d3d3d3', // Gray
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Horizontal bar
    plugins: {
      legend: { display: false }, // Hide legend
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
