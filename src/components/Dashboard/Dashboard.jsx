
import React from "react"
import './Dashboard.css'

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div className="dashboard-hrader-left">

                    <div className="dashboard-hrader-left-title" >Dashboard</div>

                    <div className="dashboard-hrader-left-text" >A complete view of your progress in one place.</div>
                </div>
                <div className="dashboard-header-right">

                    <a className="dashboard-header-right-button" href="#" >
                        <div >Select Platform</div>
                    </a>

                    <a className="dashboard-header-right-button" href="#" >
                        <div >Date Range</div>
                    </a>



                </div>
            </div>


            <div className="dashboard-firstsection">
                <div className="dashboard-firstsection-left">

                    <div style={{ width: '44px', height: '44px', background: '#D9D9D9', borderRadius: 9999 }} />

                    <div style={{ textAlign: 'center', color: '#0B66FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>@alexmassive</div>
                </div>

                <div className="dashboard-firstsection-right">
                    <div className="dashboard-firstsection-right-item">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard