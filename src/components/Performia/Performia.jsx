import React from "react"
import './Performia.css'
import ChartSlider from "./ChartSlider"
import Heatmap from "./Heatmap"

const Performia = () => {
    return (
        <div className="Performia-container">


            <div className="Performia">
                <div className="Performia-header">
                    <p className="Performia-header-title">Performia</p>
                    <p className="Performia-header-text">Less numbers,<br /> more graphs.</p>
                </div>

                <div className="Performia-top-button-container">
                    <button className="Performia-top-button-container-button">
                        Select Date Range
                    </button>

                    <p className="Performia-top-button-container-text">Upgrade your plan to get more data</p>
                </div>


                <ChartSlider />

                <p className="Performia-enlarge-title">
                    Click to enlarge.
                </p>

                <Heatmap />




            </div>



            <div className="Performia-container-footer">
                <div className="Performia-container-footer-header">
                    <p className="Performia-container-footer-header-title"><span>Live</span> Updates</p>
                    <p className="Performia-container-footer-header-texte">Stay ahead with continuous,<br /> real-time data.</p>
                    <div className="Performia-container-footer-header-image-container">
                        <img src="../images/brainblack.png" alt="" />
                        <p>C7.AI</p>
                    </div>

                </div>


                <div className="Performia-container-footer-content">
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>Outsource the </span>
                        <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>boring</span>
                        <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 500, wordWrap: 'break-word' }}> </span>
                        <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>stuff to us.<br /></span>
                        <span style={{ color: '#0B66FF', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Focus on whats innovating your content.</span>
                    </div>
                    <div>
                        <button className="Performia-container-footer-content-button">
                            View all Elevate Tier advantages
                        </button>

                        <p className="Performia-container-footer-content-text">
                            Save your effort and gain time.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Performia