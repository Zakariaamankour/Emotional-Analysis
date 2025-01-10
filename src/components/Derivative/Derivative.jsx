import React from "react"
import './Derivative.css'
import SpiderGraph from "./SpiderGraph"
import CustomBarChart from "./CustomBarChart"
import StackedHorizontalBarChart from "./StackedHorizontalBarChart"

const Derivative = () => {

    return (
        <div className="Derivative">

            <div className="Derivative-header">
                <div className="Derivative-header-left">
                    <p className="Derivative-header-title">Derivative</p>
                    <p className="Derivative-header-text">Your top 3 thumbnails</p>
                </div>
                <div className="Derivative-header-right">
                    <div className="Derivative-header-right-left">
                        <button>Date Range</button>
                        <p>Select your 30-day period</p>
                    </div>
                    <div className="Derivative-header-right-right">
                        <button>Ascend</button>
                        <p>Focus Mode</p>
                    </div>
                </div>

            </div>


            <div className="ReflectionPostAnalysisGrowthFocus-first-section">
                <div className="Derivative-demographic-card Derivative-demographic-card-header">
                    <p className="Derivative-demographic-card-title">C7 Alignment Score</p>
                    <div className="Derivative-demographic-card-middle">
                        <p className="Derivative-demographic-card-score">45%</p>
                        <p className="Derivative-demographic-card-trend up">▲</p>
                    </div>
                    <img
                        className="Derivative-demographic-card-icon"
                        src="../images/questionicon.png"
                        alt="info-icon"
                    />
                    <span className="ring">👑</span>
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
                        *example text input*
                    </div>


                </div>
            </div>




            <div className="Derivative-Snapshot">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Derivative-left-sidebar-title">Snapshot</p>
                    <p className="Derivative-left-sidebar-text">Hover over each KPI for further details.</p>
                </div>

                <div className="Derivative-Snapshot-right">
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Derivative-Snapshot-right-item-text">Happiness</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">C7 Aesthetic Score</p>
                        <p className="Derivative-Snapshot-right-item-text">43</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Quality</p>
                        <p className="Derivative-Snapshot-right-item-text">22</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Derivative-Snapshot-right-item-text">Happiness</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Engagement Score</p>
                        <p className="Derivative-Snapshot-right-item-text">14</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">C7 Virality Score</p>
                        <p className="Derivative-Snapshot-right-item-text">54</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Derivative-Snapshot-right-item-text">Happiness</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">Engagement Score</p>
                        <p className="Derivative-Snapshot-right-item-text">15</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Derivative-Snapshot-right-item">
                        <p className="Derivative-Snapshot-right-item-title">C7 Virality Score</p>
                        <p className="Derivative-Snapshot-right-item-text">74</p>

                        <div className="Derivative-Snapshot-right-item-footer">
                            <p className="Derivative-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                </div>


            </div>





            <div className="Derivative-Comparison">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#FFE607" }} />
                    <p className="Derivative-left-sidebar-title">Comparison</p>
                    <p className="Derivative-left-sidebar-text">Metrics to understand what sets your content apart.</p>
                </div>

                <div className="Derivative-Comparison-right">
                    <div className="Derivative-Comparison-right-top">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>
                    <SpiderGraph />

                </div>
            </div>




            <div className="Derivative-Closer-Look">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Derivative-left-sidebar-title">Closer Look</p>
                    <p className="Derivative-left-sidebar-text">Hover over each KPI for further details.</p>
                </div>

                <div className="Derivative-Closer-Look-right">
                    <div className="Derivative-Closer-Look-container">
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">CTR</p>
                            <p className="Derivative-Closer-Look-item-text">3.4%</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>

                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Derivative-Closer-Look-item-text">43</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Derivative-Closer-Look-item-text">22</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">CTR</p>
                            <p className="Derivative-Closer-Look-item-text">1.4%</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Derivative-Closer-Look-item-text">14</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Derivative-Closer-Look-item-text">54</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">CTR</p>
                            <p className="Derivative-Closer-Look-item-text">2.2%</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Derivative-Closer-Look-item-text">15</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Closer-Look-item">
                            <p className="Derivative-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Derivative-Closer-Look-item-text">74</p>

                            <div className="Derivative-Closer-Look-item-footer">
                                <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Derivative-Closer-Look-right-footer">

                        <button >
                            <div >See All Metrics</div>
                        </button>
                        <p className="Derivative-Closer-Look-right-footer-text">Likes, comments, follows etc.</p>
                    </div>
                </div>
            </div>

            <div className="Derivative-Engagement">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#000000" }} />
                    <p className="Derivative-left-sidebar-title">Engagement</p>
                    <p className="Derivative-left-sidebar-text">The pulse of your audience’s interactions.</p>
                </div>

                <div className="Derivative-Engagement-right">
                    <div className="Derivative-Engagement-graph">
                        <CustomBarChart />
                    </div>
                    <div className="Derivative-Engagement-posts">
                        <div className="Derivative-Engagement-posts-post">
                            <p className="Derivative-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="Derivative-Engagement-posts-post-text">Post 1</p>
                            <div className="Derivative-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Derivative-Engagement-posts-post">
                            <p className="Derivative-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="Derivative-Engagement-posts-post-text">Post 1</p>
                            <div className="Derivative-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Derivative-Engagement-footer">
                        <div className="Derivative-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Derivative-Engagement-footer-title">You are increasing in Followers, you are half way to maximizing your engagment</p>
                    </div>
                </div>
            </div>

            <div className="Derivative-Audience">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#6941BF" }} />
                    <p className="Derivative-left-sidebar-title">Audience</p>
                    <p className="Derivative-left-sidebar-text">Get closer to those who matter most.</p>
                </div>

                <div className="Derivative-Audience-right">
                    <div className="Derivative-Audience-graph">
                        <p className="Derivative-Audience-graph-title">Stacked graph of followers vs non.</p>
                        <StackedHorizontalBarChart />
                    </div>

                    <div className="Derivative-Audience-footer">
                        <div className="Derivative-Audience-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Derivative-Audience-footer-title">Post 2 seems to have best thumbnail overall, and post 3 the weakest for your target audience.</p>
                    </div>
                </div>
            </div>

            <div className="Derivative-Demographic">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                    <p className="Derivative-left-sidebar-title">Demographic</p>
                    <p className="Derivative-left-sidebar-text">Understand who’s watching and why it matters.</p>
                </div>

                <div className="Derivative-demographic-right">
                    <div className="Derivative-demographic-right-container">
                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">C7 Alignment Score</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-score">45%</p>
                                <p className="Derivative-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Sex</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">M</p>
                                <p className="Derivative-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Age</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                    <div className="Derivative-demographic-right-container">
                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">C7 Alignment Score</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-score">45%</p>
                                <p className="Derivative-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Sex</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">M</p>
                                <p className="Derivative-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Age</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                    <div className="Derivative-demographic-right-container">
                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">C7 Alignment Score</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-score">45%</p>
                                <p className="Derivative-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Sex</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">M</p>
                                <p className="Derivative-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="Derivative-demographic-card">
                            <p className="Derivative-demographic-card-title">Most Engaged Age</p>
                            <div className="Derivative-demographic-card-middle">
                                <p className="Derivative-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="Derivative-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Derivative-Next-Steps-for-Growth">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "white", border: "1px #242424 solid" }} />
                    <p className="Derivative-left-sidebar-title">Next Steps for Growth</p>
                    <p className="Derivative-left-sidebar-text">Actionable guidance to accelerate your journey.</p>
                </div>

                <div className="Derivative-Next-Steps-for-Growth-container">
                    <div className="Derivative-Next-Steps-for-Growth-container-left">
                        <div className="Derivative-Comparison-right-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Derivative-Next-Steps-for-Growth-container-left-title">Summary</p>

                        <div style={{ width: '80%', height: '100%' }}><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Your </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 2</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> was above average, particularly with </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Shares per Reach </span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>and</span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> Hook Efficiency.<br /></span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}><br /></span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 3</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> could see higher </span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>comments per reach</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>—why not try asking your audience more questions?</span></div>

                    </div>
                    <div className="Derivative-Next-Steps-for-Growth-container-right">
                        <p className="Derivative-Next-Steps-for-Growth-container-right-title">What is your goal for next week?</p>
                        <p className="Derivative-Next-Steps-for-Growth-container-right-text">Set a measurable target for your next post.</p>

                        <div className="Derivative-Next-Steps-for-Growth-container-right-buttons">
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


            <div className="Derivative-footer">
                <p>Ready to create your next viral moment?</p>
                <button>
                    <div>Dive into another analysis.</div>
                </button>
            </div>

        </div>
    )
}
export default Derivative