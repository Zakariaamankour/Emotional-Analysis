import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const chartData = {
    followers: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Followers',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    },
    likesSharesComments: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Likes',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Shares',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                backgroundColor: 'rgba(153,102,255,0.4)',
                borderColor: 'rgba(153,102,255,1)',
            },
            {
                label: 'Comments',
                data: [12, 34, 56, 78, 90, 12, 34],
                fill: false,
                backgroundColor: 'rgba(255,159,64,0.4)',
                borderColor: 'rgba(255,159,64,1)',
            },
        ],
    },
    postFrequency: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Post Frequency',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
    likesPerDay: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Likes Per Day',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
    commentsOverTime: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Comments Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
    followsOverTime: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Follows Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
    sharesOverTime: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Shares Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
    savesOverTime: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Saves Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75,192,192,0.4)',
            },
        ],
    },
};

const ChartSlider = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedChart, setSelectedChart] = useState(null);

    const openModal = (chart) => {
        setSelectedChart(chart);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const charts = [
        { type: 'line', data: chartData.followers, title: 'Followers Change Over Time' },
        { type: 'line', data: chartData.likesSharesComments, title: 'Likes/Shares/Comments Change Over Time' },
        { type: 'bar', data: chartData.postFrequency, title: 'Post Frequency' },
        { type: 'bar', data: chartData.likesPerDay, title: 'Likes Per Day' },
        { type: 'bar', data: chartData.commentsOverTime, title: 'Comments Over Time' },
        { type: 'bar', data: chartData.followsOverTime, title: 'Follows Over Time' },
        { type: 'bar', data: chartData.sharesOverTime, title: 'Shares Over Time' },
        { type: 'bar', data: chartData.savesOverTime, title: 'Saves Over Time' },
    ];

    const sliderSettings = {
        dots: true,          // Enables navigation dots below the slider
        infinite: true,      // Infinite scrolling
        speed: 500,          // Animation speed
        slidesToShow: 2,     // Number of charts visible at a time
        slidesToScroll: 1,   // Number of charts to scroll per swipe
        responsive: [
            {
                breakpoint: 768, // For tablets and smaller devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="Performia-graph">
            <Slider {...sliderSettings}>
                {charts.map((chart, index) => (
                    <div key={index} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => openModal(chart)}>
                        <h3>{chart.title}</h3>
                        {chart.type === 'line' && <Line data={chart.data} />}
                        {chart.type === 'bar' && <Bar data={chart.data} />}
                    </div>
                ))}
            </Slider>

            {/* Modal for Enlarged Chart */}
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Chart Modal">
                <button onClick={closeModal} className='close-button'>↙</button>
                <h2>{selectedChart?.title}</h2>
                {selectedChart?.type === 'line' && <Line data={selectedChart.data} />}
                {selectedChart?.type === 'bar' && <Bar data={selectedChart.data} />}
            </Modal>
        </div>
    );
};

export default ChartSlider;
