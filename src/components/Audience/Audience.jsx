import React from "react"
import './Audience.css'
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import PieChart from "../Competitor/PieChart";
import StackedBarChart from "./StackedBarChart";
import GroupedBarChart from "./GroupedBarChart";
import Heatmap from "../Performia/Heatmap";
import BarChartLocation from "./BarChartLocation";

const Audience = () => {

    return (
        <div className="Audience">

            <div className="CompetitorTrackerTool2-header">
                <div className="CompetitorTrackerTool2-header-left">
                    <p className="AudienceStart-title"><span>Audience</span> Persona</p>
                    <p className="CompetitorTrackerTool2-header-left-text Audience-header-left-text">Resonate with who you areinteracting with</p>
                </div>
                <div className="CompetitorTrackerTool2-header-right">
                    <button>Date Range</button>
                    <p>Select your 30-day period</p>
                </div>

            </div>


            <div className="Audience-first-section">
                <div className="Audience-first-section-item">
                    <div className="Audience-first-section-item-top">
                        <p className="Audience-first-section-item-top-title">Most active Audience</p>
                        <p className="Audience-first-section-item-top-text">18-30 M</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Audience-first-section-item-top">
                        <p className="Audience-first-section-item-top-title">Best Emotional Engagement</p>
                        <p className="Audience-first-section-item-top-text">Happiness</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Audience-first-section-item-bottom">
                        <div className="Audience-first-section-item-bottom-img-container">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Audience-first-section-item-bottom-title">The Insight</p>
                        <p className="Audience-first-section-item-bottom-text">*input from NLP model about audience type adn their reactions based on content and bio review*</p>
                    </div>
                </div>
            </div>


            <div className="Audience-snapshot">
                <div className="Trinity-left-sidebar">
                    <p className="Trinity-left-sidebar-title">Snapshot</p>
                    <p className="Trinity-left-sidebar-text Audience-left-sidebar-text">Capture the essence of your audience’s behaviour.</p>
                </div>

                <div className="Audience-snapshot-container">
                    <div className="Audience-snapshot-container-item">
                        <p className="Audience-first-section-item-top-title">Post Frequency</p>
                        <p className="Audience-first-section-item-top-text">1.2</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="Audience-snapshot-container-item">
                        <p className="Audience-first-section-item-top-title">C7 Engagement Score</p>
                        <p className="Audience-first-section-item-top-text">67</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="Audience-snapshot-container-item">
                        <p className="Audience-first-section-item-top-title">C7 Bio Score</p>
                        <p className="Audience-first-section-item-top-text">33</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>






                    <div className="Audience-snapshot-container-item-button-blue ">
                        <button>Discover your deeper dive</button>
                        <p>Understand which age groups and gender <br />dictate what metric.</p>
                    </div>
                </div>
            </div>







            <div className="Audience-Bio">
                <div className="Trinity-left-sidebar">
                    <p className="Trinity-left-sidebar-title">Who</p>
                    <p className="Trinity-left-sidebar-text">Define your audience’s identity.</p>
                </div>

                <div className="Audience-Bio-container">

                    <StackedBarChart />
                </div>
            </div>





            <div className="Performia-container-footer">
                <div className="Performia-container-footer-header">
                    <p className="Performia-container-footer-header-title"><span>Live</span> Inisghts</p>
                    <p className="Performia-container-footer-header-texte Audience-container-footer-header-texte ">Up-to-the-minute data for precise adjustments.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>(Overlay of each post metrics with colour stackedbar chart inputs lines, no fill)</div>
                    <div style={{ textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>*Engagement stacked bar chart for each engagement metrics(emotions of content for each )*</div>
                    <div>
                        <button className="Performia-container-footer-content-button">
                            Identify when their peak engagement times are
                        </button>

                        <p className="Performia-container-footer-content-text">
                            Swoop in and post just before them to gain their traffic. <br />
                            Use hour by hour data to harness their momentum.
                        </p>
                    </div>


                </div>
            </div>









            <div className="Audience-Captions">
                <div className="Trinity-left-sidebar">
                    <p className="Trinity-left-sidebar-title">What</p>
                    <p className="Trinity-left-sidebar-text">Understand their preferences and interests.</p>
                </div>

                <div className="Audience-Captions-container">
                    <GroupedBarChart />
                    <div className="Audience-Captions-container-items">
                        <div className="Audience-first-section-item-top Audience-Captions-container-item">
                            <p className="Audience-first-section-item-top-title">C7 Engagement Score</p>
                            <p className="Audience-first-section-item-top-text">45</p>
                            <div className="showmore">
                                <p>Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Audience-first-section-item-top Audience-Captions-container-item">
                            <p className="Audience-first-section-item-top-title">Follows per Reach</p>
                            <p className="Audience-first-section-item-top-text">0.012</p>
                            <div className="showmore">
                                <p>Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="Audience-when">
                <div className="Trinity-left-sidebar">
                    <p className="Trinity-left-sidebar-title">When</p>
                    <p className="Trinity-left-sidebar-text">Find the optimal timing for your content.</p>
                </div>

                <div className=" ">
                    <Heatmap />

                </div>
            </div>



            <div className="Audience-Captions">
                <div className="Trinity-left-sidebar">
                    <p className="Trinity-left-sidebar-title">Where</p>
                    <p className="Trinity-left-sidebar-text">Analyse where your audience connects with you.</p>
                </div>

                <div className="Audience-Captions-container">
                    <BarChartLocation />
                    <div className="Audience-Captions-container-items">
                        <div className="Audience-first-section-item-top Audience-Captions-container-item">
                            <p className="Audience-first-section-item-top-title">Most Prodiment Location</p>
                            <p className="Audience-first-section-item-top-text">London</p>
                            <div className="showmore">
                                <p>Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="Audience-first-section-item-top Audience-Captions-container-item">
                            <p className="Audience-first-section-item-top-title">Highest Oppurtunity Location</p>
                            <p className="Audience-first-section-item-top-text">Dubai</p>
                            <div className="showmore">
                                <p>Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="HorizonPostAnalyser3-Engagement">
                <div className="HorizonPostAnalyser3-left-sidebar">
                    <p className="HorizonPostAnalyser3-left-sidebar-title">Why</p>
                    <p className="HorizonPostAnalyser3-left-sidebar-text">Discover the motivations behind their actions.</p>
                </div>

                <div className="HorizonPostAnalyser3-Engagement-right Audience-Why-section-right">

                    <div className="HorizonPostAnalyser3-Engagement-posts audience-Why-posts">
                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Most Engaging Emotion</p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Comments </p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">Show more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>
                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Shares </p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">WShow more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>

                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Saves  </p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">WShow more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>

                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Follows  </p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">WShow more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>


                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Reach  </p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">WShow more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>


                        <div className="BioOptimiser-banner-section-right-item">
                            <div className="BioOptimiser-banner-section-right-item-left">
                                <p className="BioOptimiser-banner-section-right-item-left-title">Emotion for Reel Durations</p>
                                <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                            </div>
                            <div className="BioOptimiser-banner-section-right-item-right">

                            </div>

                            <div className="BioOptimiser-banner-section-right-item-footer">
                                <p className="BioOptimiser-banner-section-right-item-footer-title">WShow more</p>
                                <img src="../images/questionicon.png" alt="" />
                            </div>
                        </div>

                        <div className="Audience-why-button">
                            <button className="BioOptimiser-banner-section-right-button" >
                                <div >Go further for greater details</div>
                            </button>
                            <p>Complete your audience persona and access <br /> emotions used per hour/per day.</p>
                        </div>

                    </div>
                    <div className="HorizonPostAnalyser3-Engagement-footer">
                        <div className="HorizonPostAnalyser3-Engagement-footer-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="HorizonPostAnalyser3-Engagement-footer-title">NLP Input for their goal for social media vs. their emotions used. does it fit with their brand/ voice?</p>
                    </div>
                </div>
            </div>





            <div className="Performia-container-footer">

                <div className="Performia-container-footer-header">
                    <p className="Performia-container-footer-header-title"><span>Live</span> Emotions</p>
                    <p className="Performia-container-footer-header-texte">See the emotional connection unfold in real time.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">


                    <div>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>(Overlay of each post metrics with colour stackedbar chart inputs lines, no fill)</div>
                        <div style={{ textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Hour by hour metric filtration bar chart of emotions used<br />per hour of the day.</div>
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




            <div className="Derivative-Next-Steps-for-Growth">
                <div className="Derivative-left-sidebar">
                    <p className="Derivative-left-sidebar-title">Next Steps for Growth</p>
                    <p className="Derivative-left-sidebar-text">Data-driven strategies for continuous improvement.</p>
                </div>

                <div className="Derivative-Next-Steps-for-Growth-container" style={{padding:"0 10px"}}>
                    <div className="Derivative-Next-Steps-for-Growth-container-left">
                        <div className="Derivative-Comparison-right-top">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="Derivative-Next-Steps-for-Growth-container-left-title">Summary</p>

                        <div style={{ width: '100%', height: '100%',padding:"0 20px" }}><span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Your </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Likes</span><span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> was above average, </span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>particularly</span><span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> with </span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>reels </span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>and</span><span style={{ color: 'black', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> use of</span><span style={{ color: '#00A4FF', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> X Emotion.<br /></span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}><br /></span><span style={{ color: '#D7505E', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Reach</span><span style={{ color: '#242424', fontSize: 24, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}> could see higher numbers—why not try using more hooks?</span></div>
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
                <p>Let’s take a look into what your competitors are doing</p>
                <button>
                    <div>Start competitor tracker</div>
                </button>
            </div>
        </div>
    )
}
export default Audience