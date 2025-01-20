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
        { title: "Emotional Analysis", footer: "Favourite Tool", id: 1,key:"Engagement rate",value:"+30%" },
        { title: "Playbook", footer: "Favourite Tool", id: 2,key:"Likes per Reach",value:"+14%" },
        { title: "Audience Persona", footer: "Favourite Tool", id: 3,key:"Audience Reached",value:"NEW" },
        { title: "Performia", footer: "Favourite Tool", id: 4,key:"Non-Follower Reach",value:"+23%" },
        { title: "a/b testing", footer: "Favourite Tool", id: 5,key:"Message Reach Outs",value:"+17" },
        { title: "Competitor Tracker", footer: "Favourite Tool", id: 6,key:"Post Scheduling Pattern",value:"NEW" },
        { title: "Bio Optimise", footer: "Favourite Tool", id: 7,key:"External Link CTR",value:"+6.5%" },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {items.map((item) => (
                    <>

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

                        <div className="slider-items"  >
                            <div style={{ width: '313px', textAlign: "center" }}>
                                <div style={{ textAlign: 'center', color: '#86868B', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>{item.key}</div>
                                <div style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>{item.value}</div>
                            </div>
                            

                        </div>
                    </>
                ))}
            </Slider>
        </div>
    );
};

export default VideosSlider;