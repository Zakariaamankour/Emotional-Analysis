import React from "react"
import './Audience.css'

const AudienceStart = () => {

    return (
        <div className="AudienceStart">

            <div className="AudienceStart-title">
                <p className="AudienceStart-title"><span>Audience</span> Persona</p>
            </div>

            <button className="AudienceStart-button">
                <div className="AudienceStart-select">Select Platform</div>
            </button>

            <div className="AudienceStart-subtext">
                Resonate with who you are interacting with. <br /> Do you really know your audience?
            </div>

        </div>
    )
}
export default AudienceStart