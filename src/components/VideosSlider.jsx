import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideosSlider = () => {
    // Settings for react-slick slider
    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite looping
        speed: 500, // Transition speed
        slidesToShow: 4, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 768, // For devices with max width of 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides on smaller screens
                },
            },
            {
                breakpoint: 480, // For devices with max width of 480px
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                },
            },
        ],
    };

    const items = [
        { title: "Playbook", footer: "Favourite Tool", id: 1 },
        { title: "Dashboard", footer: "Analytics Tool", id: 2 },
        { title: "Insights", footer: "Visual Reports", id: 3 },
        { title: "Trends", footer: "Market Data", id: 4 },
        { title: "Horizon", footer: "Feedback System", id: 5 },
        { title: "Performia", footer: "Performance Analysis", id: 6 },
        { title: "Audience", footer: "Persona Builder", id: 7 },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map((item) => (
                    <div className="slider-items-item" key={item.id}>
                        <div className="slider-items-item-header">
                            <p className="slider-items-item-header-title">@username / Brand</p>
                            <p className="slider-items-item-header-subtitle">Logo</p>
                        </div>
                        <div className="slider-items-item-footer">
                            <p className="slider-items-item-footer-title">{item.title}</p>
                            <p className="slider-items-item-footer-subtitle">{item.footer}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default VideosSlider;