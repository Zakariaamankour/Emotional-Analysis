import React from "react"
import './BillingsPayments.css'
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const BillingsPayments = () => {
    return (
        <div className="BillingsPayments">
            <div className="BillingsPayments-title-left">
                <div>
                    <div className="BillingsPayments-title-left-title" >Billing & Payments</div>
                    <div className="BillingsPayments-title-left-text" >Your finance details.</div>
                </div>

                <Link to="/" className="return-button"  >
                    <div  >Back to User Settings</div>
                </Link>

            </div>


            <div className="BillingsPayments-container">
                <div className="BillingsPayments-container-up">

                    <div className="BillingsPayments-container-item-left">
                        <p className="BillingsPayments-container-title">Billing Details</p>
                        <p className="BillingsPayments-container-socialName">Name</p>
                        <p className="BillingsPayments-container-socialName">Business Name</p>
                        <p className="BillingsPayments-container-socialName">E-Mail Address</p>
                        <p className="BillingsPayments-container-socialName">Physical Address</p>
                    </div>

                    <div className="BillingsPayments-container-item-right">
                        <p className="BillingsPayments-container-title">Click to edit</p>
                        <p className="BillingsPayments-container-link">John Smith</p>
                        <p className="BillingsPayments-container-link">Business Name or “-”</p>
                        <p className="BillingsPayments-container-link">example@email.com</p>
                        <p className="BillingsPayments-container-link">Street Name</p>
                        <p className="BillingsPayments-container-link">City, Postcode/zipcode</p>
                        <p className="BillingsPayments-container-link">Country</p>
                    </div>
                </div>

                <div className="BillingsPayments-container-down">

                    <div className="BillingsPayments-container-item-left">
                        <p className="BillingsPayments-container-title">Card Details</p>
                        <p className="BillingsPayments-container-socialName">Card Number</p>
                        <p className="BillingsPayments-container-socialName">Expiration</p>
                        <p className="BillingsPayments-container-socialName">CVC</p>
                        <p className="BillingsPayments-container-socialName">Country</p>
                        <p className="BillingsPayments-container-socialName">Amount</p>
                        <p className="BillingsPayments-container-socialName">Debit Date</p>
                        <p className="BillingsPayments-container-socialName">Next Debit Date</p>

                    </div>

                    <div className="BillingsPayments-container-item-right">
                        <p className="BillingsPayments-container-title">Click to edit</p>
                        <p className="BillingsPayments-container-link">John Smith</p>
                        <p className="BillingsPayments-container-link">John Smith</p>
                        <p className="BillingsPayments-container-link">Business Name or “-”</p>
                        <p className="BillingsPayments-container-link">example@email.com</p>
                        <p className="BillingsPayments-container-link">79 GBP</p>
                        <p className="BillingsPayments-container-link">01/02/2022</p>
                        <p className="BillingsPayments-container-link">01/03/2022</p>

                    </div>
                </div>




                <div className="BillingsPayments-container-down">

                    <div className="BillingsPayments-container-item-left">
                        <p className="BillingsPayments-container-title">Plan Details</p>
                        <p className="BillingsPayments-container-socialName">User Clearance</p>
                        <p className="BillingsPayments-container-socialName">Billing History</p>
                        <p className="BillingsPayments-container-socialName">Billing Amount</p>
                        <p className="BillingsPayments-container-socialName">Debit Date</p>
                        <p className="BillingsPayments-container-socialName">Next Debit Date</p>
                        <p className="BillingsPayments-container-socialName">Change Plan</p>
                        <p className="BillingsPayments-container-socialName">Cancel Plan</p>

                    </div>

                    <div className="BillingsPayments-container-item-right">
                        <p className="BillingsPayments-container-title">Click to edit</p>
                        <p className="BillingsPayments-container-link">Tier 3</p>
                        <p className="BillingsPayments-container-link">Click here to select month</p>
                        <p className="BillingsPayments-container-link">79 GBP</p>
                        <p className="BillingsPayments-container-link">01/02/2022</p>
                        <p className="BillingsPayments-container-link">01/03/2022</p>
                        <p className="BillingsPayments-container-link">Click here to Upgrade/Downgrade</p>
                        <p className="BillingsPayments-container-link">Click here to Cancel</p>

                    </div>
                </div>
                <FaEdit className="fa-edit-icon" />

            </div>

            <div style={{ textAlign: 'center' }}><span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 700, wordWrap: 'break-word' }}>Linking account takes up to 48 hours for data syncing process.<br /></span><span style={{ color: '#0B66FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>If you wish to change linked account, bear this in mind.</span></div>




        </div>


    )
}

export default BillingsPayments