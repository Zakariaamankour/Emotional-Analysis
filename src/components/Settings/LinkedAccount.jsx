import React from "react"
import './LinkedAccount.css'
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const LinkedAccount = () => {
    return (
        <div className="LinkedAccount">
            <div className="LinkedAccount-title-left">
                <div>
                    <div className="LinkedAccount-title-left-title" >Linked Accounts</div>
                    <div className="LinkedAccount-title-left-text" >Your profiles.</div>
                </div>

                <Link to="/" className="return-button"  >
                    <div  >Back to User Settings</div>
                </Link>

            </div>


            <div className="LinkedAccount-container">
                <div className="LinkedAccount-container-up">

                    <div className="LinkedAccount-container-item-left">
                        <p className="LinkedAccount-container-title">My Accounts</p>
                        <p className="LinkedAccount-container-socialName">Instagram</p>
                        <p className="LinkedAccount-container-socialName">Meta</p>
                        <p className="LinkedAccount-container-socialName">X</p>
                        <p className="LinkedAccount-container-socialName">Tiktok</p>
                        <p className="LinkedAccount-container-socialName">Linkedin</p>
                        <p className="LinkedAccount-container-socialName">YouTube</p>
                    </div>

                    <div className="LinkedAccount-container-item-right">
                        <p className="LinkedAccount-container-title">My Accounts</p>
                        <p className="LinkedAccount-container-link">Instagram username</p>
                        <p className="LinkedAccount-container-link">Meta username</p>
                        <p className="LinkedAccount-container-link">X username</p>
                        <p className="LinkedAccount-container-link">Tiktok username</p>
                        <p className="LinkedAccount-container-link">Linkedin username</p>
                        <p className="LinkedAccount-container-link">YouTube username</p>
                    </div>
                </div>

                <FaEdit className="fa-edit-icon" />

            </div>

            <div style={{ textAlign: 'center' }}><span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Linking account takes up to 48 hours for data syncing process.<br /></span><span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>If you wish to change linked account, bear this in mind.</span></div>
        </div>
    )
}

export default LinkedAccount