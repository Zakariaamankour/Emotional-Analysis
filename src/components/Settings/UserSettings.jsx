import React from "react"
import './UserSettings.css'


const UserSettings = () => {
    return (
        <div className="UserSettings">
            <div className="UserSettings-title-left">

                <div className="UserSettings-title-left-title" >User Settings</div>

                <div className="UserSettings-title-left-text" >Manage your profile.</div>
            </div>


            <div className="UserSettings-container">
                <div className="UserSettings-container-up">
                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title"> My Profile</p>
                        <p className="UserSettings-container-link">Linked Accounts</p>
                        <p className="UserSettings-container-link">Brand Values</p>
                        <p className="UserSettings-container-link">Target Audience</p>
                    </div>

                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title"> Competitor Settings</p>
                        <p className="UserSettings-container-link">Add Competitor</p>
                        <p className="UserSettings-container-link">Delete Competitor</p>
                        <p className="UserSettings-container-link">Start Competitor Sync</p>
                    </div>

                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title"> Billing & Accounts</p>
                        <p className="UserSettings-container-link">Billing Address</p>
                        <p className="UserSettings-container-link">History of Payments</p>
                        <p className="UserSettings-container-link">Edit Payment Plan</p>
                    </div>
                </div>

                <div className="UserSettings-container-down">
                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title"> Trust</p>
                        <p className="UserSettings-container-link">C7 Data Collection</p>
                        <p className="UserSettings-container-link">Our Mission</p>
                        <p className="UserSettings-container-link">FAQ</p>
                    </div>

                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title"> Support</p>
                        <p className="UserSettings-container-link">Help & Contact</p>
                        <p className="UserSettings-container-link">Feedback</p>
                        <p className="UserSettings-container-link">Report and Issue</p>
                    </div>

                    <div className="UserSettings-container-item">
                        <p className="UserSettings-container-title">T&C’s</p>
                        <p className="UserSettings-container-link">Terms & Conditions</p>
                        <p className="UserSettings-container-link">Privacy Policy</p>
                        <p className="UserSettings-container-link">C7 Promise</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSettings