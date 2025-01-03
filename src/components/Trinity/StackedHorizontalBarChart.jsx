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
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

// Register necessary Chart.js components and the datalabels plugin
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const StackedHorizontalBarChart = () => {
    // Data for the stacked bar chart
    const data = {
        labels: ['Post 1', 'Post 2', 'Post 3'], // Categories for each stacked bar
        datasets: [
            {
                label: 'Followers',
                data: [30, 40, 50], // Data for Followers
                backgroundColor: '#007bff', // Blue color for Followers
                datalabels: {
                    display: true,
                    color: 'white',
                    align: 'center',
                    formatter: (value, context) => `${context.chart.data.labels[context.dataIndex]}`,
                },
            },
            {
                label: 'Non-Followers',
                data: [70, 60, 50], // Data for Non-Followers
                backgroundColor: '#f8c471', // Yellow color for Non-Followers
                datalabels: {
                    display: true,
                    color: 'black',
                    align: 'center',
                    formatter: (value, context) => `Non-Followers`,
                },
            },
        ],
    };

    // Configuration for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top', // Position of the legend
            },
            title: {
                display: true,
             },
            datalabels: {
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold',
                    size: 12,
                },
                formatter: (value, context) => `${value}%`, // Display percentage values inside the bars
            },
        },
        indexAxis: 'y', // Makes the bar chart horizontal
        scales: {
            x: {
                stacked: true, // Stacks the bars along the x-axis
                ticks: {
                    callback: (value) => `${value}%`, // Add percentage symbol to the x-axis
                },
            },
            y: {
                stacked: true, // Stacks the bars along the y-axis
            },
        },
    };

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default StackedHorizontalBarChart;
