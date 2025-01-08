import React from "react"
import './CompetitorTrackerTool.css'

const CompetitorTrackerTool2 = () => {

    return (
        <div className="CompetitorTrackerTool2">

            <div className="CompetitorTrackerTool2-header">
                <div className="CompetitorTrackerTool2-header-left">
                    <p className="CompetitorTrackerTool2-header-left-title">Competitor <span>Tracker</span></p>
                    <p className="CompetitorTrackerTool2-header-left-text">Select your tracker</p>
                </div>
                <div className="CompetitorTrackerTool2-header-right">
                    <button>Change the competitors I track</button>
                    <p>Found some new competition?</p>
                </div>

            </div>

            <div className="CompetitorTrackerTool2-items-container">
                <div className="CompetitorTrackerTool2-item">
                    <div className="CompetitorTrackerTool2-item-left"></div>
                    <div className="CompetitorTrackerTool2-item-right">
                        <p className="CompetitorTrackerTool2-item-right-title">
                            @Username1
                        </p>
                        <div className="CompetitorTrackerTool2-item-right-socials">
                            <div className="CompetitorTrackerTool2-item-right-socials-left">
                                <p>Followers</p>
                                <p>Likes</p>
                                <p>Posts</p>
                            </div>
                            <div className="CompetitorTrackerTool2-item-right-socials-right">
                                <p>132,343</p>
                                <p>100,321</p>
                                <p>2,302</p>
                            </div>
                        </div>
                        <button>Dive into full analysis</button>
                    </div>
                    <div className="CompetitorTrackerTool2-item-icon"></div>
                </div>
                <div className="CompetitorTrackerTool2-item">
                    <div className="CompetitorTrackerTool2-item-left"></div>
                    <div className="CompetitorTrackerTool2-item-right">
                        <p className="CompetitorTrackerTool2-item-right-title">
                            @Username2
                        </p>
                        <div className="CompetitorTrackerTool2-item-right-socials">
                            <div className="CompetitorTrackerTool2-item-right-socials-left">
                                <p>Followers</p>
                                <p>Likes</p>
                                <p>Posts</p>
                            </div>
                            <div className="CompetitorTrackerTool2-item-right-socials-right">
                                <p>132,343</p>
                                <p>100,321</p>
                                <p>2,302</p>
                            </div>
                        </div>
                        <button>Dive into full analysis</button>
                    </div>
                    <div className="CompetitorTrackerTool2-item-icon"></div>
                </div>
                <div className="CompetitorTrackerTool2-item">
                    <div className="CompetitorTrackerTool2-item-left"></div>
                    <div className="CompetitorTrackerTool2-item-right">
                        <p className="CompetitorTrackerTool2-item-right-title">
                            @Username3
                        </p>
                        <div className="CompetitorTrackerTool2-item-right-socials">
                            <div className="CompetitorTrackerTool2-item-right-socials-left">
                                <p>Followers</p>
                                <p>Likes</p>
                                <p>Posts</p>
                            </div>
                            <div className="CompetitorTrackerTool2-item-right-socials-right">
                                <p>132,343</p>
                                <p>100,321</p>
                                <p>2,302</p>
                            </div>
                        </div>
                        <button>Dive into full analysis</button>
                    </div>
                    <div className="CompetitorTrackerTool2-item-icon"></div>
                </div>
                <div className="CompetitorTrackerTool2-item-last">
                    <p>Select your competitor.</p>

                </div>
            </div>



        </div>
    )
}
export default CompetitorTrackerTool2