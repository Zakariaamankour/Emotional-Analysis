import React from 'react'
import './PricingComparaison.css'
import { FaLaptop } from "react-icons/fa6";
import { FiTool, FiPhone } from "react-icons/fi";
import { CiLock } from "react-icons/ci";

const PricingComparaison = () => {
    return (
        <div className="PricingComparaison">
            <div className="PricingComparaison-header">
                <p className="PricingComparaison-header-title">Pricing</p>
                <p className="PricingComparaison-header-text">Compare all tiers</p>

            </div>


            <div className="PricingComparaison-items-container">
                <div className="PricingComparaison-container">
                    <div className="PricingComparaison-items">
                        <div className="PricingComparaison-items-header PricingComparaison-items-Elevate-header">
                            <p className="PricingComparaison-items-Elevate-header-title">Elevate</p>
                            <p className='PricingComparaison-items-Elevate-header-text'>Professionals</p>
                        </div>

                        <p className="PricingComparaison-items-number">12</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>18 Months Data retention</p>
                            <p>Competitor data retention</p>
                            <p>Audience habitual data retention</p>
                        </div>

                        <img src="../images/brainblack.png" alt="" className="PricingComparaison-items-brainicon" />


                        <div className="PricingComparaison-items-text-elements">
                            <p>C7.AI Suggestions</p>
                            <p>Actionable Steps</p>
                            <p>Automation Enabling</p>
                        </div>

                        <p className="PricingComparaison-items-number">7</p>


                        <div className="PricingComparaison-items-text-elements">
                            <p>Instagram</p>
                            <p>Meta</p>
                            <p>Tiktok</p>
                            <p>X</p>
                            <p>Snapchat</p>
                            <p>Youtube Shorts</p>
                            <p>Linkedin</p>
                        </div>

                        <FaLaptop className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>Basic Modules</p>
                            <p>Advanced Modules</p>
                            <p>C7 Email Insights</p>
                            <p>Exclusive Trend Notification</p>
                        </div>

                        <FiTool className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>30-day Difference</p>
                            <p>A/B Testing</p>
                            <p>Audience Persona</p>
                            <p>Bio Optimiser</p>
                            <p>Competitor Comparison</p>
                            <p>Competitor Playbook</p>
                            <p>Competitor Tracker</p>
                            <p>E-Learning Hub</p>
                            <p>Emotional Analysis</p>
                            <p>Horizon</p>
                            <p>My Dashboard</p>
                            <p>Performia</p>
                            <p>Reflection</p>
                            <p>Trinity</p>
                        </div>

                        <p className="PricingComparaison-items-live">Live</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>Live Analysis</p>
                            <p>Live Captions</p>
                            <p>Live Emotions</p>
                            <p>Live Insights</p>
                            <p>Live Hashtags</p>
                            <p>Live Updates</p>
                        </div>

                        <CiLock className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>Secure Data Storage</p>
                            <p>Erase data option available </p>
                            <p>Risk prevention software</p>
                        </div>

                        <FiPhone className='PricingComparaison-icon' />

                        <div className="PricingComparaison-items-text-elements">
                            <p>C7 Support engineer</p>
                            <p>C7 Support engineer </p>
                            <p>C7 Support representative</p>
                            <p>Priority Support</p>
                        </div>


                        <div className="PricingComparaison-items-focus-mode">
                            <p className='PricingComparaison-items-focus'>FOCUS</p>
                            <p className='PricingComparaison-items-mode'>MODE</p>
                        </div>

                        <div className="PricingComparaison-items-text-elements">
                            <p>Ascend</p>
                            <p>Community</p>
                            <p>Sentiment</p>
                            <p>Motivator</p>
                        </div>
                    </div>
                    <div className="PricingComparaison-container-pricing">
                        <p className='PricingComparaison-container-pricing-title'>Billed Monthly</p>
                        <p className='PricingComparaison-container-pricing-text'>GBP 279/m</p>
                    </div>
                    <p className="PricingComparaison-container-text-features">Show Elevate features</p>
                    <button className="PricingComparaison-container-button">
                        Buy now
                    </button>


                </div>
                <div className="PricingComparaison-container ">
                    <div className="PricingComparaison-items active-price">
                        <div className="PricingComparaison-items-header">
                            <p className="PricingComparaison-items-Evolve-header-title">Evolve</p>
                            <p className='PricingComparaison-items-Evolve-header-text'>Serious creators</p>
                        </div>

                        <p className="PricingComparaison-items-number">6</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>6 Months Data retention</p>
                            <p>Competitor data retention</p>
                            <p>Audience habitual data retention</p>
                        </div>

                        <img src="../images/brainblack.png" alt="" className="PricingComparaison-items-brainicon" />


                        <div className="PricingComparaison-items-text-elements">
                            <p>C7.AI Suggestions</p>
                            <p>Actionable Steps</p>
                            <p>-</p>
                        </div>

                        <p className="PricingComparaison-items-number">4</p>


                        <div className="PricingComparaison-items-text-elements">
                            <p>Instagram</p>
                            <p>Meta</p>
                            <p>Tiktok</p>
                            <p>X</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <FaLaptop className='PricingComparaison-icon' />



                        <div className="PricingComparaison-items-text-elements">
                            <p>Basic Modules</p>
                            <p>Advanced Modules</p>
                            <p>C7 Email Insights</p>
                            <p>-</p>
                        </div>

                        <FiTool className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>30-day Difference</p>
                            <p>A/B Testing</p>
                            <p>Audience Persona</p>
                            <p>Bio Optimiser</p>
                            <p>Competitor Comparison</p>
                            <p>Competitor Playbook</p>
                            <p>Competitor Tracker</p>
                            <p>E-Learning Hub</p>
                            <p>Emotional Analysis</p>
                            <p>Horizon</p>
                            <p>My Dashboard</p>
                            <p>Performia</p>
                            <p>Reflection</p>
                            <p>Trinity</p>
                        </div>

                        <p className="PricingComparaison-items-live">Live</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <CiLock className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>Secure Data Storage</p>
                            <p>Erase data option available </p>
                            <p>Risk prevention software</p>
                        </div>

                        <FiPhone className='PricingComparaison-icon' />

                        <div className="PricingComparaison-items-text-elements">
                            <p>C7 Support engineer</p>
                            <p>C7 Support engineer </p>
                            <p>-</p>
                            <p>-</p>
                        </div>


                        <div className="PricingComparaison-items-focus-mode">
                            <p className='PricingComparaison-items-focus'>FOCUS</p>
                            <p className='PricingComparaison-items-mode'>MODE</p>
                        </div>

                        <div className="PricingComparaison-items-text-elements">
                            <p>Ascend</p>
                            <p>Community</p>
                            <p>Sentiment</p>
                            <p>Motivator</p>
                        </div>
                    </div>
                    <div className="PricingComparaison-container-pricing">
                        <p className='PricingComparaison-container-pricing-title'>Billed Monthly</p>
                        <p className='PricingComparaison-container-pricing-text'>GBP 79/m</p>
                    </div>
                    <p className="PricingComparaison-container-text-features">Show Evolve features</p>
                    <button className="PricingComparaison-container-button">
                        Buy now
                    </button>


                </div>
                <div className="PricingComparaison-container ">
                    <div className="PricingComparaison-items">
                        <div className="PricingComparaison-items-header">
                            <p className="PricingComparaison-items-Core-header-title">Core</p>
                            <p className='PricingComparaison-items-Core-header-text'>Getting started</p>
                        </div>

                        <p className="PricingComparaison-items-number">2</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>2 Months Data retention</p>
                            <p>Competitor data retention</p>
                            <p>Audience habitual data retention</p>
                        </div>

                        <img src="../images/brainblack.png" alt="" className="PricingComparaison-items-brainicon" />


                        <div className="PricingComparaison-items-text-elements">
                            <p>C7.AI Suggestions</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <p className="PricingComparaison-items-number">1</p>


                        <div className="PricingComparaison-items-text-elements">
                            <p>Instagram</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <FaLaptop className='PricingComparaison-icon' />



                        <div className="PricingComparaison-items-text-elements">
                            <p>Basic Modules</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <FiTool className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>30-day Difference</p>
                            <p>A/B Testing</p>
                            <p>Bio Optimiser</p>
                            <p>Competitor Tracker</p>
                            <p>E-Learning Hub</p>
                            <p>Emotional Analysis</p>
                            <p>Horizon</p>
                            <p>My Dashboard</p>
                            <p>Performia</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <p className="PricingComparaison-items-live">Live</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <CiLock className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>Secure Data Storage</p>
                            <p>Erase data option available </p>
                            <p>Risk prevention software</p>
                        </div>

                        <FiPhone className='PricingComparaison-icon' />

                        <div className="PricingComparaison-items-text-elements">
                            <p>C7 Support representative</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>


                        <div className="PricingComparaison-items-focus-mode">
                            <p className='PricingComparaison-items-focus'>FOCUS</p>
                            <p className='PricingComparaison-items-mode'>MODE</p>
                        </div>

                        <div className="PricingComparaison-items-text-elements">
                            <p>Ascend</p>
                            <p>Community</p>
                            <p>Sentiment</p>
                            <p>Motivator</p>
                        </div>
                    </div>
                    <div className="PricingComparaison-container-pricing">
                        <p className='PricingComparaison-container-pricing-title'>Billed Monthly</p>
                        <p className='PricingComparaison-container-pricing-text'>GBP 29/m</p>
                    </div>
                    <p className="PricingComparaison-container-text-features">Show Core features</p>
                    <button className="PricingComparaison-container-button">
                        Buy now
                    </button>


                </div>
                <div className="PricingComparaison-container ">
                    <div className="PricingComparaison-items">
                        <div className="PricingComparaison-items-header">
                            <p className="PricingComparaison-items-Basic-header-title">Basic</p>
                            <p className='PricingComparaison-items-Basic-header-text'>Essential tools</p>
                        </div>

                        <p className="PricingComparaison-items-number">1</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>1 Months Data retention</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <img src="../images/brainblack.png" alt="" className="PricingComparaison-items-brainicon" />


                        <div className="PricingComparaison-items-text-elements">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <p className="PricingComparaison-items-number">1</p>


                        <div className="PricingComparaison-items-text-elements">
                            <p>Instagram</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <FaLaptop className='PricingComparaison-icon' />



                        <div className="PricingComparaison-items-text-elements">
                            <p>Basic Modules</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <FiTool className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>E-Learning Hub</p>
                            <p>Emotional Analysis</p>
                            <p>My Dashboard</p>
                            <p>Reflection</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <p className="PricingComparaison-items-live">Live</p>

                        <div className="PricingComparaison-items-text-elements">
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>

                        <CiLock className='PricingComparaison-icon' />


                        <div className="PricingComparaison-items-text-elements">
                            <p>Secure Data Storage</p>
                            <p>Erase data option available </p>
                            <p>Risk prevention software</p>
                        </div>

                        <FiPhone className='PricingComparaison-icon' />

                        <div className="PricingComparaison-items-text-elements">
                            <p>C7 Support representative</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>


                        <div className="PricingComparaison-items-focus-mode">
                            <p className='PricingComparaison-items-focus'>FOCUS</p>
                            <p className='PricingComparaison-items-mode'>MODE</p>
                        </div>

                        <div className="PricingComparaison-items-text-elements">
                            <p>Ascend</p>
                            <p>-</p>
                            <p>-</p>
                            <p>-</p>
                        </div>
                    </div>
                    <div className="PricingComparaison-container-pricing">
                        <p className='PricingComparaison-container-pricing-title'>-</p>
                        <p className='PricingComparaison-container-pricing-text-Free'>Free</p>
                    </div>
                    <p className="PricingComparaison-container-text-features">Show Basic features</p>
                    <button className="PricingComparaison-container-button">
                        Buy now
                    </button>


                </div>
            </div>



            <div className="PricingComparaison-footer">
                <div className="PricingComparaison-footer-button-container">
                    <button className="PricingComparaison-footer-button-container-light">
                        Monthly
                    </button>
                    <button className="PricingComparaison-footer-button-container-blue">
                        Annually
                    </button>
                </div>

                <p>Save 25% from annual billing</p>
            </div>
        </div>
    )
}

export default PricingComparaison