import React from "react"
import './BioOptimiser.css'

const BioOptimiserStart = () => {

    return (
        <div className="BioOptimiserStart">

            <div className="BioOptimiserStart-title">
                <span className="BioOptimiserStart-green">Bio</span>
                <span className="BioOptimiserStart-black"> </span>
                <span className="BioOptimiserStart-black-bold">Optimiser</span>
            </div>

            <button className="BioOptimiserStart-button">
                <div className="BioOptimiserStart-select">Select Platform</div>
            </button>

            <div className="BioOptimiserStart-subtext">
                Uncover how your profile resonates with your audience
            </div>

        </div>
    )
}
export default BioOptimiserStart