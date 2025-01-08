import React from "react"
import './HorizonPostAnalyser.css'
import SpiderGraph from "./SpiderGraph"
import CustomBarChart from "./CustomBarChart"
import StackedHorizontalBarChart from "./StackedHorizontalBarChart"
import StackedBarChart from "./StackedBarChart"

const HorizonPostAnalyser3 = () => {

    return (
        <div className="HorizonPostAnalyser3">

            <div className="HorizonPostAnalyser3-header">
                <div className="HorizonPostAnalyserStart-title">
                    <span className="HorizonPostAnalyserStart-Competitor">Horizon</span>
                    <p className="HorizonPostAnalyserStart-title-buttitle">Multi-platform Analyser</p>
                </div>
                <div className="HorizonPostAnalyser3-header-button">
                    <button>Sentiment</button>
                    <p>Select your Focus Mode</p>
                </div>
            </div>


            <div className="HorizonPostAnalyser3-posts">
                <div className="HorizonPostAnalyser3-posts-post">
                    <p>post 1</p>
                </div>
                <div className="HorizonPostAnalyser3-posts-post">
                    <p>post 2</p>
                </div>
                <div className="HorizonPostAnalyser3-posts-post">
                    <p>post 3</p>
                </div>
            </div>




            <div className="HorizonPostAnalyser3-Snapshot">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Snapshot</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Hover over each KPI for further details.</p>
                </div>
                <div className="HorizonPostAnalyser3-Snapshot-container">


                    <div className="HorizonPostAnalyser3-Snapshot-right">
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Prodiment Emotion</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">Happiness</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">C7 Aesthetic Score</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">43</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Quality</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">22</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Prodiment Emotion</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">Happiness</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Engagement Score</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">14</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">C7 Virality Score</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">54</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Prodiment Emotion</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">Happiness</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Engagement Score</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">15</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">C7 Virality Score</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">74</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">
                                <p className="HorizonPostAnalyser3-Snapshot-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="HorizonPostAnalyser3-Snapshot-right">
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">New Followers</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">14</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Shares Per Reach</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">1.3</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Hook Indicator</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">34%</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">New Followers</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">4</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Shares Per Reach</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">0.7</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Hook Indicator</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">33%</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">New Followers</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">15</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Shares Per Reach</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">0.3</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Snapshot-right-item">
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-title">Hook Indicator</p>
                            <p className="HorizonPostAnalyser3-Snapshot-right-item-text">24%</p>

                            <div className="HorizonPostAnalyser3-Snapshot-right-item-footer">

                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>







            <div className="HorizonPostAnalyser3-Comparison">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#FFE607" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Comparison</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Metrics to understand what sets your content apart.</p>
                </div>

                <div className="HorizonPostAnalyser3-Comparison-right">
                    <div className="HorizonPostAnalyser3-Comparison-right-top">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>
                    <SpiderGraph />

                </div>
            </div>





            <div className="Performia-container-footer">
                <div className="Performia-container-footer-header">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                    <p className="Performia-container-footer-header-title"><span>Live</span> Inisghts</p>
                    <p className="Performia-container-footer-header-texte">Instant updates to inform your decisions.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">

                    <div>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>(Overlay of each post metrics with colour coded lines, no fill)</div>
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

            <div className="HorizonPostAnalyser3-Engagement">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#000000" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Engagement</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">The pulse of your audience’s interactions.</p>
                </div>

                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="HorizonPostAnalyser3-Engagement-graph">
                        <CustomBarChart />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Post 1</p>
                            <div className="HorizonPostAnalyser3-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Post 1</p>
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

            <div className="HorizonPostAnalyser3-Audience">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#FECA66" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Audience</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Get closer to those who matter most.</p>
                </div>

                <div className="HorizonPostAnalyser3-Audience-right">
                    <div className="HorizonPostAnalyser3-Audience-graph">
                        <p className="HorizonPostAnalyser3-Audience-graph-title">Stacked graph of followers vs non.</p>
                        <StackedHorizontalBarChart />
                    </div>

                    <div className="HorizonPostAnalyser3-Audience-footer">
                        <div className="HorizonPostAnalyser3-Audience-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Audience-footer-title">You are 4% away from hitting your all time highest non follower reach.Ride this wave and create another hit.</p>
                    </div>
                </div>
            </div>

            <div className="HorizonPostAnalyser3-Demographic">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#A6DAFF" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Demographic</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Understand who’s watching and why it matters.</p>
                </div>
                <div>


                    <div className="HorizonPostAnalyser3-demographic-right">
                        <div className="HorizonPostAnalyser3-demographic-right-container">
                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">C7 Alignment Score</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-score">45%</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend up">▲</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Sex</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">M</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend down">▼</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Age</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">18-30</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-demographic-right-container">
                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">C7 Alignment Score</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-score">45%</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend up">▲</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Sex</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">M</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend down">▼</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Age</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">1.3</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-demographic-right-container">
                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">C7 Alignment Score</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-score">45%</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend up">▲</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Sex</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">M</p>
                                    <p className="HorizonPostAnalyser3-demographic-card-trend down">▼</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="HorizonPostAnalyser3-demographic-card">
                                <p className="HorizonPostAnalyser3-demographic-card-title">Most Engaged Age</p>
                                <div className="HorizonPostAnalyser3-demographic-card-middle">
                                    <p className="HorizonPostAnalyser3-demographic-card-value">1.3</p>
                                </div>
                                <img
                                    className="HorizonPostAnalyser3-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '92%', height: '130px', margin: "auto", background: '#FAFAFA', borderRadius: 14, border: '1px #E5E5E5 solid', display: "flex", flexDirection: "culumn", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ width: '100%', textAlign: 'center', color: '#242424', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>That reach was great for post 3, does targeting this audience again achieve your goals?</div>
                    </div>

                </div>
            </div>


            <div className="HorizonPostAnalyser3-Engagement">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#003ABA" }} />
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Actions</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Every click and swipe. Insights are opportunities.</p>
                </div>

                <div className="HorizonPostAnalyser3-Engagement-right">
                    <div className="HorizonPostAnalyser3-Engagement-graph">
                        <StackedBarChart />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Most Profile Visits</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Post 1</p>
                            <div className="HorizonPostAnalyser3-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="HorizonPostAnalyser3-Engagement-posts-post">
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-title">Best CTR</p>
                            <p className="HorizonPostAnalyser3-Engagement-posts-post-text">Post 1</p>
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


            <div className="HorizonPostAnalyser3-Next-Steps-for-Growth">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "white", border: "1px #242424 solid" }} />
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
export default HorizonPostAnalyser3