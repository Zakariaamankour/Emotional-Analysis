import React from 'react'
import './ElevatePricing.css'
import { FaRegBell } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";

const ElevatePricing = () => {
    return (
        <div className="ElevatePricing">
            <div className="ElevatePricing-header">
                <p className="ElevatePricing-header-title">Elevate</p>
                <p className="ElevatePricing-header-text">Ultimate growth potential</p>

            </div>


            <div className="ElevatePricing-top">
                <div className="ElevatePricing-top-left">
                    <p className='ElevatePricing-top-left-plan-value'>From GBP 279/m</p>

                    <div className="ElevatePricing-top-left-plan">
                        <div className="ElevatePricing-top-left-plan-active">M</div>
                        <div className="ElevatePricing-top-left-plan-item">Y</div>
                    </div>

                    <div className="ElevatePricing-top-left-line"></div>

                    <div className="ElevatePricing-top-left-notes">
                        <FaRegBell className='notes-icon' /> <p>Sign up now. Use features instantly.</p>
                    </div>
                    <div className="ElevatePricing-top-left-notes">
                        <FiPhone className='notes-icon' /> <p>Priority support from C7 Engineer.</p>
                    </div>
                    <div className="ElevatePricing-top-left-notes">
                        <MdOutlinePerson className='notes-icon' /> <p>Dedicated data analyst</p>
                    </div>

                    <button className='ElevatePricing-top-left-checkout-light-button'>Checkout with ApplePay</button>
                    <button className='ElevatePricing-top-left-checkout-blue-button'>Checkout with Credit/Debit Card</button>

                    <div className="ElevatePricing-top-left-links">
                        <div className="help-title">Need some help?</div>
                        <div className="help-content">
                            <span>Reach out to a member of our team to answer your enquiries </span>
                            <span className="help-link">here</span>.<br />
                            <span>We regularly update our FAQ for common questions.<br /> Visit our FAQ.</span><br /><br />
                            <span style={{ color: '#00A4FF', fontSize: 16, fontFamily: 'EloquiaDisplay', fontWeight: 600, wordWrap: 'break-word' }}>? FAQ</span>
                        </div>
                    </div>


                </div>

                <div className="ElevatePricing-top-right">
                    <p className="ElevatePricing-top-right-title">
                        Elevate
                    </p>
                    <p className="ElevatePricing-top-right-texte">
                        Professionals
                    </p>
                </div>
            </div>

            <div className="ElevatePricing-middle-tier-exclusivity">
                <h1 className="ElevatePricing-middle-title">Tier Exclusivity</h1>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Overview</h2>
                    <p className="ElevatePricing-middle-content">
                        The ultimate toolkit for professionals and content leaders. With automated emotional insights, real-time competitor alerts, and personalised data analysis, you’re equipped to dominate your niche and drive exponential growth.
                    </p>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Automation</h2>
                    <div className='ElevatePricing-middle content-item'>
                        <p className="ElevatePricing-middle-content">
                            Elevate users will have access to C7 Automation. This service provides automated scheduled analysis of your choice. Users can receive notification of competitor changes and personal development notes as frequently as they wish. Custom automation and notification available on:
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Competitor Playbook</li>
                            <li>Competitor Comparison</li>
                            <li>Competitor Tracker</li>
                            <li>Audience Persona</li>
                            <li>A/B Testing</li>
                            <li>Bio Optimiser</li>
                            <li>Performa</li>
                            <li>Trinity</li>
                            <li>Emotional Analysis</li>
                            <li>Reflection Post Analysis</li>
                            <li>Horizon Post Analysis</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading"><span className='ElevatePricing-middle-highlight'>Live</span> Exclusivity</h2>
                    <div className='ElevatePricing-middle content-item'>
                        <p className="ElevatePricing-middle-content">
                            Gain exclusive access to hour-by-hour data. Automate notifications and data retrieval for your posts, competitors posts, audience habits, patterns and upcoming emotional trends.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Live Analysis</li>
                            <li>Live Captions</li>
                            <li>Live Emotions</li>
                            <li>Live Insights</li>
                            <li>Live Hashtags</li>
                            <li>Live Updates</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Competitor Tools</h2>
                    <div className='ElevatePricing-middle content-item'>

                        <p className="ElevatePricing-middle-content">
                            Stay one step ahead with real-time tracking of up to 12 competitors. Automated alerts and proactive insights provide actionable data to refine your approach and outperform the competition.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Competitor Playbook</li>
                            <li>Competitor Comparison</li>
                            <li>Competitor Tracker (12 variants)</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Pre-Post Analytics</h2>
                    <div className='ElevatePricing-middle content-item'>

                        <p className="ElevatePricing-middle-content">
                            Automation takes your strategy further. Our tools proactively suggest optimal emotions, post times, and structures to maximise engagement.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Emotional Analysis</li>
                            <li>Bio Optimiser</li>
                        </ul>
                    </div>
                </div>
                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">After-Post Analytics</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Automated insights ensure no detail is missed. Real-time emotional triggers and engagement metrics provide a deeper understanding of your audience’s reactions.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Reflection Post Analysis</li>
                            <li>Horizon Post Analysis</li>
                            <li>Performa</li>
                            <li>Trinity</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Back-End Research</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Enjoy complete automation with proactive insights, real-time updates, and access to a dedicated data analyst for custom monthly reports.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Audience Persona</li>
                            <li>A/B Testing</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Suggestions</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Experience proactive notifications and dynamic data suggestions powered by AI, helping you adapt instantly to audience trends and competitor actions.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>C7.AI</li>
                            <li>Automated notification</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Privacy and Storage</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Your data is protected with enterprise-grade privacy and encryption. Enjoy unlimited storage, proactive backups, and 24/7 monitoring for complete peace of mind.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Secure Data Storage</li>
                            <li>Erase data option available</li>
                            <li>Risk prevention software</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Retention</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            12-month data retention ensures you never lose track of historical trends, providing a complete overview of your performance over time.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>12-month user data retention</li>
                            <li>12-month competitor data retention</li>
                            <li>Access to cumulative network data</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Focus Modes</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Choose one of 4 focus modes depending on your personal growth goals.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Ascend</li>
                            <li>Community</li>
                            <li>Sentimental</li>
                            <li>Motivator</li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className="ElevatePricing-footer">
                <button className="ElevatePricing-footer-light">Add to Basket</button>
                <button className="ElevatePricing-footer-blue">Compare with all tiers</button>

            </div>
        </div>
    )
}

export default ElevatePricing