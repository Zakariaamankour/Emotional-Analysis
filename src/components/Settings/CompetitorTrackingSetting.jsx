import React from "react"
import './CompetitorTrackingSetting.css'
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompetitorTrackingSetting = () => {
    return (
        <div className="CompetitorTrackingSetting">
            <div className="CompetitorTrackingSetting-title-left">
                <div>
                    <div className="CompetitorTrackingSetting-title-left-title" >Competitor Tracking Setting</div>
                    <div className="CompetitorTrackingSetting-title-left-text" >Alter who you keep track of.</div>
                </div>

                <Link to="/" className="return-button"  >
                    <div  >Back to User Settings</div>
                </Link>

            </div>


            <div className="CompetitorTrackingSetting-container">
                <div className="CompetitorTrackingSetting-container-up">

                    <div className="CompetitorTrackingSetting-container-item-left">
                        <p className="CompetitorTrackingSetting-container-title">Your Competitors</p>
                        <p className="CompetitorTrackingSetting-container-socialName">Competitor 1</p>
                        <p className="CompetitorTrackingSetting-container-socialName">Competitor 2</p>
                        <p className="CompetitorTrackingSetting-container-socialName">Competitor 3</p>
                        <p className="CompetitorTrackingSetting-container-socialName">Competitor 4</p>
                    </div>

                    <div className="CompetitorTrackingSetting-container-item-right">
                        <p className="CompetitorTrackingSetting-container-title">Click to edit</p>
                        <p className="CompetitorTrackingSetting-container-link">@competitorusername1</p>
                        <p className="CompetitorTrackingSetting-container-link">@competitorusername2</p>
                        <p className="CompetitorTrackingSetting-container-link">@competitorusername3</p>
                        <p className="CompetitorTrackingSetting-container-link">@competitorusername4</p>
                    </div>
                </div>

                <div className="CompetitorTrackingSetting-container-down">

                    <div className="CompetitorTrackingSetting-container-item-left">
                        <p className="CompetitorTrackingSetting-container-title">Sync Competitors</p>
                        <p className="CompetitorTrackingSetting-container-live-insights">

                            <span className="CompetitorTrackingSetting-container-live-insights-live-text"  >Live</span>
                            <span className="CompetitorTrackingSetting-container-live-insights-insights-text"  > Insights</span>

                        </p>

                    </div>

                    <div className="CompetitorTrackingSetting-container-item-right">
                        <a href="#" className="button-container-CompetitorTrackingSetting">
                            <div>
                                See all suggestions here
                            </div>
                        </a>
                    </div>
                </div>

                <FaEdit className="fa-edit-icon" />

            </div>

            <div style={{ textAlign: "center" }}>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>To achieve best results with </span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>C7.</span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>AI</span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>, ensure the data above is accurate. </span>
            </div>




        </div>


    )
}

export default CompetitorTrackingSetting