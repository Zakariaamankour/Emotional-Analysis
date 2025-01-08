import React, { useState } from 'react';
import './Heatmap.css';

const Heatmap = () => {
    const metricsData = {
        Likes: [
            [2, 3, 3, 1, 3, 4, 18, 18, 18, 19, 19, 22, 15, 17, 31, 18, 19, 20, 48, 48, 51, 51, 16, 32, 38],
            [10, 1, 3, 5, 5, 2, 10, 12, 16, 24, 17, 31, 25, 29, 29, 23, 28, 20, 41, 40, 76, 54, 36, 34],
            [9, 3, 1, 2, 2, 4, 11, 8, 21, 28, 28, 21, 26, 29, 26, 42, 41, 42, 44, 46, 50, 50, 36, 36],
            [5, 2, 1, 5, 3, 4, 14, 13, 30, 20, 20, 18, 43, 29, 30, 43, 29, 28, 46, 14, 26, 19, 39, 19],
            [20, 13, 4, 5, 4, 2, 7, 16, 15, 18, 14, 17, 18, 31, 26, 34, 36, 34, 42, 36, 42, 44, 16, 16],
            [1, 1, 1, 1, 0, 0, 6, 12, 12, 18, 18, 24, 27, 30, 26, 30, 32, 40, 42, 40, 40, 42, 42, 5],
            [7, 0, 1, 1, 1, 5, 4, 18, 9, 24, 29, 24, 30, 30, 32, 40, 40, 40, 40, 41, 41, 41, 41, 38],
        ],
        Comments: [
            [1, 2, 1, 4, 3, 8, 6, 9, 10, 15, 12, 16, 18, 19, 22, 24, 21, 20, 16, 10, 5, 12, 6, 4],
            // Add more data for each row...
        ],
        Shares: [
            [2, 5, 3, 1, 2, 3, 7, 8, 12, 15, 10, 8, 11, 9, 8, 7, 6, 4, 2, 5, 6, 10, 8, 9],
            // Add more data for each row...
        ],
        Saves: [
            [0, 1, 2, 1, 1, 2, 3, 3, 4, 5, 4, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 2, 1, 0],
            // Add more data for each row...
        ],
        Follows: [
            [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 5, 5, 4, 4, 3, 2, 1, 1, 2, 2, 3, 4],
            // Add more data for each row...
        ],
        Reach: [
            [5, 6, 7, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 30, 28, 26, 24, 22, 20, 18, 16],
            // Add more data for each row...
        ],
    };

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const hours = [
        '12AM', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
        '12PM', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11PM'
    ];

    const [selectedMetric, setSelectedMetric] = useState('Likes');

    const getColor = (value) => {
        if (value === 0) return 'white';
        if (value <= 10) return '#E3F2FD';
        if (value <= 20) return '#90CAF9';
        if (value <= 30) return '#42A5F5';
        if (value <= 50) return '#1E88E5';
        return '#0D47A1';
    };

    return (
        <div className="heatmap-container">
            {/* Header */}




            {/* Metric Buttons */}
            <div className="metric-buttons">
                {Object.keys(metricsData).map((metric) => (
                    <button
                        key={metric}
                        className={selectedMetric === metric ? 'active' : ''}
                        onClick={() => setSelectedMetric(metric)}
                    >
                        {metric}
                    </button>
                ))}
            </div>

            <div className="heatmap-image-title">
                <div className="heatmap-header-image">
                    <img src="../images/brainblack.png" alt="Logo" className="heatmap-logo" />
                    <p className='heatmap-header-image-text'>C7.AI</p>
                </div>
                <h2 className='heatmap-container-title'>Select up to 2 metrics to view</h2>
            </div>

            {/* Heatmap */}
            <div className="heatmap">
                <div className="heatmap-header">
                    {hours.map((hour, index) => (
                        <div key={index} className="heatmap-cell heatmap-cell-header">
                            {hour}
                        </div>
                    ))}
                </div>
                {metricsData[selectedMetric].map((row, rowIndex) => (
                    <div key={rowIndex} className="heatmap-row">
                        <div className="heatmap-cell heatmap-cell-header">{days[rowIndex]}</div>
                        {row.map((value, colIndex) => (
                            <div
                                key={colIndex}
                                className="heatmap-cell"
                                style={{ backgroundColor: getColor(value) }}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="legend">
                <span>0</span>
                <span style={{ backgroundColor: '#F2FBFE' }}></span>
                <span style={{ backgroundColor: '#D2EDFF' }}></span>
                <span style={{ backgroundColor: '#5CB3FF' }}></span>
                <span style={{ backgroundColor: '#0B6FE8' }}></span>
                <span style={{ backgroundColor: '#0253B6' }}></span>
                <span>50+</span>
            </div>
        </div>
    );
};

export default Heatmap;
