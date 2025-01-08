import React from "react"
import './CompetitorTrackerTool.css'
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import PieChart from "./PieChart";

const CompetitorTrackerTool3 = () => {

    return (
        <div className="CompetitorTrackerTool3">

            <div className="CompetitorTrackerTool2-header">
                <div className="CompetitorTrackerTool2-header-left">
                    <p className="CompetitorTrackerTool2-header-left-title">Competitor <span>Tracker</span></p>
                    <p className="CompetitorTrackerTool2-header-left-text">@username1</p>
                </div>
                <div className="CompetitorTrackerTool2-header-right">
                    <button>Start a new analysis</button>
                    <p>Change Competitor</p>
                </div>

            </div>


            <div className="CompetitorTrackerTool3-first-section">
                <div className="CompetitorTrackerTool3-first-section-item">
                    <div className="CompetitorTrackerTool3-first-section-item-top">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Post Frequency</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">1.2</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-top">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">C7 Engagement Score</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">67</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-bottom">
                        <div className="CompetitorTrackerTool3-first-section-item-bottom-img-container">
                            <img src="../images/brainblack.png" alt="" />
                            <p>C7.AI</p>
                        </div>
                        <p className="CompetitorTrackerTool3-first-section-item-bottom-title">The Insight</p>
                        <p className="CompetitorTrackerTool3-first-section-item-bottom-text">*input from NLP model about competitors snapshot. how they differ to our user, highlighted flaws with actionable steps*</p>
                    </div>
                </div>
            </div>


            <div className="CompetitorTrackerTool3-snapshot">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Trinity-left-sidebar-title">Snapshot</p>
                    <p className="Trinity-left-sidebar-text">Hover over each section to gain more info.</p>
                </div>

                <div className="CompetitorTrackerTool3-snapshot-container">
                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Post Frequency</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">1.2</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">C7 Engagement Score</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">67</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">C7 Bio Score</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">33</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Most Prodiminent Engagement</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">Likes</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>


                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Category</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">Fitness & Wellbeing</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>


                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Favourite Post Type</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">Reel</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>


                    <div className="CompetitorTrackerTool3-snapshot-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Bio Keywords</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">Fitness Guide</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-snapshot-container-item-button">
                        <button>Discover your deeper dive</button>
                        <p>Understand which age groups and gender <br />dictate what metric.</p>
                    </div>
                </div>
            </div>




            <div className="CompetitorTrackerTool3-Difference">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#078BFF" }} />
                    <p className="Trinity-left-sidebar-title">Difference</p>
                    <p className="Trinity-left-sidebar-text">Hover over each section to gain more info.</p>
                </div>

                <div className="CompetitorTrackerTool3-Difference-container">
                    <div className="CompetitorTrackerTool3-Difference-container-items">
                        <div className="CompetitorTrackerTool3-Difference-container-item">
                            <div className="CompetitorTrackerTool3-Difference-container-item-left"></div>
                            <div className="CompetitorTrackerTool3-Difference-container-item-right">
                                <div className="CompetitorTrackerTool3-Difference-container-item-right-top">
                                    <p className="CompetitorTrackerTool3-Difference-container-item-right-date-range">09/11/2024 - 09/12/2024</p>
                                    <div className="rectangle-CompetitorTrackerTool3-Difference-container-item-right"></div>
                                </div>
                                <div className="CompetitorTrackerTool3-Difference-container-item-right-item">
                                    <div className="CompetitorTrackerTool3-Difference-container-item-right-item-left">
                                        <p>Followers</p>
                                        <p>Likes</p>
                                        <p>Posts</p>
                                        <p>Post Freq.</p>
                                        <p>Growth</p>
                                    </div>
                                    <div className="CompetitorTrackerTool3-Difference-container-item-right-item-right">
                                        <p>132,343</p>
                                        <p>100,321</p>
                                        <p>2,302</p>
                                        <p>1.2</p>
                                        <p>4.2%</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <FaArrowRight />
                        <div className="CompetitorTrackerTool3-Difference-container-item">
                            <div className="CompetitorTrackerTool3-Difference-container-item-left"></div>
                            <div className="CompetitorTrackerTool3-Difference-container-item-right CompetitorTrackerTool3-Difference-container-item-right-right">
                                <div className="CompetitorTrackerTool3-Difference-container-item-right-top">
                                    <p className="CompetitorTrackerTool3-Difference-container-item-right-date-range">09/11/2024 - 09/12/2024</p>
                                    <div className="rectangle-CompetitorTrackerTool3-Difference-container-item-right"></div>
                                </div>
                                <div className="CompetitorTrackerTool3-Difference-container-item-right-item">
                                    <IoLockClosedOutline size={48} />

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-snapshot-container-item-button-blue">
                        <button>Start Competitor Comparison Tool</button>
                        <p>Visual the steps your competitor is taking,<br /> and use this to your advantage.</p>
                    </div>
                </div>
            </div>


            <div className="CompetitorTrackerTool3-Bio">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#FFE607" }} />
                    <p className="Trinity-left-sidebar-title">Bio</p>
                    <p className="Trinity-left-sidebar-text">Crafting Connection Points.</p>
                </div>

                <div className="CompetitorTrackerTool3-Bio-container">


                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Bio-score">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Post Frequency</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">1.2</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>

                    </div>

                    <div className="CompetitorTrackerTool3-Bio-checklist-container">
                        <p className="CompetitorTrackerTool3-Bio-checklist-container-title">Bio Checklist</p>
                        <div className="CompetitorTrackerTool3-Bio-checklist">
                            <div className="CompetitorTrackerTool3-Bio-checklist-left">
                                <p>Picture</p>
                                <p>Name</p>
                                <p>Bio</p>
                                <p>Category</p>
                                <p>Music</p>
                                <p>Banner</p>
                                <p>Link</p>
                                <p>Score</p>
                            </div>

                            <div className="CompetitorTrackerTool3-Bio-checklist-right">

                                <p><FaRegCircleXmark size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p><IoIosCheckmarkCircleOutline size={24} /></p>
                                <p style={{ color: "#70D750", fontSize: "24px" }}>5/6</p>

                            </div>
                        </div>

                    </div>

                    <div className="CompetitorTrackerTool3-Bio-keywords">
                        <div className="CompetitorTrackerTool3-Bio-img-container">
                            <img src="../images/brainblack.png" alt="" />
                            <p className="CompetitorTrackerTool3-Bio-img-container-brand">C7.AI</p>
                            <p className="CompetitorTrackerTool3-Bio-img-container-title">Bio Keywords</p>
                        </div>

                        <div className="CompetitorTrackerTool3-Bio-keywords-items">
                            <p>Fitness Guide</p>
                            <p>Fitness</p>
                            <p>Health</p>
                            <p>Tutor</p>
                            <p>Online Coach</p>
                            <p>Gym</p>
                            <p>Body</p>

                        </div>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-snapshot-container-item-button-blue">
                        <button>Start Bio Optimiser Now</button>
                        <p>Touch into  their emotional connections to highlight <br /> and perfect their critiques. </p>
                    </div>
                </div>
            </div>





            <div className="Performia-container-footer">
                <div className="Performia-container-footer-header">
                    <p className="Performia-container-footer-header-title"><span>Live</span> Inisghts</p>
                    <p className="Performia-container-footer-header-texte">Engagement in Real <br />Time.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">

                    <div style={{ textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>(Overlay of each post metrics with colour stackedbar chart inputs lines, no fill)</div>

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



            <div className="CompetitorTrackerTool3-Post">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#4FC74C" }} />
                    <p className="Trinity-left-sidebar-title">Post</p>
                    <p className="Trinity-left-sidebar-text">The stories they share.</p>
                </div>

                <div className="CompetitorTrackerTool3-Post-container">
                    <div className="CompetitorTrackerTool3-Post-container-img">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                    <div className="CompetitorTrackerTool3-Post-container-items">
                        <div className="CompetitorTrackerTool3-Post-container-items-left">
                            <p>Insert piechart of post segregation</p>
                            <p>Hover over to see % and number of posts</p>
                        </div>

                        <div className="CompetitorTrackerTool3-Post-container-items-right">
                            <PieChart />

                        </div>
                    </div>


                </div>
            </div>





            <div className="CompetitorTrackerTool3-Captions">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "black" }} />
                    <p className="Trinity-left-sidebar-title">Captions</p>
                    <p className="Trinity-left-sidebar-text">Words that drive action.</p>
                </div>

                <div className="CompetitorTrackerTool3-Captions-container">
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Average Caption Length</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">13 Words</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Best Caption Length</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">10 Words</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Average no. of Hashtags</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">2</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-Captions-container-button">
                        <button>Explore more Caption Stats</button>
                    </div>
                </div>
            </div>


            <div className="CompetitorTrackerTool3-Hashtags">
                <div className="Trinity-left-sidebar">
                    <div className="Trinity-left-sidebar-bar" style={{ background: "#6941BF" }} />
                    <p className="Trinity-left-sidebar-title">Hashtags</p>
                    <p className="Trinity-left-sidebar-text">The power of tags.</p>
                </div>

                <div className="CompetitorTrackerTool3-Captions-container">
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Favourite Hashtag</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">#VENTR</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Most Engaging Hashtag</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">#fyp</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="CompetitorTrackerTool3-first-section-item-top CompetitorTrackerTool3-Captions-container-item">
                        <p className="CompetitorTrackerTool3-first-section-item-top-title">Average no. of Hashtags</p>
                        <p className="CompetitorTrackerTool3-first-section-item-top-text">2.4</p>
                        <div className="showmore">
                            <p>Show more</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="CompetitorTrackerTool3-Captions-container-button">
                        <button>Uncover all Hashtag metrics</button>
                    </div>
                </div>
            </div>



            <div className="Performia-container-footer">
                <div className="Performia-container-footer-header">
                    <p className="Performia-container-footer-header-title"><span>Live</span> Captions + Hashtags</p>
                    <p className="Performia-container-footer-header-texte"> Dynamic words in motion.</p>
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
                            Show me why they are using these tactics
                        </button>

                        <p className="Performia-container-footer-content-text">
                            Explore the perfect caption your competitor is using with <br />
                            actionable steps of how you can beat them
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default CompetitorTrackerTool3