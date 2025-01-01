import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: [
      'Mar 2-8, 2020', 
      'Apr 6-12, 2020', 
      'May 7, 2020', 
      'Jun 15-21, 2020', 
      'Jul 20-26, 2020', 
      'Aug 24-30, 2020'
    ],
    datasets: [
      {
        label: 'Ash St.',
        data: [5000, 5200, 5400, 5800, 5600, 5700],
        borderColor: '#6DAEDB',
        backgroundColor: 'transparent',
        pointRadius: 5,
        pointBackgroundColor: '#6DAEDB',
      },
      {
        label: 'Cherry St.',
        data: [4800, 4900, 5000, 5200, 5100, 5200],
        borderColor: '#F4A261',
        backgroundColor: 'transparent',
        pointRadius: 5,
        pointBackgroundColor: '#F4A261',
      },
      {
        label: 'Oak Ct.',
        data: [4000, 4200, 4400, 4600, 4500, 4700],
        borderColor: '#A29BFE',
        backgroundColor: 'transparent',
        pointRadius: 5,
        pointBackgroundColor: '#A29BFE',
      },
      {
        label: 'Pine St.',
        data: [5500, 5600, 5700, 5900, 5800, 6000],
        borderColor: '#81C784',
        backgroundColor: 'transparent',
        pointRadius: 5,
        pointBackgroundColor: '#81C784',
      },
      {
        label: 'Redwood Rd.',
        data: [4300, 4400, 4500, 4600, 4500, 4400],
        borderColor: '#E57373',
        backgroundColor: 'transparent',
        pointRadius: 5,
        pointBackgroundColor: '#E57373',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value / 1000 + 'K';
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '800px', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
