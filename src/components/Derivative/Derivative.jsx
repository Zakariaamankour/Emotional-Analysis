import React from "react"
import './Derivative.css'
import SpiderGraph from "./SpiderGraph"
import CustomBarChart from "./CustomBarChart"
import StackedHorizontalBarChart from "./StackedHorizontalBarChart"
import BarChart from "../Analysers/BarChart"
import StackedBarChartAudience from "../Analysers/StackedBarChartAudience"
import PieChartComponent from "./PieChartComponent"
import StackedBarChart from "../Analysers/StackedBarChart"

const Derivative = () => {
    const genderData = {
        labels: ["Male", "Female"],
        values: [50, 50],
    };

    const ageData = {
        labels: ["18-24", "25-34", "35-44", "45+"],
        values: [30, 40, 20, 10],
    };

    const colorsGender = ["#FF6384", "#36A2EB"];
    const colorsAge = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

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
                <div className="Derivative-demographic-right-containere">
                    <div className="Derivative-demographic-right">
                        <div className="Derivative-demographic-right-container Derivative-demographic-right-left">
                            <div className="Derivative-demographic-card">
                                <p className="Derivative-demographic-card-title">Post Frequency</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-score">123</p>
                                    <p className="Derivative-demographic-card-trend up">▲</p>
                                </div>
                                <img
                                    className="Derivative-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="Derivative-demographic-card">
                                <p className="Derivative-demographic-card-title">Followers Gained</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-value">43</p>
                                    <p className="Derivative-demographic-card-trend down">▼</p>
                                </div>
                                <img
                                    className="Derivative-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="Derivative-demographic-card">
                                <p className="Derivative-demographic-card-title">Accounts Reached</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-value">22</p>
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
                                <p className="Derivative-demographic-card-title">Post Frequency</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-score">33</p>
                                    <p className="Derivative-demographic-card-trend up">▲</p>
                                </div>
                                <img
                                    className="Derivative-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="Derivative-demographic-card">
                                <p className="Derivative-demographic-card-title">Followers Gained</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-value">43</p>
                                    <p className="Derivative-demographic-card-trend down">▼</p>
                                </div>
                                <img
                                    className="Derivative-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>

                            <div className="Derivative-demographic-card">
                                <p className="Derivative-demographic-card-title">Accounts Reached</p>
                                <div className="Derivative-demographic-card-middle">
                                    <p className="Derivative-demographic-card-value">22</p>
                                </div>
                                <img
                                    className="Derivative-demographic-card-icon"
                                    src="../images/questionicon.png"
                                    alt="info-icon"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="Derivative-demographic-right-button">
                        <button>
                            Deeper Dive
                        </button>
                        <p>Click for more metrics</p>
                    </div>
                </div>

            </div>





            <div className="Derivative-Comparison">
                <div className="Derivative-left-sidebar">
                    <div className="Derivative-left-sidebar-bar" style={{ background: "#FFE607" }} />
                    <p className="Derivative-left-sidebar-title">Comparison</p>
                    <p className="Derivative-left-sidebar-text">Metrics to understand what sets your content apart.</p>
                </div>

                <div className="HorizonPostAnalyser3-Comparison-right ReflectionPostAnalysisGrowthFocus-Comparison-right" >
                    <div className="HorizonPostAnalyser3-Comparison-right-top">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                    <SpiderGraph />
                    <div style={{ color: 'black', fontSize: 14, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Spider graph to include following  engagement metrics (likes, shares, and accounts reached)</div>
                    <div style={{ width: '80%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>You have nailed your engagement rates, consider increases X to improve next post.</div>

                </div>
            </div>




            <div className="Performia-container-footer">

                <div className="Performia-container-footer-header">
                     <p className="Performia-container-footer-header-title"><span>Live</span> Inisghts</p>
                    <p className="Performia-container-footer-header-texte">Dive deeper into the evolution of your metrics.</p>
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
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Engagement</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">See what’s driving your audience interactions.</p>
                    </div>
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
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Find out who’s connecting with your content.</p>
                    </div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right Derivative-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Engagement-graph">
                        <StackedBarChartAudience />
                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-posts">
                        <div className="Derivative-Closer-Look-container Derivative-Closer-Look-container-audience">


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
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Explore how your audience profile shifts over time.</p>
                    </div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right Derivative-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Demographic-graph">
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <PieChartComponent
                                title="Piechart of audience gender"
                                data={genderData}
                                colors={colorsGender}
                            />
                            <PieChartComponent
                                title="Piechart of audience gender"
                                data={genderData}
                                colors={colorsGender}
                            />
                            <PieChartComponent
                                title="Piechart of audience age"
                                data={ageData}
                                colors={colorsAge}
                            />
                            <PieChartComponent
                                title="Piechart of audience gender"
                                data={genderData}
                                colors={colorsAge}
                            />
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
                        <div className="HorizonPostAnalyser3-left-sidebar-bar" style={{ background: "#6941BF" }} />
                        <p className="HorizonPostAnalyser3-left-sidebar-title">Actions</p>
                        <p className="HorizonPostAnalyser3-left-sidebar-text">Focus on the behaviours that move the needle.</p>
                    </div>
                </div>
                <div className="HorizonPostAnalyser3-Engagement-right Derivative-Engagement-right">
                    <div className="ReflectionPostAnalysisGrowthFocus-Actions-graph">
                        <StackedBarChart />
                    </div>
                    <div className="Derivative-Closer-Look-container Derivative-Closer-Look-container-actions">
                        <div className="Derivative-Closer-Look-container-left">
                            <p className="Derivative-Closer-Look-container-left-title">Now</p>
                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">Profile Visits</p>
                                <p className="Derivative-Closer-Look-item-text">M</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">Follows</p>
                                <p className="Derivative-Closer-Look-item-text">14</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">External Link Clicks</p>
                                <p className="Derivative-Closer-Look-item-text">3%</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="Derivative-Closer-Look-container-right">
                            <p className="Derivative-Closer-Look-container-right-title">Previous</p>

                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">Profile Visits</p>
                                <p className="Derivative-Closer-Look-item-text">M</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">Follows</p>
                                <p className="Derivative-Closer-Look-item-text">14</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
                            <div className="Derivative-Closer-Look-item">
                                <p className="Derivative-Closer-Look-item-title">External Link Clicks</p>
                                <p className="Derivative-Closer-Look-item-text">3%</p>

                                <div className="Derivative-Closer-Look-item-footer">
                                    <p className="Derivative-Closer-Look-item-footer-title">Show more</p>
                                    <img src="../images/questionicon.png" alt="" />
                                </div>
                            </div>
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