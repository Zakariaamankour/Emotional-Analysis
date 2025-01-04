import React from 'react'
import './ElevatePricing.css'
import { FaRegBell } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";

const EvolvePricing = () => {
    return (
  

        <div className="ElevatePricing">
            <div className="ElevatePricing-header">
                <p className="ElevatePricing-header-title">Evolve</p>
                <p className="ElevatePricing-header-text">Scale your influence.</p>

            </div>


            <div className="ElevatePricing-top">
                <div className="ElevatePricing-top-left">
                    <p className='ElevatePricing-top-left-plan-value'>From GBP 79/m</p>

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

                <div className="EvolvePricing-top-right">
                    <p className="EvolvePricing-top-right-title">
                        Evolve
                    </p>
                    <p className="EvolvePricing-top-right-texte">
                        Serious Creators
                    </p>
                </div>
            </div>

            <div className="ElevatePricing-middle-tier-exclusivity">
                <h1 className="ElevatePricing-middle-title">Tier Exclusivity</h1>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Overview</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            For creators scaling their influence. Gain access to multi-post analytics, competitor playbooks, and advanced emotional analysis. Perfect for creators ready to make strategic, data-driven decisions.
                        </p>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Automation</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Evolve users will have access to C7 Automation. This service provides automated scheduled analysis of your choice. Users will receive notification of competitor changes and personal development notes bi-monthly.
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
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">-</p>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Competitor Tools</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Track up to 4 competitors with monthly overviews. Analyse their trends, audience engagement, and growth strategies to stay ahead of the curve.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>-</li>
                            <li>Competitor Comparison</li>
                            <li>Competitor Tracker (4 variants)</li>
                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Pre-Post Analytics</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Enhanced with multi-post analytics and unlimited access. Plan your content across platforms with detailed emotional resonance metrics.
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
                            Enjoy unlimited insights for posts across platforms. Break down emotional impact, audience demographics, and more.
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
                            Access unlimited competitor playbooks, advanced A/B testing, and detailed audience personas for deeper research.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>-</li>
                            <li>A/B Testing</li>
                        </ul>
                    </div>
                </div>


                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Suggestions</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Unlock customised suggestions for emotions, competitor strategies, and audience engagement, designed to keep you ahead.
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
                            <li>Erase data option available </li>
                            <li>Risk prevention software</li>

                        </ul>
                    </div>
                </div>

                <div className="ElevatePricing-middle-section">
                    <h2 className="ElevatePricing-middle-heading">Data Retention</h2>
                    <div className="ElevatePricing-middle content-item">
                        <p className="ElevatePricing-middle-content">
                            Access up to 6 months of historical data to refine your long-term strategy and spot key patterns.
                        </p>
                        <ul className="ElevatePricing-middle-list">
                            <li>6 month user data retention</li>
                            <li>6 month competitor data retention </li>
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
        </div >
 
    )
}

export default EvolvePricing