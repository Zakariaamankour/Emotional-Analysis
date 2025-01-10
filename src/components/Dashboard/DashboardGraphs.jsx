import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import React Slick
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const DashboardGraphs = () => {
    const [followersChartData, setFollowersChartData] = useState({
        labels: [],
        datasets: [{
            label: 'Followers Change Over Time',
            data: [],
            borderColor: '#00A4FF',
            backgroundColor: 'rgba(0, 164, 255, 0.2)',
            tension: 0.4,
            fill: true,
        }],
    });

    const [engagementChartData, setEngagementChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Likes',
                data: [],
                borderColor: '#003ABA',
                backgroundColor: 'rgba(0, 58, 186, 0.2)',
                fill: true,
            },
            {
                label: 'Comments',
                data: [],
                borderColor: '#7BB6FF',
                backgroundColor: 'rgba(123, 182, 255, 0.2)',
                fill: true,
            },
            {
                label: 'Shares',
                data: [],
                borderColor: '#0B66FF',
                backgroundColor: 'rgba(11, 102, 255, 0.2)',
                fill: true,
            },
        ],
    });

    const [postFrequencyChartData, setPostFrequencyChartData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Post Frequency',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#00A4FF',
        }],
    });

    const [likesPerDayChartData, setLikesPerDayChartData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Likes Per Day',
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#003ABA',
        }],
    });


    const [data, setData] = useState([
        { date: "2024-01-01", followers: 1200, likes: 100, comments: 30, shares: 50 },
        { date: "2024-02-01", followers: 1500, likes: 200, comments: 60, shares: 100 },
        { date: "2024-03-01", followers: 1700, likes: 300, comments: 90, shares: 150 },
        { date: "2024-04-01", followers: 2100, likes: 400, comments: 120, shares: 200 },
        { date: "2024-05-01", followers: 2500, likes: 500, comments: 150, shares: 250 },
    ]);

    const [dateRange, setDateRange] = useState({
        start: "2024-01-01",
        end: "2024-05-01",
    });



    const calculateFollowersChange = (data) => {
        if (!Array.isArray(data)) return [];
        return data.map(item => item.followers || 0);
    };

    const calculateEngagement = (data) => {
        if (!Array.isArray(data)) return [];
        return data.map(item => ({
            likes: item.likes || 0,
            comments: item.comments || 0,
            shares: item.shares || 0,
        }));
    };

    const calculatePostFrequency = (data) => {
        const frequency = [0, 0, 0, 0, 0, 0, 0];
        if (!Array.isArray(data)) return frequency;

        data.forEach(item => {
            const dayOfWeek = item.date ? new Date(item.date).getDay() : null;
            if (dayOfWeek !== null) {
                frequency[dayOfWeek] += 1;
            }
        });

        return frequency;
    };

    const calculateLikesPerDay = (data) => {
        const likesPerDay = [0, 0, 0, 0, 0, 0, 0];
        if (!Array.isArray(data)) return likesPerDay;

        data.forEach(item => {
            const dayOfWeek = item.date ? new Date(item.date).getDay() : null;
            if (dayOfWeek !== null) {
                likesPerDay[dayOfWeek] += item.likes || 0;
            }
        });

        return likesPerDay;
    };


    useEffect(() => {
        if (!Array.isArray(data) || data.length === 0 || !dateRange) {
            console.warn("Invalid data or dateRange");
            return;
        }

        const { start, end } = dateRange;
        if (!start || !end) {
            console.warn("Invalid date range values");
            return;
        }

        const filteredData = data.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate >= new Date(start) && itemDate <= new Date(end);
        });

        if (filteredData.length === 0) {
            console.warn("No data found within the date range");
            return;
        }

        const followersYValues = calculateFollowersChange(filteredData);
        const followersXValues = filteredData.map(item => item.date || "");

        setFollowersChartData({
            labels: followersXValues,
            datasets: [{
                label: 'Followers Change Over Time',
                data: followersYValues,
                borderColor: '#00A4FF',
                backgroundColor: 'rgba(0, 164, 255, 0.2)',
                tension: 0.4,
                fill: true,
            }],
        });

        const engagementValues = calculateEngagement(filteredData);
        const engagementXValues = filteredData.map(item => item.date || "");

        setEngagementChartData({
            labels: engagementXValues,
            datasets: [
                {
                    label: 'Likes',
                    data: engagementValues.map(item => item.likes),
                    borderColor: '#003ABA',
                    backgroundColor: 'rgba(0, 58, 186, 0.2)',
                    fill: true,
                },
                {
                    label: 'Comments',
                    data: engagementValues.map(item => item.comments),
                    borderColor: '#7BB6FF',
                    backgroundColor: 'rgba(123, 182, 255, 0.2)',
                    fill: true,
                },
                {
                    label: 'Shares',
                    data: engagementValues.map(item => item.shares),
                    borderColor: '#0B66FF',
                    backgroundColor: 'rgba(11, 102, 255, 0.2)',
                    fill: true,
                },
            ],
        });

        const postFrequencyValues = calculatePostFrequency(filteredData);
        setPostFrequencyChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Post Frequency',
                data: postFrequencyValues,
                backgroundColor: '#00A4FF',
            }],
        });

        const likesPerDayValues = calculateLikesPerDay(filteredData);
        setLikesPerDayChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Likes Per Day',
                data: likesPerDayValues,
                backgroundColor: '#003ABA',
            }],
        });

    }, [data, dateRange]);


    // React Slick settings
    // React Slick settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Default number of slides for larger screens
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Define the screen width breakpoint for mobile
                settings: {
                    slidesToShow: 1, // Show only one slide for smaller screens
                },
            },
        ],
    };


    return (
        <div className='graphs'>
            <Slider {...sliderSettings}>
                <div>
                    <h3>Followers Change Over Time</h3>
                    <Line data={followersChartData} />
                </div>
                <div>
                    <h3>Likes/Shares/Comments Change Over Time</h3>
                    <Line data={engagementChartData} />
                </div>
                <div>
                    <h3>Post Frequency (Days of the Week)</h3>
                    <Bar data={postFrequencyChartData} />
                </div>
                <div>
                    <h3>Likes Per Day (Days of the Week)</h3>
                    <Bar data={likesPerDayChartData} />
                </div>
            </Slider>
        </div>
    );

};

export default DashboardGraphs;
