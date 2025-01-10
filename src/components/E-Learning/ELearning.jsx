import React, { useState } from "react";
import './ELearning.css';

const ELearning = () => {
    const [expandedSections, setExpandedSections] = useState({ 0: true });

    const toggleSection = (index) => {
        setExpandedSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const categories = [
        {
            title: "Getting Started",
            items: [
                { name: "7 Engagement Tips", time: "2 Mins" },
                { name: "Do’s and Dont’s", time: "3 Mins" },
                { name: "What is Affiliate", time: "5 Mins" },
                { name: "Create Content Ideas", time: "2 Mins" },
                { name: "Getting Verified", time: "3 Mins" },
                { name: "Reach Non-Followers", time: "5 Mins" },
                { name: "Post Type", time: "2 Mins" },
                { name: "Times to Post", time: "3 Mins" },
            ],
        },
        {
            title: "Audience Building",
            items: [
                { name: "Finding your Audience", time: "2 Mins" },
                { name: "CTA for beginners", time: "3 Mins" },
                { name: "1 Hour a day?", time: "5 Mins" },
                { name: "Content Engagement", time: "2 Mins" },
                { name: "Shadow Banning", time: "3 Mins" },
            ],
        },
        {
            title: "Content Creation",
            items: [
                { name: "B Roll Footage", time: "2 Mins" },
                { name: "Content Templates", time: "3 Mins" },
                { name: "Memes", time: "5 Mins" },
                { name: "Viral Hooks", time: "3 Mins" },
                { name: "Visual Hooks", time: "3 Mins" },
            ],
        },
        {
            title: "Creativity Impact",
            items: [
                { name: "Emotions", time: "2 Mins" },
                { name: "Lighting", time: "3 Mins" },
                { name: "Do’s and Dont’s", time: "5 Mins" },
            ],
        },
    ];

    const [active, setActive] = useState("Basic")

    return (
        <div className="ELearning">
            <div className="ELearning-header">
                <div className="ELearning-header-left">
                    <p className="ELearning-header-left-title"><span>E-Learning</span> Hub </p>
                    <p className="ELearning-header-left-text">Learn, Create, Thrive.</p>
                </div>
                <div className="ELearning-header-right">
                    <div className="ELearning-header-right-bar-gray"></div>
                    <div className="ELearning-header-right-bar-blue"></div>
                </div>
            </div>

            <div className="ELearning-main">
                <div className="ELearning-categories">
                    <div className="ELearning-categories-buttons">
                        <button className={`${active == "Basic" && "active"}`} onClick={() => { setActive('Basic') }}>Basic</button>
                        <button className={`${active == "Advanced" && "active"}`} onClick={() => { setActive('Advanced') }}>Advanced</button>

                    </div>
                    <h3>Modules <span style={{ color: "#0070FF" }}>(% Complete)</span></h3>
                    <div className="ELearning-list">
                        {categories.map((category, index) => (
                            <div key={index} className="ELearning-section">
                                <div
                                    className="ELearning-title"
                                    onClick={() => toggleSection(index)}
                                >
                                    <span>{category.title}</span>
                                    <span>
                                        {expandedSections[index] ? "▲" : "▼"}
                                    </span>
                                </div>
                                {expandedSections[index] && (
                                    <ul className="ELearning-items">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="ELearning-item">
                                                <span>{item.name}</span>
                                                <span className="ELearning-item-time">({item.time})</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ELearning-answers">


                    <p>Learn essential content strategies and advanced techniques to elevate your content creation and engagement. Get started with our beginner-friendly guides or level up with advanced insights.</p>
                    <p>3 minutes of learning.</p>
                </div>
            </div>
        </div>
    );
};

export default ELearning;
