import React from "react"
import './BrandValues.css'
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const BrandValues = () => {
    return (
        <div className="BrandValues">
            <div className="BrandValues-title-left">
                <div>
                    <div className="BrandValues-title-left-title" >Brand Values</div>
                    <div className="BrandValues-title-left-text" >Your Branding.</div>
                </div>

                <Link to="/" className="return-button"  >
                    <div  >Back to User Settings</div>
                </Link>

            </div>


            <div className="BrandValues-container">
                <div className="BrandValues-container-up">

                    <div className="BrandValues-container-item-left">
                        <p className="BrandValues-container-title">Your Brand</p>
                        <p className="BrandValues-container-socialName">Name</p>
                        <p className="BrandValues-container-socialName">Colour</p>
<br /><br /><br />
                        <p className="BrandValues-container-socialName">Emotions</p>
                        <p className="BrandValues-container-socialName">Goals</p> 
                    </div>

                    <div className="BrandValues-container-item-right">
                        <p className="BrandValues-container-title">Click to edit</p>
                        <p className="BrandValues-container-link">*Editable* </p>
                        <p className="BrandValues-container-link"># 111111</p>
                        <p className="BrandValues-container-link">#222222</p>
                        <p className="BrandValues-container-link">#333333</p>
                        <p className="BrandValues-container-link">Drop down</p>
                        <p className="BrandValues-container-link">Drop down</p>
                    </div>
                </div>

                <div className="BrandValues-container-down">

                    <div className="BrandValues-container-item-left">
                        <p className="BrandValues-container-title">Your Customer</p>
                        <p className="BrandValues-container-socialName">Age</p>
                        <p className="BrandValues-container-socialName">Gender</p>
                        <p className="BrandValues-container-socialName">Location</p> 
                    </div>

                    <div className="BrandValues-container-item-right">
                        <p className="BrandValues-container-title">Click to edit</p>
                        <p className="BrandValues-container-link">Instagram username</p>
                        <p className="BrandValues-container-link">Meta username</p>
                        <p className="BrandValues-container-link">X username</p> 
                    </div>
                </div>

                <FaEdit className="fa-edit-icon" />

            </div>

            <div style={{ textAlign: "center" }}>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>To achieve best results with </span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>C7.</span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>AI</span>
                <span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 500, wordWrap: 'break-word' }}>, ensure the data above is accurate. </span>
            </div>




        </div>


    )
}

export default BrandValues