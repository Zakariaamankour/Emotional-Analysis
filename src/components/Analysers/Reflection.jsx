import React, { useState } from "react"
import './Reflection.css'

const Reflection = () => {
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


    return (
        <div className="Reflection">

            <div className="ReflectionStart-title">
                <p className="ReflectionStart-title-buttitle">Post analyser</p>
                <span className="ReflectionStart-Competitor">Reflection</span>
            </div>


            <div className="Reflection-container">
                <div className="Reflection-container-header">
                    <div className="Reflection-container-picture"></div>
                    <p className="Reflection-container-username">@Username</p>
                </div>
                <div className="Reflection-container-button-container">

                    <p className="Reflection-container-text">
                        Select the post you want to analyse the performance for
                    </p>
                </div>

                <div className="Reflection-container-posts">
                    {[...Array(12)].map((_, index) => (
                        <div
                            key={index}
                            className={`Reflection-container-posts-post ${hoveredPost === index ? 'hovered' : ''
                                } ${isPostSelected(index) ? 'selected' : ''}`}
                            onMouseEnter={() => handlePostHover(index)}
                            onMouseLeave={() => handlePostHover(null)}
                            onClick={() => handlePostSelect(index)}
                        >
                            {isPostSelected(index) && (
                                <span className="Reflection-container-posts-selected-number">{selectedPosts.indexOf(index) + 1}</span>
                            )}
                            {hoveredPost === index && !isPostSelected(index) && (
                                <button className="Reflection-container-posts-select-button">Select this post</button>
                            )}
                        </div>
                    ))}
                </div>

                <button className="Reflection-container-plder-post-button">
                    Load older posts
                </button>
            </div>

        </div>
    )
}
export default Reflection