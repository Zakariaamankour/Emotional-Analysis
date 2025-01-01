import React from "react"
import './EmotionalAnalysis.css'

const Home = () => {
    return (
        <div className="EmotionalAnalysis">

            <span className="EmotionalAnalysis-title-emotional">Emotional</span>
            <span className="EmotionalAnalysis-title-space"> </span>
            <span className="EmotionalAnalysis-title-analysis">Analysis</span>



            <div class="EmotionalAnalysis-container">
                <button class="EmotionalAnalysis-button EmotionalAnalysis-upload-file">
                    <div>Upload via File</div>
                </button>
                <button class="EmotionalAnalysis-button EmotionalAnalysis-upload-link">
                    <div>Upload via Link</div>
                </button>

            </div>
            <div class="EmotionalAnalysis-description">
                Discover the world’s first micro expressions and body language analysis
            </div>


        </div>

    )
}

export default Home