import React, { useState } from "react"
import emailjs from "emailjs-com";

import './Support.css'
const Support = () => {
    const [selectedIssue, setSelectedIssue] = useState("Report an issue");
    const [textareaValue, setTextareaValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
 
        // Count the words in the textarea
        const wordCount = textareaValue.trim().length;
         if (wordCount < 100) {
            setErrorMessage("Your message exceeds the 100-word limit.");
         } else {
            setErrorMessage("");

            // Prepare email data
            const emailData = {
                issue: selectedIssue,
                message: textareaValue,
            };

            // Send the email using EmailJS
            // emailjs
            //     .send(
            //         "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            //         "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            //         emailData,
            //         "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
            //     )
            //     .then(
            //         () => {
            //             alert("Your enquiry has been sent successfully.");
            //             setTextareaValue(""); // Clear the textarea
            //         },
            //         (error) => {
            //             console.error("Email sending failed:", error);
            //             alert("There was an error sending your enquiry. Please try again.");
            //         }
            //     );
        }
    };

    return (
        <div className="Support">
            <div className="Support-header">
                <div className="Support-header-left">
                    <p className="Support-header-left-title">Support</p>
                    <p className="Support-header-left-text">Here to guide you, every step of the way.</p>

                </div>
                <div className="Support-header-right">
                    <button className="Support-header-right-button-light">
                        <div>Go to User Settings</div>
                    </button>
                    <button className="Support-header-right-button-blue">
                        <div>Go to FAQ Page</div>
                    </button>
                </div>
            </div>


            <div className="Support-main">
                <div className="Support-main-top">
                    <div style={{ textAlign: 'center' }}>
                        <span style={{ color: '#777777', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Get the fastest answer to your enquiry with our FAQ page, </span>
                        <span style={{ color: '#777777', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, textDecoration: 'underline', wordWrap: 'break-word' }}>here.<br /></span>
                        <span style={{ color: '#0B66FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>We update our FAQ’s frequently.</span>
                    </div>
                </div>

                <div className="Support-main-middle">
                    <div className="Support-main-middle-left">
                        <p className="Support-main-middle-left-title">We are here to help.</p>
                        <p className="Support-main-middle-left-text">Contact Form</p>
                        <select
                            name="issue"
                            id="issue"
                            onChange={(e) => setSelectedIssue(e.target.value)} // Update selected issue
                        >
                            <option value="" selected disabled>
                                Select Issue
                            </option>
                            <option value="Leave feedback">Leave feedback</option>
                            <option value="Contact a member of the team">Contact a member of the team</option>
                            <option value="Report an issue">Report an issue</option>
                        </select>
                    </div>

                    {/* Right Section */}
                    <div className="Support-main-middle-right">
                        <p className="Support-main-middle-right-title">{selectedIssue}</p>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)} // Update textarea value
                            placeholder="Write your message here..."
                        ></textarea>
                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p> // Display error message
                        )}
                        <button
                            className="Support-main-middle-right-button"
                            type="submit"
                            onClick={handleSubmit} // Handle form submission
                        >
                            Send Enquiry
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support