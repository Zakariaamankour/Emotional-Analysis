import React from "react"
import './ABTesting.css'

const ABTestingStart = () => {
    return (
        <div className="ABTestingStart-container">
            <div className="ABTestingStart-container-header">
                <p className="ABTestingStart-container-header-title">A/B <span>Testing</span></p>
                <div className="ABTestingStart-container-buttons">
                    <button className="ABTestingStart-container-buttons-light">Existing Test</button>
                    <button className="ABTestingStart-container-buttons-blue">New Test</button>
                </div>
                <p className="ABTestingStart-container-header-text">“If you cannot measure it, you cannot manage it.”
                    - Peter Drucker</p>
            </div>
        </div>
    )
}

export default ABTestingStart