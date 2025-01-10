import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SpiderChart = () => {
  // Data for the spider chart
  const data = {
    labels: [
      'Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Part 6', 'Part 7', 
      'Part 8', 'Part 9', 'Part 10', 'Part 11', 'Part 12', 'Part 13', 'Part 14',
      'Part 15', 'Part 16', 'Part 17', 'Part 18', 'Part 19', 'Part 20', 'Part 21', 
      'Part 22', 'Part 23', 'Part 24', 'Part 25'
    ],
    datasets: [
      {
        label: 'Data Set',
        data: Array(25).fill(30), // Example: All points set to 30
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        borderColor: '#FFA500',
        borderWidth: 2,
      },
    ],
  };

  // Chart configuration options
  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          circular: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderChart;
