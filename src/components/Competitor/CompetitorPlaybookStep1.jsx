import React from "react"
import './CompetitorPlaybook.css'

const CompetitorPlaybookStep1 = () => {

    return (
        <div className="CompetitorPlaybookStep1">

            <div className="CompetitorPlaybookStep1-title">
                <span className="CompetitorPlaybookStep1-Tracker-bold">Playbook</span>
                <span className="CompetitorPlaybookStep1-black"> </span><br />
                <span className="CompetitorPlaybookStep1-Competitor">Competitor</span>

            </div>

            <button className="CompetitorPlaybookStep1-button">
                <div className="CompetitorPlaybookStep1-select">Select Platform</div>
            </button>

            <div className="CompetitorPlaybookStep1-subtext">
                Start your multidimensional insights.
            </div>

        </div>
    )
}
export default CompetitorPlaybookStep1