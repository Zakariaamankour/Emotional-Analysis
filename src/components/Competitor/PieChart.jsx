import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

// Register required chart.js components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
    // Chart data
    const data = {
        labels: ["Reel", "Video", "Picture"],
        datasets: [
            {
                data: [30, 40, 30], // The data values for the chart
                backgroundColor: ["#00CFFF", "#4158D0", "#FF4E42"], // Colors for each section
                borderWidth: 1, // Border width for each slice
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips
            },
            datalabels: {
                display: true, // Enable data labels
                color: "#ffffff", // Label text color
                formatter: (value, context) => {
                    // Display label names instead of numbers
                    return context.chart.data.labels[context.dataIndex];
                },
                font: {
                    weight: "bold",
                },
            },
        },
    };

    return (
        <div style={{ width: "300px", height: "300px", margin: "auto" }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default PieChart;
