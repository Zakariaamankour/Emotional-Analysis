import React from "react"
import './BioOptimiser.css'
import SpiderGraph from "./SpiderGraph"
const BioOptimiser = () => {

    return (
        <div className="BioOptimiser">
            <div className="BioOptimiser-header-section">
                <div className="BioOptimiser-header-section-left">
                    <div className="BioOptimiser-header-section-left-header-title">
                        <span className="BioOptimiser-header-section-left-green">Bio</span>
                        <span className="BioOptimiser-header-section-left-black"> </span>
                        <span className="BioOptimiser-header-section-left-black-bold">Optimiser</span>
                    </div>
                    <div className="BioOptimiser-header-section-left-header-subtitle">
                        Review, Refine, Repeat.
                    </div>
                </div>

                <div className="BioOptimiser-header-section-right">
                    <button className="BioOptimiser-header-section-right-sentiment-button">
                        <div className="BioOptimiser-header-section-right-sentiment-text">Sentiment</div>
                    </button>
                    <div className="BioOptimiser-header-section-right-focus-mode-text">Select your Focus Mode</div>
                </div>

            </div>


            <div className="BioOptimiser-profile-section">
                <div className="BioOptimiser-profile-section-left">
                    <div className="BioOptimiser-profile-section-left-picture" />
                </div>
                <div className="BioOptimiser-profile-section-right">

                    <p className="BioOptimiser-profile-section-right-title">Looking good.</p>
                    <p className="BioOptimiser-profile-section-right-text">Now let’s take it a step further.</p>


                </div>
            </div>




            <div className="BioOptimiser-snapshot-section">
                <div className="BioOptimiser-snapshot-section-left">

                    <p className="BioOptimiser-snapshot-section-left-title">Snapshot</p>
                    <p className="BioOptimiser-snapshot-section-left-text">Your profile at a glance—refined and impactful.</p>


                </div>

                <div className="BioOptimiser-snapshot-section-right">
                    <SpiderGraph />
                </div>
            </div>




            <div className="BioOptimiser-picture-section">
                <div className="BioOptimiser-picture-section-left">

                    <p className="BioOptimiser-picture-section-left-title">The Picture</p>
                    <div className="BioOptimiser-picture-section-left-picture" />


                </div>

                <div className="BioOptimiser-picture-section-right">

                    <div className="BioOptimiser-picture-section-right-item">
                        <div className="BioOptimiser-picture-section-right-item-left">
                            <p className="BioOptimiser-picture-section-right-item-left-title">C7 Asthetic Score</p>
                            <p className="BioOptimiser-picture-section-right-item-left-text">78</p>
                        </div>
                        <div className="BioOptimiser-picture-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-picture-section-right-item-footer">
                            <p className="BioOptimiser-picture-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-picture-section-right-item">
                        <div className="BioOptimiser-picture-section-right-item-left">
                            <p className="BioOptimiser-picture-section-right-item-left-title">Emotional Tone</p>
                            <p className="BioOptimiser-picture-section-right-item-left-text">7pm EST</p>
                        </div>
                        <div className="BioOptimiser-picture-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-picture-section-right-item-footer">
                            <p className="BioOptimiser-picture-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="BioOptimiser-picture-section-right-item">
                        <div className="BioOptimiser-picture-section-right-item-left">
                            <p className="BioOptimiser-picture-section-right-item-left-title">Quality</p>
                            <p className="BioOptimiser-picture-section-right-item-left-text">100</p>
                        </div>
                        <div className="BioOptimiser-picture-section-right-item-right">
                            <img src="../images/circlegradient.png" alt="" />
                        </div>

                        <div className="BioOptimiser-picture-section-right-item-footer">
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>


                    <button className="BioOptimiser-picture-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>





            <div className="BioOptimiser-name-section">
                <div className="BioOptimiser-name-section-left">

                    <p className="BioOptimiser-name-section-left-title">The Picture</p>
                    <p className="BioOptimiser-name-section-left-text">Craft a memorable and authoritative presence.</p>


                </div>

                <div className="BioOptimiser-name-section-right">

                    <div className="BioOptimiser-name-section-right-item">
                        <div className="BioOptimiser-name-section-right-item-left">
                            <p className="BioOptimiser-name-section-right-item-left-title">Practical Value</p>
                            <p className="BioOptimiser-name-section-right-item-left-text">78</p>
                        </div>
                        <div className="BioOptimiser-name-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-name-section-right-item-footer">
                            <p className="BioOptimiser-name-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-name-section-right-item">
                        <div className="BioOptimiser-name-section-right-item-left">
                            <p className="BioOptimiser-name-section-right-item-left-title">Emotional Tone</p>
                            <p className="BioOptimiser-name-section-right-item-left-text">7pm EST</p>
                        </div>
                        <div className="BioOptimiser-name-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-name-section-right-item-footer">
                            <p className="BioOptimiser-name-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <div className="BioOptimiser-name-section-right-item">
                        <div className="BioOptimiser-name-section-right-item-left">
                            <p className="BioOptimiser-name-section-right-item-left-title">Professionalism</p>
                            <p className="BioOptimiser-name-section-right-item-left-text">100</p>
                        </div>
                        <div className="BioOptimiser-name-section-right-item-right">
                        </div>

                        <div className="BioOptimiser-name-section-right-item-footer">
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>


                    <button className="BioOptimiser-name-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>






            <div className="BioOptimiser-bio-section">
                <div className="BioOptimiser-bio-section-left">

                    <p className="BioOptimiser-bio-section-left-title">The Bio</p>
                    <p className="BioOptimiser-bio-section-left-text">Your story, your essence, simplified and engaging.</p>


                </div>

                <div className="BioOptimiser-bio-section-right">

                    <div className="BioOptimiser-bio-section-right-item">
                        <p className="BioOptimiser-bio-section-right-item-title">Suggestions</p>
                        <p className="BioOptimiser-bio-section-right-item-text">100</p>
                    </div>



                    <button className="BioOptimiser-bio-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>








            <div className="BioOptimiser-link-section">
                <div className="BioOptimiser-link-section-left">

                    <p className="BioOptimiser-link-section-left-title">The Link</p>
                    <p className="BioOptimiser-link-section-left-text">Direct your audience effectively with clear CTAs.</p>


                </div>

                <div className="BioOptimiser-link-section-right">

                    <div className="BioOptimiser-link-section-right-item">
                        <div className="BioOptimiser-link-section-right-item-left">
                            <p className="BioOptimiser-link-section-right-item-left-title">URL Length</p>
                            <p className="BioOptimiser-link-section-right-item-left-text">34</p>
                        </div>
                        <div className="BioOptimiser-link-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-link-section-right-item-footer">
                            <p className="BioOptimiser-link-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-link-section-right-item">
                        <div className="BioOptimiser-link-section-right-item-left">
                            <p className="BioOptimiser-link-section-right-item-left-title">Readability</p>
                            <p className="BioOptimiser-link-section-right-item-left-text">88</p>
                        </div>
                        <div className="BioOptimiser-link-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-link-section-right-item-footer">
                            <p className="BioOptimiser-link-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <button className="BioOptimiser-link-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>


            <div className="BioOptimiser-banner-section">
                <div className="BioOptimiser-banner-section-left">

                    <p className="BioOptimiser-banner-section-left-title">The Banner</p>
                    <p className="BioOptimiser-banner-section-left-text">Make a bold impression with strategic visuals.</p>


                </div>

                <div className="BioOptimiser-banner-section-right">

                    <div className="BioOptimiser-banner-section-right-item">
                        <div className="BioOptimiser-banner-section-right-item-left">
                            <p className="BioOptimiser-banner-section-right-item-left-title">Emotional Tone</p>
                            <p className="BioOptimiser-banner-section-right-item-left-text">23</p>
                        </div>
                        <div className="BioOptimiser-banner-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-banner-section-right-item-footer">
                            <p className="BioOptimiser-banner-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-banner-section-right-item">
                        <div className="BioOptimiser-banner-section-right-item-left">
                            <p className="BioOptimiser-banner-section-right-item-left-title">Vibe</p>
                            <p className="BioOptimiser-banner-section-right-item-left-text">Happiness</p>
                        </div>
                        <div className="BioOptimiser-banner-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-banner-section-right-item-footer">
                            <p className="BioOptimiser-banner-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-banner-section-right-item">
                        <div className="BioOptimiser-banner-section-right-item-left">
                            <p className="BioOptimiser-banner-section-right-item-left-title">C7 Audience Fit Score</p>
                            <p className="BioOptimiser-banner-section-right-item-left-text">45</p>
                        </div>
                        <div className="BioOptimiser-banner-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-banner-section-right-item-footer">
                            <p className="BioOptimiser-banner-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <button className="BioOptimiser-banner-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>



            <div className="BioOptimiser-music-section">
                <div className="BioOptimiser-music-section-left">

                    <p className="BioOptimiser-music-section-left-title">The Music</p>
                    <p className="BioOptimiser-music-section-left-text">Set the tone with the perfect auditory touch.</p>


                </div>

                <div className="BioOptimiser-music-section-right">

                    <div className="BioOptimiser-music-section-right-item">
                        <div className="BioOptimiser-music-section-right-item-left">
                            <p className="BioOptimiser-music-section-right-item-left-title">Emotional Tone</p>
                            <p className="BioOptimiser-music-section-right-item-left-text">Happiness</p>
                        </div>
                        <div className="BioOptimiser-music-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-music-section-right-item-footer">
                            <p className="BioOptimiser-music-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-music-section-right-item">
                        <div className="BioOptimiser-music-section-right-item-left">
                            <p className="BioOptimiser-music-section-right-item-left-title">Vibe</p>
                            <p className="BioOptimiser-music-section-right-item-left-text">Happiness</p>
                        </div>
                        <div className="BioOptimiser-music-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-music-section-right-item-footer">
                            <p className="BioOptimiser-music-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>
                    <div className="BioOptimiser-music-section-right-item">
                        <div className="BioOptimiser-music-section-right-item-left">
                            <p className="BioOptimiser-music-section-right-item-left-title">C7 Allignment Sore</p>
                            <p className="BioOptimiser-music-section-right-item-left-text">34</p>
                        </div>
                        <div className="BioOptimiser-music-section-right-item-right">

                        </div>

                        <div className="BioOptimiser-music-section-right-item-footer">
                            <p className="BioOptimiser-music-section-right-item-footer-title">Why is this important</p>
                            <img src="../images/questionicon.png" alt="" />
                        </div>
                    </div>

                    <button className="BioOptimiser-music-section-right-button" >
                        <div >See Full Analysis</div>
                    </button>

                </div>
            </div>





            <div className="BioOptimiser-top-3-section">
                <div className="BioOptimiser-top-3-section-left">
                    <p className="BioOptimiser-top-3-section-left-title">The Top 3</p>
                    <p className="BioOptimiser-top-3-section-left-text">Showcase your highlights and captivate attention.</p>
                </div>

                <div className="BioOptimiser-top-3-section-bottom">
                    <div className="BioOptimiser-top-3-section-bottom-1">
                        <p className="BioOptimiser-top-3-section-bottom-1-title">You are so close.</p>
                        <div className="scrore-bar">
                            <div className="scrore-bar-blue"></div>
                            <div className="scrore-bar-gray"></div>

                        </div>

                        <div className="BioOptimiser-top-3-section-bottom-1-button">
                            <button >
                                <div >Reveal the message behind your first 3 tiles</div>
                            </button>
                            <div className="BioOptimiser-top-3-section-bottom-1-button-text">Sign up for tier 2 access to get further analysis</div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default BioOptimiser