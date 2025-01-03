import React, { useState } from "react"
import './OurStory.css'
const OurStory = () => {


    return (
        <div className="OurStory">
            <div className="OurStory-header">
                <div className="OurStory-header-left">
                    <p className="OurStory-header-left-title">C7 Story</p>
                    <p className="OurStory-header-left-text">Your questions answered with clarity and precision.</p>

                </div>
                <div className="OurStory-header-right">
                    <button className="OurStory-header-right-button-light">
                        <div>Log in</div>
                    </button>
                    <button className="OurStory-header-right-button-blue">
                        <div>Sign Up</div>
                    </button>
                </div>
            </div>


            <div className="OurStory-main">
                <div className="OurStory-main-right">

                </div>

            </div>
        </div>
    )
}

export default OurStory