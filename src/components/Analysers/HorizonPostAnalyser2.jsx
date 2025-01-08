import React, { useState } from "react"
import './HorizonPostAnalyser.css'

const HorizonPostAnalyser2 = () => {
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [hoveredPost, setHoveredPost] = useState(null);

    const handlePostHover = (index) => {
        setHoveredPost(index);
    };

    const handlePostSelect = (index) => {
        if (selectedPosts.length < 3) {
            setSelectedPosts([...selectedPosts, index]);
        }
    };

    const isPostSelected = (index) => selectedPosts.includes(index);

    const [active, setActive] = useState("Instagram")

    return (
        <div className="HorizonPostAnalyser2">

            <div className="HorizonPostAnalyserStart-title">
                <span className="HorizonPostAnalyserStart-Competitor">Horizon</span>
                <p className="HorizonPostAnalyserStart-title-buttitle">Multi-platform Analyser</p>
            </div>

            <div className="HorizonPostAnalyser2-navigation">
                <button className={`${active === "Instagram" && "active"}`} onClick={() => setActive("Instagram")}>Instagram</button>
                <button className={`${active === "X" && "active"}`} onClick={() => setActive("X")}>X</button>
                <button className={`${active === "Meta" && "active"}`} onClick={() => setActive("Meta")}>Meta</button>
                <button className={`${active === "TikTok" && "active"}`} onClick={() => setActive("TikTok")}>TikTok</button>
            </div>
            <div className="HorizonPostAnalyser2-container">
                <div className="HorizonPostAnalyser2-container-header">
                    <div className="HorizonPostAnalyser2-container-picture"></div>
                    <p className="HorizonPostAnalyser2-container-username">@Username</p>
                </div>
                <div className="HorizonPostAnalyser2-container-button-container">
                    <button
                        className="HorizonPostAnalyser2-container-start-button"
                        disabled={selectedPosts.length < 3}
                    >
                        Start Analysis
                    </button>
                    <p className="HorizonPostAnalyser2-container-text">
                        Select a total of 3 posts, between 1 or multiple platforms.
                    </p>
                </div>

                <div className="HorizonPostAnalyser2-container-posts">
                    {[...Array(12)].map((_, index) => (
                        <div
                            key={index}
                            className={`HorizonPostAnalyser2-container-posts-post ${hoveredPost === index ? 'hovered' : ''
                                } ${isPostSelected(index) ? 'selected' : ''}`}
                            onMouseEnter={() => handlePostHover(index)}
                            onMouseLeave={() => handlePostHover(null)}
                            onClick={() => handlePostSelect(index)}
                        >
                            {isPostSelected(index) && (
                                <span className="HorizonPostAnalyser2-container-posts-selected-number">{selectedPosts.indexOf(index) + 1}</span>
                            )}
                            {hoveredPost === index && !isPostSelected(index) && (
                                <button className="HorizonPostAnalyser2-container-posts-select-button">Select this post</button>
                            )}
                        </div>
                    ))}
                </div>

                <button className="HorizonPostAnalyser2-container-plder-post-button">
                    Load older posts
                </button>
            </div>

        </div>
    )
}
export default HorizonPostAnalyser2