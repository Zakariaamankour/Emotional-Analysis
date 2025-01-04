import React from 'react'
import './ElevatePricing.css'
import { FaRegBell } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";

const BasicPricing = () => {
    return (
        <div className="ElevatePricing">
            <div className="ElevatePricing-header">
                <p className="ElevatePricing-header-title">Basic</p>
                <p className="ElevatePricing-header-text">Start your journey with
                    essential tools.</p>

            </div>


            <div className="ElevatePricing-top">
                <div className="ElevatePricing-top-left">
                    <p className='ElevatePricing-top-left-plan-value'>Upgrade to any plan, at any time.</p>

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

                <div className="BasicPricing-top-right">
                    <p className="BasicPricing-top-right-title">
                        Basic
                    </p>
                    <p className="BasicPricing-top-right-texte">
                        Essential Tools
                    </p>
                </div>
            </div>

            <div className="ElevatePricing-middle-tier-exclusivity">
                <h1 className="ElevatePricing-middle-title">Tier Exclusivity</h1>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Overview</h2>
                    <p className="ElevatePricing-middle-content">
                        Unlock the next level with data-driven tools tailored for growing creators. From competitor tracking to advanced emotional analysis and basic A/B testing, this plan ensures you have what it takes to grow your audience and improve engagement.

                    </p>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Automation</h2>
                    <div className='ElevatePricing-middle content-item'>
                        <p className="ElevatePricing-middle-content">
                            -
                        </p>

                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading"><span className='ElevatePricing-middle-highlight'>Live</span> Exclusivity</h2>
                    <div className='ElevatePricing-middle content-item'>
                        <p className="ElevatePricing-middle-content">
                            -
                        </p>

                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Competitor Tools</h2>
                    <div className='ElevatePricing-middle content-item'>

                        <p className="ElevatePricing-middle-content">
                            Track 1 competitor with limited insights. Uncover what works for your top rival to adapt your strategy.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Competitor Comparison</li>
                            <li>Competitor Tracker (1 variants)  </li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Pre-Post Analytics</h2>
                    <div className='ElevatePricing-middle content-item'>

                        <p className="ElevatePricing-middle-content">
                            Gain unlimited access to our emotional analysis tool, helping you plan smarter and make data-backed decisions.
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
                            Access up to 30 post insights per month, helping you understand the impact of your content with actionable recommendations.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Reflection Post Analysis</li>
                            <li>-</li>
                            <li>Performa</li>
                            <li>Trinity</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Back-End Research</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Explore basic competitor insights and manual A/B testing tools, enabling you to test small changes to improve performance.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>A/B Testing</li>
                            <li>-</li>

                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Suggestions</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Receive limited data-backed suggestions for improving captions, emotions, and engagement strategies.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>C7.AI</li>
                            <li>-</li>
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
                            Retain up to 2 months of data, allowing for more robust comparisons and trend analysis.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>2 month user data retention</li>
                            <li>2 month competitor data retention</li>
                            <li>-</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Focus Modes</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Preset choice is Ascend, our tailored insights for maximum reach.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>Ascend</li>
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

export default BasicPricing