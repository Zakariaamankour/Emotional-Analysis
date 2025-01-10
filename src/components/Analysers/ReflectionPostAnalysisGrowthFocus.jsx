import React, { useEffect, useRef, useState } from 'react';
import './ReflectionPostAnalysisGrowthFocus.css'
import SpiderChart from "./SpiderChart"
import LineChart from "./LineChart"
import { emotionData } from "../Data/emotionData.js"; // Importer les données
import SpiderGraph from './SpiderGraph.jsx';
import CustomBarChart from './CustomBarChart.jsx';
import BarChart from './BarChart.jsx';
import StackedBarChartAudience from './StackedBarChartAudience.jsx';
import PieCharts from './PieCharts.jsx';
import StackedBarChart from './StackedBarChart.jsx';

const ReflectionPostAnalysisGrowthFocus = () => {

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
                    const firstContainer = document.querySelector('.ReflectionPostAnalysisGrowthFocus-first-section-left');
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
        <div className="ReflectionPostAnalysisGrowthFocus">
            <div className="ReflectionPostAnalysisGrowthFocus-top">


                <div className="ReflectionStart-title">
                    <p className="ReflectionStart-title-buttitle">Post analyser</p>
                    <span className="ReflectionStart-Competitor">Reflection</span>
                </div>

            </div>



            <div className="ReflectionPostAnalysisGrowthFocus-first-section">
                <div className="ReflectionPostAnalysisGrowthFocus-first-section-left">
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container sticky-video" ref={videoRef}>
                        <video src="../images/video.mp4" autoPlay loop muted></video>
                    </div>

                </div>

                <div className="ReflectionPostAnalysisGrowthFocus-first-section-right">


                    <div className="ReflectionPostAnalysisGrowthFocus-first-section-right-1">
                        <img src="../images/brainblack.png" alt="" />

                        <div style={{ textAlign: 'center' }}>
                            <span style={{ color: 'black', fontSize: 12, fontFamily: 'Montserrat', fontWeight: 600, wordWrap: 'break-word' }}>C7</span>
                            <span style={{ color: 'black', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>.AI</span>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', color: '#242424', fontSize: 20, fontFamily: 'Open Sans', fontWeight: 300, wordWrap: 'break-word' }}>The Insight</div>


                    <div style={{ width: '100%', textAlign: 'center', color: '#242424', fontSize: 16, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>
                        Your above-average engagement from new viewers is likely influenced by your use of [Emotion Y] and the practical value you provided in your content. Keep experimenting with these strategies to see continued growth!
                    </div>


                </div>
            </div>





            <div className="ReflectionPostAnalysisGrowthFocus-second-section">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">
                    <div className="ReflectionPostAnalysisGrowthFocus-second-section-left-header">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#078BFF" }} />
                        <div className="ReflectionPostAnalysisGrowthFocus-second-section-left-header-title"  >Snapshot</div>
                        <div className="ReflectionPostAnalysisGrowthFocus-second-section-left-header-text"  >Hover over each KPI for further details.</div>
                    </div>

                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[0] = el} ></div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="ReflectionPostAnalysisGrowthFocus-second-section-right">

                        <div className="ReflectionPostAnalysisGrowthFocus-second-section-right-left">

                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Prodiment Emotion</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">Happiness</p>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>

                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Engagement Score</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">3.2</p>
                                </div>

                                <div class="score-bar-container">
                                    <div class="score-bar-background"></div>
                                    <div class="score-bar-fill"></div>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>

                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">C7 Virality Score</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">0.11%</p>
                                </div>

                                <div class="score-bar-container">
                                    <div class="score-bar-background"></div>
                                    <div class="score-bar-fill"></div>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>


                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">New Followers</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">3</p>
                                </div>

                                <div class="score-bar-container">
                                    <div class="score-bar-background"></div>
                                    <div class="score-bar-fill"></div>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>

                            <div className="ReflectionPostAnalysisGrowthFocus-button-container">
                                <button className="ReflectionPostAnalysisGrowthFocus-button">
                                    Ascend
                                </button>

                                <div className="ReflectionPostAnalysisGrowthFocus-focus-mode">
                                    Select your Focus Mode
                                </div>
                            </div>


                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Shares per Reach</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">18-24M</p>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>

                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Hook Indicator</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">34%</p>
                                </div>

                                <div class="score-bar-container">
                                    <div class="score-bar-background"></div>
                                    <div class="score-bar-fill"></div>
                                </div>

                                <img src="../images/questionicon.png" alt="" />
                            </div>

                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                                <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Peak Engagement Time</p>
                                    <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">1pm, Mon</p>
                                </div>


                                <img src="../images/questionicon.png" alt="" />
                            </div>


                        </div>

                        <div className="ReflectionPostAnalysisGrowthFocus-second-section-right-footer">
                            <p>You have nailed Shares per Reach! <br />
                                Let’s try recreate this for continued momentum</p>
                            <button>Schedule your next post</button>
                        </div>




                    </div>




                </div>
            </div>


            <div className=" ReflectionPostAnalysisGrowthFocus-second-section ">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">

                    <div className=" ">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#FFE607" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Comparison</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Metrics to understand what sets your content apart.</p>
                    </div>
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[1] = el} ></div>
                </div>

                <div className="HorizonPostAnalyser3-Comparison-right ReflectionPostAnalysisGrowthFocus-Comparison-right" >
                    <div className="HorizonPostAnalyser3-Comparison-right-top">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                    <SpiderGraph />

                    <div style={{ width: '80%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>You have nailed your engagement rates, consider increases X to improve next post.</div>

                </div>
            </div>


            <div className="Performia-container-footer">

                <div className="Performia-container-footer-header">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                    <p className="Performia-container-footer-header-title"><span>Live</span> Inisghts</p>
                    <p className="Performia-container-footer-header-texte">Real-time revelations that shape your strategy.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">

                    <div>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>*Engagement graph over time <br /> (likes, shares, saves, comments)*</div>
                    </div>

                    <div>
                        <button className="Performia-container-footer-content-button">
                            Unlock next steps for improving engagment
                        </button>

                        <p className="Performia-container-footer-content-text">
                            Get granular data to make informed decisions
                        </p>
                    </div>


                </div>
            </div>





            <div className=" ReflectionPostAnalysisGrowthFocus-second-section ">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">

                    <div className=" ">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#6941BF" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Engagement</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">The pulse of your audience’s interactions.</p>
                    </div>
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[2] = el} ></div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Engagement-graph">
                        <BarChart />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Most Improved Metric</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Like</p>
                            <div className="HorizonPostAnalyser3-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Weakest Metric</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Reach</p>
                            <div className="HorizonPostAnalyser3-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-footer">
                        <div className="HorizonPostAnalyser3-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Engagement-footer-title">You are increasing in Followers, you are half way to maximizing your engagment</p>
                    </div>
                </div>
            </div>


            <div className=" ReflectionPostAnalysisGrowthFocus-second-section ">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">

                    <div className=" ">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#000000" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Audience</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Get closer to those who matter most.</p>
                    </div>
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[3] = el} ></div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Engagement-graph">
                        <StackedBarChartAudience />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Non Followers</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">56%</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>
                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Followers</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">44%</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-footer">
                        <div className="HorizonPostAnalyser3-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Engagement-footer-title">You are <span style={{ color: "#0B66FF" }}>4%</span> away from hitting your all time highest non follower reach.Ride this wave and create another hit.</p>
                    </div>
                </div>
            </div>

            <div className=" ReflectionPostAnalysisGrowthFocus-second-section ">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">

                    <div className=" ">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#FECA66" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Demographic</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Understand who’s watching and why it matters.</p>
                    </div>
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[4] = el} ></div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Demographic-graph">
                        <PieCharts />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Gender Reached</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">M</p>
                            </div>
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-right" style={{ background: "#A6DAFF" }} />

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Age Reached</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">18-30</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-footer">
                        <div className="HorizonPostAnalyser3-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Engagement-footer-title">You are nailing your desired audience, well done!</p>
                    </div>
                </div>
            </div>


            <div className="ReflectionPostAnalysisGrowthFocus-second-section">
                <div className="ReflectionPostAnalysisGrowthFocus-second-section-left">
                    <div className=" ">
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#00A4FF" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Actions</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Every click and swipe. Insights are opportunities.</p>
                    </div>
                    <div className="ReflectionPostAnalysisGrowthFocus-video-container" ref={(el) => targetRefs.current[5] = el} ></div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Actions-graph">
                        <StackedBarChart />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Prodiment Action</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">Profile Visit</p>
                            </div>
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-right" style={{ background: "#A6DAFF" }} />

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                        <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item">
                            <div className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-left">
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-title">Link Click Through Rate</p>
                                <p className="ReflectionPostAnalysisGrowthFocus-fourth-section-rigth-left-item-text">13.5%</p>
                            </div>

                            <div class="score-bar-container">
                                <div class="score-bar-background"></div>
                                <div class="score-bar-fill"></div>
                            </div>

                            <img src="../images/questionicon.png" alt="" />
                        </div>

                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-footer">
                        <div className="HorizonPostAnalyser3-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Engagement-footer-title">Your content has intrigued users to visit your link (13.5%).Excellent work.</p>
                    </div>
                </div>
            </div>




            <div className="HorizonPostAnalyser3-Next-Steps-for-Growth">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#FF0453" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Next Steps for Growth</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Actionable guidance to accelerate your journey.</p>
                </div>

                <div className="HorizonPostAnalyser3-Next-Steps-for-Growth-container">
                    <div className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-left">
                        <div className="HorizonPostAnalyser3-Comparison-right-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-left-title">Summary</p>

                        <div style={{ width: '80%', height: '100%' }}><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Your </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 2</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> was above average, particularly with </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Shares per Reach </span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>and</span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> Hook Efficiency.<br /></span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}><br /></span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 3</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> could see higher </span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>comments per reach</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>—why not try asking your audience more questions?</span></div>

                    </div>
                    <div className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-right">
                        <p className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-right-title">What is your goal for next week?</p>
                        <p className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-right-text">Set a measurable target for your next post.</p>

                        <div className="HorizonPostAnalyser3-Next-Steps-for-Growth-container-right-buttons">
                            <button>
                                <div>Increase Engagement</div>
                            </button>
                            <button>
                                <div>Boost Reach</div>
                            </button>
                            <button>
                                <div>Audience Interaction</div>
                            </button>
                            <button>
                                <div>Increase Shares + Saves</div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className="HorizonPostAnalyser3-footer">
                <p>Ready to create your next viral moment?</p>
                <button>
                    <div>Dive into another analysis.</div>
                </button>
            </div>
        </div>

    )
}

export default ReflectionPostAnalysisGrowthFocus

