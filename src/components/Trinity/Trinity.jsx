import React from "react"
import './Trinity.css'
import SpiderGraph from "./SpiderGraph"
import CustomBarChart from "./CustomBarChart"
import StackedHorizontalBarChart from "./StackedHorizontalBarChart"

const Trinity = () => {

    return (
        <div className="Trinity">

            <div className="Trinity-header">
                <p className="Trinity-header-title">Trinity</p>
                <p className="Trinity-header-text">Your top 3 thumbnails</p>
            </div>


            <div className="Trinity-posts">
                <div className="Trinity-posts-post">
                    <p>1st post</p>
                </div>
                <div className="Trinity-posts-post">
                    <p>2nd post</p>
                </div>
                <div className="Trinity-posts-post">
                    <p>3rd post</p>
                </div>
            </div>




            <div className="Trinity-Snapshot">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Trinity-left-sidebar-title">Snapshot</p>
                    <p className="Trinity-left-sidebar-text">Hover over each KPI for further details.</p>
                </div>

                <div className="Trinity-Snapshot-right">
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Trinity-Snapshot-right-item-text">Happiness</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">C7 Aesthetic Score</p>
                        <p className="Trinity-Snapshot-right-item-text">43</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Quality</p>
                        <p className="Trinity-Snapshot-right-item-text">22</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Trinity-Snapshot-right-item-text">Happiness</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Engagement Score</p>
                        <p className="Trinity-Snapshot-right-item-text">14</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">C7 Virality Score</p>
                        <p className="Trinity-Snapshot-right-item-text">54</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Prodiment Emotion</p>
                        <p className="Trinity-Snapshot-right-item-text">Happiness</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">Engagement Score</p>
                        <p className="Trinity-Snapshot-right-item-text">15</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Trinity-Snapshot-right-item">
                        <p className="Trinity-Snapshot-right-item-title">C7 Virality Score</p>
                        <p className="Trinity-Snapshot-right-item-text">74</p>

                        <div className="Trinity-Snapshot-right-item-footer">
                            <p className="Trinity-Snapshot-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                </div>


            </div>





            <div className="Trinity-Comparison">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#FFE607" }} />
                    <p className="Trinity-left-sidebar-title">Comparison</p>
                    <p className="Trinity-left-sidebar-text">Metrics to understand what sets your content apart.</p>
                </div>

                <div className="Trinity-Comparison-right">
                    <div className="Trinity-Comparison-right-top">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>
                    <SpiderGraph />

                </div>
            </div>




            <div className="Trinity-Closer-Look">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Trinity-left-sidebar-title">Closer Look</p>
                    <p className="Trinity-left-sidebar-text">Hover over each KPI for further details.</p>
                </div>

                <div className="Trinity-Closer-Look-right">
                    <div className="Trinity-Closer-Look-container">
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">CTR</p>
                            <p className="Trinity-Closer-Look-item-text">3.4%</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>

                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Trinity-Closer-Look-item-text">43</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Trinity-Closer-Look-item-text">22</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">CTR</p>
                            <p className="Trinity-Closer-Look-item-text">1.4%</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Trinity-Closer-Look-item-text">14</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Trinity-Closer-Look-item-text">54</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">CTR</p>
                            <p className="Trinity-Closer-Look-item-text">2.2%</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">Shares per Reach</p>
                            <p className="Trinity-Closer-Look-item-text">15</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Closer-Look-item">
                            <p className="Trinity-Closer-Look-item-title">C7 Engagement Score</p>
                            <p className="Trinity-Closer-Look-item-text">74</p>

                            <div className="Trinity-Closer-Look-item-footer">
                                <p className="Trinity-Closer-Look-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Trinity-Closer-Look-right-footer">

                        <button >
                            <div >See All Metrics</div>
                        </button>
                        <p className="Trinity-Closer-Look-right-footer-text">Likes, comments, follows etc.</p>
                    </div>
                </div>
            </div>

            <div className="Trinity-Engagement">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#000000" }} />
                    <p className="Trinity-left-sidebar-title">Engagement</p>
                    <p className="Trinity-left-sidebar-text">The pulse of your audience’s interactions.</p>
                </div>

                <div className="Trinity-Engagement-right">
                    <div className="Trinity-Engagement-graph">
                        <CustomBarChart />
                    </div>
                    <div className="Trinity-Engagement-posts">
                        <div className="Trinity-Engagement-posts-post">
                            <p className="Trinity-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="Trinity-Engagement-posts-post-text">Post 1</p>
                            <div className="Trinity-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Trinity-Engagement-posts-post">
                            <p className="Trinity-Engagement-posts-post-title">Most Engaged Post</p>
                            <p className="Trinity-Engagement-posts-post-text">Post 1</p>
                            <div className="Trinity-Engagement-post-footer">
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="Trinity-Engagement-footer">
                        <div className="Trinity-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Trinity-Engagement-footer-title">You are increasing in Followers, you are half way to maximizing your engagment</p>
                    </div>
                </div>
            </div>

            <div className="Trinity-Audience">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#6941BF" }} />
                    <p className="Trinity-left-sidebar-title">Audience</p>
                    <p className="Trinity-left-sidebar-text">Get closer to those who matter most.</p>
                </div>

                <div className="Trinity-Audience-right">
                    <div className="Trinity-Audience-graph">
                        <p className="Trinity-Audience-graph-title">Stacked graph of followers vs non.</p>
                        <StackedHorizontalBarChart />
                    </div>

                    <div className="Trinity-Audience-footer">
                        <div className="Trinity-Audience-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Trinity-Audience-footer-title">Post 2 seems to have best thumbnail overall, and post 3 the weakest for your target audience.</p>
                    </div>
                </div>
            </div>

            <div className="Trinity-Demographic">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                    <p className="Trinity-left-sidebar-title">Demographic</p>
                    <p className="Trinity-left-sidebar-text">Understand who’s watching and why it matters.</p>
                </div>

                <div className="trinity-demographic-right">
                    <div className="trinity-demographic-right-container">
                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">C7 Alignment Score</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-score">45%</p>
                                <p className="trinity-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Sex</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">M</p>
                                <p className="trinity-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Age</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                    <div className="trinity-demographic-right-container">
                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">C7 Alignment Score</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-score">45%</p>
                                <p className="trinity-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Sex</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">M</p>
                                <p className="trinity-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Age</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                    <div className="trinity-demographic-right-container">
                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">C7 Alignment Score</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-score">45%</p>
                                <p className="trinity-demographic-card-trend up">▲</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Sex</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">M</p>
                                <p className="trinity-demographic-card-trend down">▼</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>

                        <div className="trinity-demographic-card">
                            <p className="trinity-demographic-card-title">Most Engaged Age</p>
                            <div className="trinity-demographic-card-middle">
                                <p className="trinity-demographic-card-value">18-30</p>
                            </div>
                            <img
                                className="trinity-demographic-card-icon"
                                src="../images/questionicon.png"
                                alt="info-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="Trinity-Next-Steps-for-Growth">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "white", border: "1px #242424 solid" }} />
                    <p className="Trinity-left-sidebar-title">Next Steps for Growth</p>
                    <p className="Trinity-left-sidebar-text">Actionable guidance to accelerate your journey.</p>
                </div>

                <div className="Trinity-Next-Steps-for-Growth-container">
                    <div className="Trinity-Next-Steps-for-Growth-container-left">
                        <div className="Trinity-Comparison-right-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Trinity-Next-Steps-for-Growth-container-left-title">Summary</p>

                        <div style={{ width: '80%', height: '100%' }}><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Your </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 2</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> was above average, particularly with </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Shares per Reach </span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>and</span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> Hook Efficiency.<br /></span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}><br /></span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Post 3</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> could see higher </span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>comments per reach</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>—why not try asking your audience more questions?</span></div>

                    </div>
                    <div className="Trinity-Next-Steps-for-Growth-container-right">
                        <p className="Trinity-Next-Steps-for-Growth-container-right-title">What is your goal for next week?</p>
                        <p className="Trinity-Next-Steps-for-Growth-container-right-text">Set a measurable target for your next post.</p>

                        <div className="Trinity-Next-Steps-for-Growth-container-right-buttons">
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


            <div className="Trinity-footer">
                <p>Ready to create your next viral moment?</p>
                <button>
                    <div>Dive into another analysis.</div>
                </button>
            </div>

        </div>
    )
}
export default Trinity