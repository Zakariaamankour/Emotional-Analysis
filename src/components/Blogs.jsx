import React, { useState } from "react"
import './Blogs.css'
const Blogs = () => {

    const [expandedSections, setExpandedSections] = useState({ 0: 1 });
    const [selectedCategory, setSelectedCategory] = useState("General Questions")
    const toggleSection = (index, title) => {
        setExpandedSections((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
 
    };

    const categories = [
        {
            title: "General",
            items: [
                "What is Celeste7?",
                "How is Celeste7 different?",
                "Who is Celeste7 for?",
                "What platforms does C7 support?",
            ],
        },
        {
            title: "Features & Benefits",
            items: [
                "What tools are included in Celeste7?",
                "How does Emotional Analysis work?",
                "Can C7 help me grow my following?",
                "What is “Competitor Tracker”?",
                "What is “Audience Persona”?",
                "What does A/B Tool do?",
                "How do insights turn to actionable steps?"
            ],
        }, 
        {
            title: "Pricing & Plans",
            items: [
                "What are your pricing plans?",
                "What happens if I cancel?",
                "Do you offer free trial?",
                "Are there discounts for yearly subscriptions?"
            ],
        },
        {
            title: "Data Collection",
            items: [
                "What data does C7 collect?",
                "Is my data secure?",
                "Do you sell or share my data?",
                "How does Celeste7 analyse content?",
                "Can I delete my account and all data?"
            ],
        },
        {
            title: "User Concerns",
            items: [
                "Will Celeste7 work for me if I'm just starting out?",
                "What if my industry is different from competitors?",
                "How is my data different from competitor insights?",
                "Why should I choose Celeste7 over free tools?",
                "How quickly can I see results?",
                "C7 vs. Hootsuite"
            ],
        }, 
    ];

    return (
        <div className="Blogs">
            <div className="Blogs-header">
                <div className="Blogs-header-left">
                    <p className="Blogs-header-left-title">Blogs</p>
                    <p className="Blogs-header-left-text">Insights and strategies to amplify your content journey.</p>

                </div>
                <div className="Blogs-header-right">
                    <button className="Blogs-header-right-button-light">
                        <div>Log in</div>
                    </button>
                    <button className="Blogs-header-right-button-blue">
                        <div>Sign Up</div>
                    </button>
                </div>
            </div>


            <div className="Blogs-main">

                <div className="Blogs-categories">
                    <h3>Categories</h3>
                    <div className="Blogs-list">
                        {categories.map((category, index) => (
                            <div key={index} className="Blogs-section">
                                <div
                                    className="Blogs-title"
                                    onClick={() => toggleSection(index, category.title)}
                                >
                                    <span>{category.title}</span>
                                    <span>
                                        {expandedSections[index] ? "▲" : "▼"}
                                    </span>
                                </div>
                                {expandedSections[index] && (
                                    <ul className="Blogs-items">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="Blogs-answers">




                </div>
            </div>
        </div>
    )
}

export default Blogs