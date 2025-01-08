import React from "react"
import './CompetitorTrackerTool.css'

const CompetitorTrackerTool1 = () => {

    return (
        <div className="CompetitorTrackerTool1">

            <div className="CompetitorTrackerTool1-title">
                <span className="CompetitorTrackerTool1-Competitor">Competitor</span>
                <span className="CompetitorTrackerTool1-black"> </span>
                <span className="CompetitorTrackerTool1-Tracker-bold">Tracker</span>
            </div>

            <button className="CompetitorTrackerTool1-button">
                <div className="CompetitorTrackerTool1-select">Select Platform</div>
            </button>

            <div className="CompetitorTrackerTool1-subtext">
                Keep tabs on your competition with precision tracking.
            </div>

        </div>
    )
}
export default CompetitorTrackerTool1