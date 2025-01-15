import React, { useEffect, useRef, useState } from 'react';
import './Step2a.css'
import SpiderChart from "./SpiderChart"
import LineChart from "./LineChart"
import { emotionData } from "../Data/emotionData.js"; // Importer les données

const Step2a = () => {

    const videoRef = useRef(null);
    const targetRefs = useRef([]); // Array of refs for multiple targets
    const isVideoInOriginalContainer = useRef(true); // To track if the video is in the original container
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const video = videoRef.current;

        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                const target = entry.target;

                if (entry.isIntersecting && isVideoInOriginalContainer.current) {
                    // Move the video to the target container if it's not already there
                    target.appendChild(video);
                    video.classList.remove('sticky-video'); // Remove sticky style
                    isVideoInOriginalContainer.current = false; // Mark the video as moved
                } else if (!entry.isIntersecting && !isVideoInOriginalContainer.current) {
                    // Return the video to its original container if it's not in the target anymore
                    const firstContainer = document.querySelector('.step2a-first-section-left');
                    firstContainer.appendChild(video);
                    video.classList.add('sticky-video'); // Apply sticky style
                    isVideoInOriginalContainer.current = true; // Mark the video as returned
                }
            },
            { threshold: 0.5 } // Trigger when 50% is visible
        );

        // Observe all target elements
        targetRefs.current.forEach(target => observer.observe(target));

        // Cleanup observer when component unmounts
        return () => observer.disconnect();
    }, []);


    return (
        <div className="step2a">
            <div className="step2a-top">


                <div className="step2a-start-text">
                    ⇤ Start new analysis
                </div>

                <div className="step2a-header">


                    <div className="step2a-title">
                        <span className="step2a-title-emotional">Emotional</span>
                        <span className="step2a-title-space">&nbsp;</span>
                        <span className="step2a-title-analysis">Analysis</span>
                    </div>

                    <div className="step2a-button-container">
                        <div className="step2a-button">
                            <div className="step2a-button-text">Ascend</div>
                        </div>

                        <div className="step2a-focus-mode">
                            Select your Focus Mode
                        </div>
                    </div>
                </div>
            </div>



            <div className="step2a-first-section">
                <div className="step2a-first-section-left">
                    <div className="step2a-video-container sticky-video" ref={videoRef}>
                        <video src="../images/video.mp4" autoPlay loop muted></video>
                    </div>

                </div>

                <div className="step2a-first-section-right">


                    <div className="step2a-first-section-right-1">
                        <img src="../images/brainblack.png" alt="" />

                        <div style={{ textAlign: 'center' }}>
                            <span style={{ color: 'black', fontSize: 12, fontFamily: 'Montserrat', fontWeight: 600, wordWrap: 'break-word' }}>C7</span>
                            <span style={{ color: 'black', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>.AI</span>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', color: '#242424', fontSize: 20, fontFamily: 'Open Sans', fontWeight: 300, wordWrap: 'break-word' }}>The Insight</div>


                    <div style={{ textAlign: 'center' }}>
                        <span style={{ color: '#242424', fontSize: 14, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>Your video has shown strong emotional appeal, with a </span>
                        <span style={{ color: '#242424', fontSize: 14, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Virality C7 Score of 87</span>
                        <span style={{ color: '#242424', fontSize: 14, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>. Let’s break down what’s working well and what can be improved.</span>
                    </div>


                </div>
            </div>





            <div className="step2a-second-section">
                <div className="step2a-second-section-left">
                    <div className="step2a-second-section-left-header">
                        <div className="step2a-second-section-left-header-title"  >Snapshot</div>
                        <div className="step2a-second-section-left-header-text"  >A quick view of your emotional impact.</div>
                    </div>

                    <div className="step2a-video-container" ref={(el) => targetRefs.current[0] = el} ></div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="step2a-second-section-right">

                        <div className="step2a-second-section-right-left">
                            {emotionData.map((item) => (
                                <div key={item.id} className="step2a-second-section-right-left-item">
                                    {/* Titre et émotion */}
                                    <div className="step2a-second-section-right-left-item-title">
                                        {item.type}
                                    </div>
                                    <div className="step2a-second-section-right-left-item-text">
                                        {item.emotion}
                                    </div>

                                    {/* Footer avec icône et info-bulle */}
                                    <div className="step2a-second-section-right-left-item-footer">
                                        <div className="step2a-second-section-right-left-item-footer-text">
                                            Why is this important
                                        </div>
                                        <img
                                            className="step2a-second-section-right-left-item-footer-img"
                                            src="../images/questionicon.png"
                                            alt=""
                                            onMouseEnter={() => setHoveredId(item.id)}
                                            onMouseLeave={() => setHoveredId(null)}
                                            style={{ cursor: "pointer" }}
                                        />

                                        {/* Affichage de l'info-bulle */}
                                        {hoveredId === item.id && (
                                            <div className="tooltip">
                                                <span style={{ color: "red", fontWeight: "bold" }}>
                                                    {item.tooltip.percentage}
                                                </span>{" "}
                                                {item.tooltip.description}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div
                                className="step2a-button"
                                style={{ width: "auto", padding: "10px 20px", margin: "20px 0" }}
                            >
                                <div className="step2a-button-text">See Tabulated Results</div>
                            </div>
                        </div>

                        <div className="step2a-second-section-right-right">


                        </div>


                    </div>

                    {/* spider chart */}
                    <div className="step2a-second-section-right-spider">

                        <div className="step2a-second-section-right-left-spider" style={{ position: "relative" }}>
                            <div className="step2a-first-section-right-1" style={{ position: "absolute", top: "5px", left: "5px" }}>
                                <img src="../images/brainblack.png" alt="" />
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ color: 'black', fontSize: 12, fontFamily: 'Montserrat', fontWeight: 600, wordWrap: 'break-word' }}>C7</span>
                                    <span style={{ color: 'black', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>.AI</span>
                                </div>

                            </div>
                            <SpiderChart />


                        </div>

                        <div className="step2a-second-section-right-right-spider">

                            <div className="step2a-second-section-right-right-spider-title" >Spotter</div>
                            <div className="step2a-second-section-right-right-spider-container">
                                <p className="step2a-second-section-right-right-spider-items">Happiness (55%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Anger (20%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Excitement (11%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Sadness (8%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Frustration (7%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Joy (3%)</p>
                                <p className="step2a-second-section-right-right-spider-items">Humour (2%)</p>


                            </div>
                        </div>


                    </div>


                </div>
            </div>

            <div className="step2a-third-section">

                <div className="live-analysis-section">
                    <div className="live-analysis-section-left">
                        <div>
                            <span style={{ color: '#0070FF', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Live</span>
                            <span style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}> Analysis</span>
                        </div>
                        <div className='step2a-second-section-left-header-text' style={{ width: '44%', color: '#86868B', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Real-time insights into audience engagement.</div>

                        <div className="step2a-video-container" ref={(el) => targetRefs.current[1] = el} style={{ margin: "30px 0" }}></div>

                    </div>

                    <div className="live-analysis-section-right">

                        <LineChart />

                        <div style={{ textAlign: 'center' }}><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Discover how your video resonates hour by </span><span style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>hour.</span></div>


                        <div className="step2a-button-container">
                            <div className="step2a-button">
                                <div className="step2a-button-text">Unlock Deeper Inisghts </div>
                            </div>

                            <div className="step2a-focus-mode">
                                Select your Focus Mode
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="step2a-fourth-section">
                <div className="step2a-fourth-section-left">
                    <div>
                        <div style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Audience Analysis</div>
                        <div className='step2a-second-section-left-header-text' style={{ width: '50%', color: '#86868B', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Uncover strategies for growing your audience.</div>
                    </div>

                    <div className="step2a-video-container" ref={(el) => targetRefs.current[2] = el} style={{ margin: "30px 0" }}></div>


                </div>
                <div className="step2a-fourth-section-rigth">



                    <div className="step2a-fourth-section-rigth-left">
                        <div className="step2a-fourth-section-rigth-left-item">
                            <div className="step2a-fourth-section-rigth-left-item-left">
                                <p className="step2a-fourth-section-rigth-left-item-title">Body Langauge</p>
                                <p className="step2a-fourth-section-rigth-left-item-text">Happiness</p>
                            </div>
                            <div className="step2a-fourth-section-rigth-left-item-right" />

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="step2a-fourth-section-rigth-left-item">
                            <div className="step2a-fourth-section-rigth-left-item-left">
                                <p className="step2a-fourth-section-rigth-left-item-title">Hand Gestures</p>
                                <p className="step2a-fourth-section-rigth-left-item-text">Random</p>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="step2a-fourth-section-rigth-left-item">
                            <div className="step2a-fourth-section-rigth-left-item-left">
                                <p className="step2a-fourth-section-rigth-left-item-title">Microexpressions</p>
                                <p className="step2a-fourth-section-rigth-left-item-text">Pain</p>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="step2a-fourth-section-rigth-left-item">
                            <div className="step2a-fourth-section-rigth-left-item-left">
                                <p className="step2a-fourth-section-rigth-left-item-title">Retention Score</p>
                                <p className="step2a-fourth-section-rigth-left-item-text">100</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="step2a-fourth-section-rigth-left-item">
                            <div className="step2a-fourth-section-rigth-left-item-left">
                                <p className="step2a-fourth-section-rigth-left-item-title">Retention Score</p>
                                <p className="step2a-fourth-section-rigth-left-item-text">100</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                    </div>


                    <button className="step2a-fourth-section-rigth-button"  >
                        <div  >See all metrics</div>
                    </button>

                    <div style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Currently showing 6/14 metrics </div>

                </div>
            </div>



            <div className="step2a-five-section">
                <div className="step2a-five-section-left">
                    <div>
                        <div style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Expand</div>
                        <div className='step2a-second-section-left-header-text' style={{ width: '60%', color: '#86868B', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Discover untapped potential with data-driven insights.</div>
                    </div>



                    <div className="step2a-video-container" ref={(el) => targetRefs.current[3] = el} style={{ margin: "30px 0" }}></div>

                </div>

                <div className="step2a-five-section-right">
                    <div className="step2a-five-section-right-img">
                        <img src="../images/brainblack.png" alt="" />
                        <div style={{ textAlign: 'center' }}><span style={{ color: 'black', fontSize: 12, fontFamily: 'Montserrat', fontWeight: 600, wordWrap: 'break-word' }}>C7</span><span style={{ color: 'black', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>.AI</span></div>
                    </div>

                    <p className="step2a-five-section-right-title">
                        Suggestions
                    </p>

                    <p className="step2a-five-section-right-text">
                        Suggestions input text
                    </p>
                </div>
            </div>



            <div className="step2a-six-section">
                <div className="step2a-six-section-top">

                    <div>
                        <div style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Actionable Steps</div>
                        <div className='step2a-second-section-left-header-text sidebar-text-analysis'   style={{ width: '18%', color: '#86868B', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Precise recommendations for impactful growth.</div>
                    </div>

                </div>

                <div className="step2a-six-section-bottom">
                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>


                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>


                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>


                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>



                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>


                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>


                    <div className="step2a-six-section-bottom-item">
                        <div className="step2a-six-section-bottom-item-title" >Tip 1</div>
                        <div className="step2a-six-section-bottom-item-text" >Lowest value metric</div>

                        <img src="../images/questionicon.png" alt="" />
                    </div>
                </div>
            </div>





            <div className="step2a-seven-section">
                <div className="step2a-seven-section-top">

                    <div>
                        <div style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Tabulated View</div>
                        <div className='sidebar-text-analysis step2a-second-section-left-header-text'  style={{ width: '18%', color: '#86868B', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Organised data for clarity and strategic action.</div>
                    </div>

                </div>

                <div className="step2a-seven-section-bottom">
                    <div className="step2a-seven-section-right-img">
                        <img src="../images/brainblack.png" alt="" />
                        <div style={{ textAlign: 'center' }}><span style={{ color: 'black', fontSize: 12, fontFamily: 'Montserrat', fontWeight: 600, wordWrap: 'break-word' }}>C7</span><span style={{ color: 'black', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>.AI</span></div>
                    </div>


                    <p className="step2a-seven-section-bottom-content">Enter table of results</p>
                </div>
            </div>


            <div className="step2a-footer">
                <div className="step2a-footer-imgs">
                    <img src="../images/likeicon2.png" alt="" />
                    <img src="../images/likeicon2.png" alt="" style={{ transform: "rotate(180deg)" }} />
                </div>

                <div className="step2a-button-container">
                    <div className="step2a-button">
                        <div className="step2a-button-text">Are you missing something?</div>
                    </div>

                    <div className="step2a-focus-mode">
                        Share your experience, for free.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step2a

