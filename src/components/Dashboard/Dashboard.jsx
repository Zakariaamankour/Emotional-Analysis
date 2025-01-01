
import React from "react"
import './Dashboard.css'
import DashboardGraphs from "./DashboardGraphs";

const Dashboard = () => {



    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="dashboard-hrader-left">

                    <div className="dashboard-hrader-left-title" >Dashboard</div>

                    <div className="dashboard-hrader-left-text" >A complete view of your progress in one place.</div>
                </div>
                <div className="dashboard-header-right">

                    <a className="dashboard-header-right-button" href="#" >
                        <div >Select Platform</div>
                    </a>

                    <a className="dashboard-header-right-button" href="#" >
                        <div >Date Range</div>
                    </a>



                </div>
            </div>

            <div className="dashboard-diagnostic">


                <div className="dashboard-firstsection">
                    <div className="dashboard-firstsection-left">

                        <div style={{ width: '44px', height: '44px', background: '#D9D9D9', borderRadius: 9999 }} />

                    </div>

                    <div className="dashboard-firstsection-right">
                        <div className="dashboard-firstsection-right-item">
                            <div className="dashboard-firstsection-right-item-title">@alexmassive</div>

                        </div>
                        <div className="dashboard-firstsection-left-item">
                            <input type="checkbox" value="1" class="switch" />
                            <p className="dashboard-firstsection-left-item-title">Comparison</p>
                        </div>
                    </div>



                    <div className="dashboard-firstsection-items">
                        <div className="dashboard-firstsection-items-left">
                            <p className="dashboard-firstsection-items-left-items">Followers</p>
                            <p className="dashboard-firstsection-items-left-items">Post Freq.</p>
                            <p className="dashboard-firstsection-items-left-items">Avg. ER</p>
                            <p className="dashboard-firstsection-items-left-items">Likes</p>
                            <p className="dashboard-firstsection-items-left-items">Shares</p>
                            <p className="dashboard-firstsection-items-left-items">Comments</p>
                            <p className="dashboard-firstsection-items-left-items"><strong>C7</strong> Growth</p>

                        </div>

                        <div className="dashboard-firstsection-items-right">
                            <p className="dashboard-firstsection-items-right-items">1432</p>
                            <p className="dashboard-firstsection-items-right-items">12,302</p>
                            <p className="dashboard-firstsection-items-right-items">981</p>
                            <p className="dashboard-firstsection-items-right-items">544</p>
                            <p className="dashboard-firstsection-items-right-items">1.22</p>
                            <p className="dashboard-firstsection-items-right-items">1432</p>
                            <p className="dashboard-firstsection-items-right-items">1432</p>

                        </div>
                    </div>

                </div>

                <div className="dashboard-secondsection">

                    <div className="dashboard-secondsection-container">
                        <div className="dashboard-secondsection-header">
                            <div className="dashboard-secondsection-container-icon-1"></div>
                        </div>
                        <div className="dashboard-secondsection-container-title">@competitor1</div>

                        <div className="dashboard-secondsection-container-icon-2"></div>

                        <div className="dashboard-secondsection-container-items">
                            <div className="dashboard-secondsection-container-items-left">
                                <p className="dashboard-secondsection-container-items-left-items">Followers</p>
                                <p className="dashboard-secondsection-container-items-left-items">Post Freq.</p>
                                <p className="dashboard-secondsection-container-items-left-items">Avg. ER</p>
                            </div>

                            <div className="dashboard-secondsection-container-items-right">
                                <p className="dashboard-secondsection-container-items-right-items">3,123,102</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-secondsection-container">
                        <div className="dashboard-secondsection-header">
                            <div className="dashboard-secondsection-container-icon-1"></div>
                        </div>
                        <div className="dashboard-secondsection-container-title">@competitor1</div>

                        <div className="dashboard-secondsection-container-icon-2"></div>

                        <div className="dashboard-secondsection-container-items">
                            <div className="dashboard-secondsection-container-items-left">
                                <p className="dashboard-secondsection-container-items-left-items">Followers</p>
                                <p className="dashboard-secondsection-container-items-left-items">Post Freq.</p>
                                <p className="dashboard-secondsection-container-items-left-items">Avg. ER</p>
                            </div>

                            <div className="dashboard-secondsection-container-items-right">
                                <p className="dashboard-secondsection-container-items-right-items">3,123,102</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                            </div>
                        </div>
                    </div>


                    <div className="dashboard-secondsection-container">
                        <div className="dashboard-secondsection-header">
                            <div className="dashboard-secondsection-container-icon-1"></div>
                        </div>
                        <div className="dashboard-secondsection-container-title">@competitor1</div>

                        <div className="dashboard-secondsection-container-icon-2"></div>

                        <div className="dashboard-secondsection-container-items">
                            <div className="dashboard-secondsection-container-items-left">
                                <p className="dashboard-secondsection-container-items-left-items">Followers</p>
                                <p className="dashboard-secondsection-container-items-left-items">Post Freq.</p>
                                <p className="dashboard-secondsection-container-items-left-items">Avg. ER</p>
                            </div>

                            <div className="dashboard-secondsection-container-items-right">
                                <p className="dashboard-secondsection-container-items-right-items">3,123,102</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                            </div>
                        </div>
                    </div>



                    <div className="dashboard-secondsection-container">
                        <div className="dashboard-secondsection-header">
                            <div className="dashboard-secondsection-container-icon-1"></div>
                        </div>
                        <div className="dashboard-secondsection-container-title">@competitor1</div>

                        <div className="dashboard-secondsection-container-icon-2"></div>

                        <div className="dashboard-secondsection-container-items">
                            <div className="dashboard-secondsection-container-items-left">
                                <p className="dashboard-secondsection-container-items-left-items">Followers</p>
                                <p className="dashboard-secondsection-container-items-left-items">Post Freq.</p>
                                <p className="dashboard-secondsection-container-items-left-items">Avg. ER</p>
                            </div>

                            <div className="dashboard-secondsection-container-items-right">
                                <p className="dashboard-secondsection-container-items-right-items">3,123,102</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                                <p className="dashboard-secondsection-container-items-right-items">1432</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className="dashboard-perfoomance-title">
                <div className="dashboard-perfoomance-title-left">

                    <div className="dashboard-perfoomance-title-left-title" >Your Performance</div>

                    <div className="dashboard-perfoomance-title-left-text" >Track your metrics and see your growth story.</div>
                </div>

            </div>

            <div className="centered-text">
                <span className="main-text">You’ve gained </span>
                <span className="highlight-text">150</span>
                <span className="main-text"> new followers and increased engagement by </span>
                <span className="highlight-text">12%</span>
                <span className="main-text"> this month!<br className="break-line" />🍾</span>
            </div>




            <div className="graphs-data">
                <DashboardGraphs />
            </div>

            <a href="#" className="button-container-2">
                <div>
                    View more with Performia
                </div>
            </a>
            <p className="evaluate-text">Evaluate, analyse, implement.</p>




            <div className="competitor-tracker-container">
                <div className="competitor-tracker-container-1">

                    <div className="dashboard-perfoomance-title">
                        <div className="dashboard-perfoomance-title-left">
                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <img src="../images/brainblack.png" alt="" width={25} height={25} />
                                <div className="dashboard-perfoomance-title-left-title" >C7.AI </div>

                            </div>

                            <div className="dashboard-perfoomance-title-left-text" >Personalised tips tailored for your content journey.</div>
                        </div>

                    </div>

                    <div className="check-items">
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Launch your first Emotional Analysis</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Track 4 Competitors</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Start your first A/B Test</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Start your first Bio Optimiser</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Adjust your post scheduling</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Analyse your performance with Performia*</p>
                        </div>
                        <div className="check-items-item">
                            <img src="../images/checkicon.png" alt="" width={50} height={50} />
                            <p>Reach an adjacent audience to yours.</p>
                        </div>

                    </div>


                    <a href="#" className="button-container-2">
                        <div>
                            See all suggestions here
                        </div>
                    </a>
                    <p className="evaluate-text">Small changes, big improvements.</p>





                    <div className="dashboard-perfoomance-title">
                        <div className="dashboard-perfoomance-title-left">

                            <div className="dashboard-perfoomance-title-left-title" >Competitor Tracker</div>

                            <div className="dashboard-perfoomance-title-left-text" >Daily inspiration to fuel your creative goals.</div>
                        </div>

                    </div>



                    <div className="competitor-map-container">
                        <div className="competitor-map-container-left">
                            <div className="competitor-map-container-left-up">

                                <div className="competitor-map-container-left-up-middle-side">
                                    <p className="info-text">Followers</p>
                                    <p className="info-text">Likes</p>
                                    <p className="info-text">Comments.</p>
                                    <p className="info-text">Post Freq.</p>
                                </div>

                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 1</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 2</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 3</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text highlight-you">You</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>

                            </div>
                            <div className="competitor-map-container-left-up competitor-map-container-left-down">

                                <div className="competitor-map-container-left-up-middle-side">
                                    <p className="info-text">Followers</p>
                                    <p className="info-text">Likes</p>
                                    <p className="info-text">Comments.</p>
                                    <p className="info-text">Post Freq.</p>
                                </div>

                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 1</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 2</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text">Competitor 3</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>
                                <div className="competitor-map-container-left-up-middle-items">
                                    <p className="competitor-text highlight-you">You</p>
                                    <p className="dashboard-firstsection-items-right-items">1432</p>
                                    <p className="dashboard-firstsection-items-right-items">12,302</p>
                                    <p className="dashboard-firstsection-items-right-items">981</p>
                                    <p className="dashboard-firstsection-items-right-items">544</p>
                                </div>


                                <div className="competitor-map-container-left-down-button">
                                    <a href="#" className="button-container-2">
                                        <div>
                                            View your detailed comparison
                                        </div>
                                    </a>
                                    <p className="evaluate-text">Competitor tracker will launch in new tab ⍈</p>
                                </div>
                                <div className="overlay-layer"></div>

                            </div>

                        </div>

                        <div className="competitor-map-container-right">
                            <p className="competitor-map-container-right-title">
                                Your advantages
                            </p>

                            <div className="competitor-map-container-right-content">
                                <p className="competitor-map-container-right-content-item" >You are posting more than your closest competitor</p>
                                <p className="competitor-map-container-right-content-item" >You are posting more than your closest competitor</p>
                                <p className="competitor-map-container-right-content-item" >You are posting more than your closest competitor</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="acheivements-container">
                <div className="acheivements-container-hearder">

                    <div className="acheivements-container-title" >Your Acheivements</div>

                    <div className="acheivements-container-sub-title" >Nice Work</div>
                </div>



                <div className="acheivements-container-1">
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />
                    <div className="acheivements-container-1-item" />

                </div>
                <a href="#" className="button-container-2">
                    <div>
                        See Full list of Accompishments
                    </div>
                </a>


                <div className="acheivements-container-2">
                    <div className="acheivements-container-2-title-left">

                        <div className="acheivements-container-2-title-left-title" >Quote of the day.</div>

                        <div className="acheivements-container-2-title-left-text" >Daily inspiration to fuel your creative goals.</div>
                    </div>


                    <div className="quote-of-day-container" >
                        <div className="quote-of-day-container-content"  >Quote of the day:</div>
                    </div>


                </div>





                <div className="acheivements-container-3">
                    <div className="acheivements-container-3-title-left">

                        <div className="acheivements-container-3-title-left-title" >Excel your skills</div>

                        <div className="acheivements-container-3-title-left-text" >Learn and grow with targeted guidance.</div>
                    </div>


                    <div className="excel-your-skills-container" >
                        <div className="excel-your-skills-container-left"  >
                            <p className="excel-your-skills-container-left-item">Post timing</p>
                            <p className="excel-your-skills-container-left-item">Evoking emotions</p>
                            <p className="excel-your-skills-container-left-item">Body language</p>
                            <p className="excel-your-skills-container-left-item">Hand gestures</p>
                            <p className="excel-your-skills-container-left-item">Viral vs. Visual Hooks</p>
                            <p className="excel-your-skills-container-left-item">7 tips. 77 Seconds</p>

                        </div>

                        <div className="excel-your-skills-container-right"  >
                            <img src="../images/gruaduited.png" alt="" className="excel-your-skills-container-right-img" />
                            <p className="excel-your-skills-container-right-title">Learn now.</p>
                            <a href="#" className="button-container-2">
                                <div>
                                    Expand your knowledge
                                </div>
                            </a>
                            <p className="evaluate-text">Launch e-learning with C7.AI</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Dashboard