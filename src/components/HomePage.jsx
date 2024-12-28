import { useState } from 'react';
import './HomePage.css'
import { FaBook } from "react-icons/fa";


const HomePage = () => {

    // Questions and Answers
    const faqs = [
        {
            question: "Does Celeste 7 Have a Software for Instagram?",
            answer: "Yes, Celeste 7 offers advanced software solutions for Instagram analysis and optimization."
        },
        {
            question: "What Is an Emotional Analysis?",
            answer: "Emotional analysis is a process that identifies and interprets emotions expressed in text or speech."
        },
        {
            question: "Do I need to dedicate hours per week?",
            answer: "No, the software is designed to save time by automating analysis and reporting tasks."
        },
        {
            question: "What platforms does your software work with?",
            answer: "Our software supports all major platforms including Instagram, Facebook, and LinkedIn."
        },
        {
            question: "How is my data secure?",
            answer: "We use advanced encryption and security protocols to keep your data safe."
        },
        {
            question: "What if I don’t see results?",
            answer: "We offer dedicated support to help you achieve desired results. Contact our support team for assistance."
        },
    ];

    // State to track which question is open
    const [openIndex, setOpenIndex] = useState(null);
    const [itemselected, setItemselected] = useState('Emotional Unlock');

    // Toggle function for showing answers
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className='home-section'>

            <div class="homepage-1">
                <div class="headline">
                    <span class="headline-part part-1">Uncover the Secrets of</span>
                    <span class="headline-part part-2">&nbsp;Social&nbsp;</span>
                    <span class="headline-part part-3">Success</span>
                </div>

                <div class="subheadline">
                    Your gateway to data-driven growth and creative mastery.
                </div>

                <div class="image-container">

                    <div class="brain-image-container">
                        <div class="brain-image-wrapper">
                            <img src="../images/Brain.png" alt="" />
                        </div>
                    </div>
                    <div class="logo-container">
                        <span class="logo-part1">C7</span><span class="logo-part2">.AI</span>
                    </div>
                </div>

                <div class="button-container">
                    <button class="button white-button">
                        <div class="button-text white-text">Discover the hidden power</div>
                    </button>
                    <button class="button blue-button">
                        <div class="button-text blue-text">Sign up for free</div>
                    </button>
                </div>

                <div class="growth-text">Creating stable, predictable growth at a granular scale.</div>

            </div>

            <div class="full-white-background"></div>


            <div className="homepage-2">

                <div class="emotional-container navbar-links">
                    <div style={{ borderBottom: '1px #777777 solid', padding: "5px" }} onClick={() => { setItemselected("Emotional Unlock") }}>
                        <div class={`emotional-text ${itemselected == "Emotional Unlock" && 'active'}`}>Emotional Unlock </div>
                    </div>
                    <div style={{ borderBottom: '1px #777777 solid', padding: "5px" }} onClick={() => { setItemselected("Competitor Insights") }}>
                        <div class={`emotional-text ${itemselected == "Competitor Insights" && 'active'}`}>Competitor Insights</div>
                    </div>
                    <div style={{ borderBottom: '1px #777777 solid', padding: "5px" }} onClick={() => { setItemselected("Audience Expansion") }}>
                        <div class={`emotional-text ${itemselected == "Audience Expansion" && 'active'}`}>Audience Expansion</div>
                    </div>
                </div>

                <div className="emotional-unlock-contanier" style={{ display: itemselected === "Emotional Unlock" ? "block" : "none" }} >


                    <div className="Emotional-Unlock">
                        <div class="emotional-exam">
                            <span class="highlighted-text">The world’s first</span>
                            <span class="default-text"> emotional examination.</span>
                        </div>


                        <div className="Emotional-Unlock-container">
                            <div className='Emotional-Unlock-container-sub' style={{ width: '516px', background: 'white', borderRadius: 14 }} >
                                <div className="Emotional-Unlock-container-1">
                                    <div className="Emotional-Unlock-container-1-container">
                                        <div class="score-container">
                                            <div class="score-title">Viral Emotion Score</div>

                                            <div className="score-title-container">
                                                <div class="score-value">85</div>

                                                <div class="score-bar-container">
                                                    <div class="score-bar-background"></div>
                                                    <div class="score-bar-fill"></div>
                                                </div>
                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>


                                        <div class="score-container">
                                            <div class="score-title">Hand Gestures</div>

                                            <div className="score-title-container">
                                                <div class="score-value">Positive</div>

                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>


                                        <div class="score-container">
                                            <div class="score-title">Microexpressions</div>

                                            <div className="score-title-container">
                                                <div class="score-value">Pain</div>


                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>


                                        <div class="score-container">
                                            <div class="score-title">Story Telling</div>

                                            <div className="score-title-container">
                                                <div class="score-value">77</div>

                                                <div class="score-bar-container">
                                                    <div class="score-bar-background"></div>
                                                    <div class="score-bar-fill"></div>
                                                </div>
                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>

                                    </div>

                                    <div className="Emotional-Unlock-container-2-container">

                                        <div class="score-container">
                                            <div class="score-title">Viral Emotion Score</div>

                                            <div className="score-title-container">
                                                <div class="score-value">73</div>

                                                <div class="score-bar-container">
                                                    <div class="score-bar-background"></div>
                                                    <div class="score-bar-fill"></div>
                                                </div>
                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>

                                        <div class="score-container">
                                            <div class="score-title">Confidence Score</div>

                                            <div className="score-title-container">
                                                <div class="score-value">56</div>

                                                <div class="score-bar-container">
                                                    <div class="score-bar-background"></div>
                                                    <div class="score-bar-fill"></div>
                                                </div>
                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>

                                        <div class="score-container">
                                            <div class="score-title">Hashtag Effectiveness</div>

                                            <div className="score-title-container">
                                                <div class="score-value">87</div>

                                                <div class="score-bar-container">
                                                    <div class="score-bar-background"></div>
                                                    <div class="score-bar-fill"></div>
                                                </div>
                                            </div>
                                            <img className='questionicon' src="../images/questionicon.png" alt="" />
                                        </div>
                                    </div>

                                </div>


                                <div class="welcome-text-container">
                                    <span class="welcome-text">
                                        Welcome to the world’s first emotional analysis instrument.<br />
                                        Combining an array of elaborate ideas into one solution.<br />
                                    </span>
                                    <span class="complex-text">Complex analytics. </span>
                                    <span class="complex-bold-text">Made Simple.</span>
                                </div>
                            </div>

                            <div className="Emotional-Unlock-container-2">


                                <div className="Emotional-Unlock-container-2-containter-1" style={{ width: '516px', height: '251px', background: 'white', borderRadius: 14 }} >
                                    <div class="growth-text-container">
                                        <span class="growth-text-regular">We combine data, creativity, and simplicity to </span>
                                        <span class="growth-text-highlight">fuel your growth.</span>
                                    </div>



                                    <div class="logo-section-blackbrain">
                                        <img src="../images/Brainblack.png" alt="Brain Logo" class="logo-image" />
                                        <div class="logo-text-container">
                                            <span class="logo-primary">C7</span>
                                            <span class="logo-secondary">.AI</span>
                                        </div>
                                    </div>


                                </div>

                                <div className="Emotional-Unlock-container-2-containter-2" style={{ width: '516px', height: '251px', background: 'white', borderRadius: 14 }}>


                                    <div class="text-container desktop">
                                        <span class="text-bold-dark">Empowering creators with purpose.</span>
                                        <span class="text-regular-dark"> </span>
                                        <span class="text-regular-gray">Every insight, every tool is designed to align with your unique goals. Our Focus Modes divide users into four tailored paths, ensuring your journey is driven by what matters most to </span>
                                        <span class="text-bold-dark">you.</span>
                                    </div>

                                    <div class="text-container mobile">
                                        <span class="text-bold-dark">Empowering creators with purpose.</span><br />
                                        <span class="text-regular-gray">Empowering creators with purpose with four tailored paths.</span>

                                    </div>

                                    <div class="ascend-container">
                                        <div class="ascend-item ascend">Ascend</div>
                                        <div class="ascend-item community">Community</div>
                                        <div class="ascend-item sentiment">Sentiment</div>
                                        <div class="ascend-item motivator">Motivator</div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="competitor-insights-container" style={{ display: itemselected === "Competitor Insights" ? "block" : "none" }} >

                    <div style={{ textAlign: "center" }}>
                        <span className="track-improve-repeat">Track, Improve, </span>
                        <span className="track-improve-repeat-blue">Repeat</span>
                        <span className="track-improve-repeat">.</span>
                    </div>

                    <div className="competitor-flex">
                        <div className="competitor-container">
                            <div className="competitor-header">
                                <span className="competitor-header-title">
                                    Track the pulse of competitor engagement.
                                </span><br />
                                <span className="competitor-header-subtitle">
                                    See when their audience reacts—down to the hour—and learn the best times to strike with your own content.
                                </span>
                            </div>

                            <div className="gradient-box"></div>

                            <div className="competitor-content">
                                <span className="competitor-content-title">
                                    Uncover your competitors habits.<br />
                                </span>
                                <span className="competitor-content-text">
                                    Dive into competitor playbook to uncover hour by hour, your competitors behaviour. Learn about their strategy of both content characteristics, and how they post.
                                </span>
                            </div>
                        </div>

                        <div className="tracker-competitor--playbook-container">

                            <div className="sub-container sub-tracker-container">
                                <img src="../images/search.svg" alt="" />
                                <div className="sub-container-title">Competitor Tracker</div>
                                <div className="sub-container-subtitle">Precision tabs on rivals.</div>
                            </div>

                            <div className="sub-container sub-competitor-container">
                                <div className="sub-container-title">Competitor Tracker</div>
                                <div className="sub-container-subtitle">Precision tabs on rivals.</div>
                                <img src="../images/Group 56.png" alt="" />
                            </div>

                            <div className="sub-container sub-playbook-container">
                                <img src="../images/Book open.png" alt="" />
                                <div className="sub-container-title">Competitor Tracker</div>
                                <div className="sub-container-subtitle">Precision tabs on rivals.</div>
                            </div>

                        </div>

                    </div>


                </div>

                <div className="audience-expansion-container" style={{ display: itemselected === "Audience Expansion" ? "block" : "none" }} >

                    <div class="text-center">
                        <span class="text-black">Focus on what works for </span>
                        <span class="text-blue-italic">your</span>
                        <span class="text-black"> audience.</span>
                    </div>

                    <div className="audience-expansion-container-flex">



                        <div class="audience-expansion-container-left">
                            <div class="audience-expansion-container-left-top gradient-bg">
                                <div class="text-center">
                                    <span class="text-white-small">Your data is protected with enterprise-grade privacy and encryption.</span>
                                    <span class="text-gray-small"> Enjoy unlimited storage, proactive backups, and 24/7 monitoring for complete peace of mind.</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <img src="../images/C7Icon.svg" alt="" />
                                    <div class="c7-title">C7</div>
                                </div>

                            </div>

                            <div class="audience-expansion-container-bottom white-bg">
                                <div class="text-center">
                                    <span class="text-blue-large">Live </span>
                                    <span class="text-black-large">Insights</span>
                                </div>

                                <div class="text-center">
                                    <span class="text-gray-small">Celeste7 will directly illustrate </span>
                                    <span class="text-blue-small-italic">who, what, when, where </span>
                                    <span class="text-gray-small">and</span>
                                    <span class="text-blue-small-italic"> how </span>
                                    <span class="text-gray-small">audience members are engaging with </span>
                                    <span class="text-blue-small-italic">your</span>
                                    <span class="text-gray-small"> content. </span>
                                    <span class="text-dark-small">Find out if your likes </span>
                                    <span class="text-dark-small-italic">directly</span>
                                    <span class="text-dark-small"> from your target audience</span>
                                </div>
                            </div>
                        </div>


                        <div class="audience-expansion-container-right white-bg">
                            <div>
                                <span class="text-purple-large">Audience</span>
                                <span class="text-black-large"> </span>
                                <span class="text-black-large-light">Persona</span>
                            </div>

                            <div class="text-center text-black-medium">
                                The hearts and minds behind your audience.
                            </div>

                            <div class="relative-container">
                                <img class="analysis-img-left" src="../images/user2.svg" />
                                <img class="analysis-img-right" src="../images/user1.svg" />
                            </div>

                            <div class="text-center">
                                <span class="text-dark-small-bold">Discover the essence of your audience. </span>
                                <span class="text-gray-small-light">
                                    Our Audience Persona tool deciphers patterns, preferences, and behaviours, helping you create tailored content that truly resonates.
                                </span>
                            </div>
                        </div>

                    </div>

                </div>


            </div>



            <div class="full-white-background"></div>


            <div className="homepage-3">


                <div class="text-container">
                    <span class="main-text">Designed for creators like you.<br /></span>
                    <span class="sub-text">From novices to</span>
                    <span class="highlight-text"></span>
                    <span class="highlight-text-bold">pros.</span>
                </div>


                <div className='emetional-analysis'>
                    <div className='emetional-analysis-left'>

                        <div className='emetional-analysis-item' style={{ background: "linear-gradient(180deg, #AEDCEE 0%, #F1F5F6 100%)" }}>
                            <div style={{ textAlign: "center" }}>
                                <span class="emotional-text emotional-text-gradient">Emotional &nbsp;</span>
                                <span class="black-text"></span>
                                <span class="analysis-text">Analysis</span>
                            </div>
                            <div class="description-text">Harness the power of emotional intelligence.</div>


                            <img class="analysis-img" src="../images/analysis.png" style={{ padding: "12px 0" }} />


                            <div class="button-container">
                                <button class="button blue-button">
                                    <div class="button-text blue-text">Discover More</div>
                                </button>
                                <button class="button white-button">
                                    <div class="button-text  white-text">Sign Up</div>
                                </button>
                            </div>
                        </div>
                        <div className='emetional-analysis-item' style={{ background: "white" }}>
                            <div className='emetional-text'>
                                <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 500, wordWrap: 'break-word' }}>Competitor </span>

                                <span className='tracker' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Tracker</span>
                            </div>
                            <div class="description-text">Compare, evaluate, refine..</div>


                            <img class="analysis-img" src="../images/search.svg" style={{ width: "141px", height: "180.65px", padding: "16px 0px" }} />


                            <div class="button-container">
                                <button class="button blue-button">
                                    <div class="button-text blue-text ">Discover More</div>
                                </button>
                                <button class="button white-button">
                                    <div class="button-text  white-text">Sign Up</div>
                                </button>
                            </div>
                        </div>
                        <div className='emetional-analysis-item' style={{ background: "#FAFAFA" }}>
                            <div className='emetional-text'>
                                <span className='audience' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Audience &nbsp;</span>
                                <span style={{ color: 'black', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 500, wordWrap: 'break-word' }}>Persona</span>
                            </div>
                            <div class="description-text">The hearts and minds behind your audience..</div>

                            <div style={{ position: "relative" }}>
                                <img class="analysis-img" src="../images/user2.svg" style={{ position: "absolute", left: "-32px" }} />
                                <img class="analysis-img" src="../images/user1.svg" style={{ marginLeft: "50px" }} />
                            </div>

                            <div class="button-container">
                                <button class="button blue-button">
                                    <div class="button-text blue-text ">Discover More</div>
                                </button>
                                <button class="button white-button">
                                    <div class="button-text  white-text">Sign Up</div>
                                </button>
                            </div>
                        </div>

                    </div>


                    <div className='emetional-analysis-right'>

                        <div className='emetional-analysis-item ' style={{ background: "black" }}>




                            <img class="analysis-img" src="../images/balance.png" style={{ width: "84px", height: "180px", padding: "5px 0" }} />

                            <div>


                                <span style={{ color: '#FAFAFA', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 500, wordWrap: 'break-word' }}>A/B</span>
                                <span style={{ color: '#FAFAFA', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}> </span>
                                <span className='testing' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Testing</span>
                            </div>
                            <div style={{ color: '#F4F4F4', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 300, wordWrap: 'break-word' }}>Revolutionise how you grow.</div>
                            <div class="button-container">

                                <button class="button blue-button" style={{ width: "50%" }}>
                                    <div class="button-text blue-text">Start Your First Test</div>
                                </button>

                            </div>
                        </div>
                        <div className='emetional-analysis-item' style={{ background: "#FAFAFA" }}>
                            <div class="description-text">Your step-by-step guide.</div>

                            <div className='playbook' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Playbook</div>
                            <div style={{ textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Eloquia Display', fontWeight: 500, letterSpacing: '3.68px', wordWrap: 'break-word' }}>competitor</div>

                            <img class="analysis-img" src="../images/book.png" />


                            <div class="button-container">
                                <button class="button blue-button">
                                    <div class="button-text blue-text">Discover More</div>
                                </button>
                                <button class="button white-button">
                                    <div class="button-text  white-text">Sign Up</div>
                                </button>
                            </div>
                        </div>

                        <div className='emetional-analysis-item' style={{ background: "white" }}>


                            <img class="analysis-img" src="../images/calander.png" />

                            <div className='derivative' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Derivative</div>

                            <div class="description-text" style={{ width: "340px" }}>Compare, evaluate, refine.</div>

                            <div class="button-container">
                                <button class="button blue-button">
                                    <div class="button-text blue-text">Discover More</div>
                                </button>
                                <button class="button white-button">
                                    <div class="button-text  white-text">Sign Up</div>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <div class="full-white-background"></div>


            <div className="homepage-4">

                <div className="homepage-4-sub">

                    <div className='proven-growthpProven-creators' style={{ color: '#777777', fontSize: 42, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Proven Growth, Proven Creators.</div>
                    <div className='real-results' style={{ color: '#0070FF', fontSize: 42, fontFamily: 'Bumbbled', fontWeight: 400, wordWrap: 'break-word' }}>Real results.</div>

                    <div className="slider-items"  >
                        <div style={{ width: '313px', height: '556px', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14 }} />
                        <div style={{ width: '313px', height: '556px', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14 }} />
                        <div style={{ width: '313px', height: '556px', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14 }} />
                        <div style={{ width: '313px', height: '556px', background: '#D9D9D9', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 14 }} />

                    </div>






                </div>
            </div>


            <div className="homepage-5">
                <div className="slider-items"  >
                    <div style={{ width: '313px', textAlign: "center" }}>
                        <div style={{ textAlign: 'center', color: '#86868B', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Engagement rate</div>
                        <div style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>+30%</div>
                    </div>
                    <div style={{ width: '313px', textAlign: "center" }}>
                        <div style={{ textAlign: 'center', color: '#86868B', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Likes per Reach</div>
                        <div style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>+14%</div>

                    </div>
                    <div style={{ width: '313px', textAlign: "center" }}>
                        <div style={{ textAlign: 'center', color: '#86868B', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Audience Reached</div>
                        <div style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>NEW</div>

                    </div>
                    <div style={{ width: '313px', textAlign: "center" }}>
                        <div style={{ textAlign: 'center', color: '#86868B', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Non-Follower Reach</div>
                        <div style={{ color: '#0070FF', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>+23%</div>

                    </div>

                </div>
                <div className='button-container-4'>
                    <div style={{ width: '20%', height: '100%', padding: 10, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '1px #0070FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>See&nbsp;Your&nbsp;Personal&nbsp;Growth&nbsp;Metrics</div>
                    </div>
                    <div style={{ width: '20%', height: '100%', padding: 10, background: '#0070FF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '1px #0070FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Unlock Insights Tailored to You.</div>
                    </div>
                </div>
                <div style={{ padding: "20px ", color: '#0070FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word', textAlign: "right", marginTop: "20px" }}>Experience real-time data that drives engagement and success.</div>
            </div>


            <div class="full-white-background"></div>

            <div className="homepage-6">
                <div className="homepage-6-sub">


                    <div style={{ color: '#242424', fontSize: 42, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Try it now</div>
                    <div style={{ color: '#777777', fontSize: 20, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>For free.</div>


                    <div className="middle">
                        <div style={{ textAlign: 'center' }}>
                            <span className='emotional-text-gradient' style={{ fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Emotional</span><span style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}> </span><span style={{ color: '#242424', fontSize: 32, fontFamily: 'Eloquia Display', fontWeight: 500, wordWrap: 'break-word' }}>Analysis</span></div>
                        <div className='middle-buttons' style={{ display: "flex", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                            <div className='buttons' style={{ width: '10%', height: '100%', padding: 10, background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '1px #0070FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Upload via File</div>
                            </div>
                            <div className='buttons' style={{ width: '10%', height: '100%', padding: 10, background: '#0070FF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '1px #0070FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                                <div style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Upload via Link</div>
                            </div>
                        </div>
                        <div style={{ textAlign: "center", color: '#0070FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>No sign-up required.</div>

                    </div>
                </div>
            </div>




            <div class="full-white-background"></div>


            <div className="homepage-7">


                <div style={{ width: '100%', textAlign: 'center', padding: "20px 0" }}><span style={{ color: '#242424', fontSize: 42, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Take a closer look at our </span><span className='models' style={{ fontSize: 42, fontFamily: 'Bumbbled', fontWeight: 400, wordWrap: 'break-word' }}>models</span></div>


                <div className='emetional-analysis'>
                    <div className='emetional-analysis-left'>

                        <div className='emetional-analysis-item' style={{ background: "black" }}>
                            <div className='elevate' style={{ fontSize: 100, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Elevate</div>
                            <div style={{ color: 'white', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>Professionals</div>

                            <div className='emetional-analysis-buttons' >
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>See all benefits</div>
                                </a>
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Sign Up &gt;</div>
                                </a>
                            </div>

                        </div>
                        <div className='emetional-analysis-item' style={{ background: "#FDFDFD" }}>
                            <div className='core' style={{ fontSize: 100, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Core</div>
                            <div style={{ color: 'black', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>Getting Started</div>

                            <div className='emetional-analysis-buttons' >
                                <a href='#'>
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>See all benefits</div>
                                </a>
                                <a href='#'>
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Sign Up &gt;</div>
                                </a>
                            </div>

                        </div>


                    </div>


                    <div className='emetional-analysis-right'>

                        <div className='emetional-analysis-item' style={{ background: "#FAF9F9" }}>
                            <div className='evolve' style={{ fontSize: 100, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Evolve</div>
                            <div style={{ color: 'black', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>Serious Creators</div>

                            <div className='emetional-analysis-buttons' >
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>See all benefits</div>
                                </a>
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Sign Up &gt;</div>
                                </a>
                            </div>

                        </div>

                        <div className='emetional-analysis-item' style={{ background: "#FAF9F9" }}>
                            <div className='basic' style={{ fontSize: 100, fontFamily: 'Eloquia Display', fontWeight: 600, wordWrap: 'break-word' }}>Basic</div>
                            <div style={{ color: '#242424', fontSize: 24, fontFamily: 'Eloquia Display', fontWeight: 400, wordWrap: 'break-word' }}>Essential Tools</div>

                            <div className='emetional-analysis-buttons' >
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>See all benefits</div>
                                </a>
                                <a href='#' >
                                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Sign Up &gt;</div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='homepage-7-button'>
                    <div className='buttons' style={{ width: '20%', height: '100%', padding: 10, background: '#0070FF', borderRadius: 20, border: '1px #0070FF solid', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 12, fontFamily: 'Poppins', fontWeight: 400, wordWrap: 'break-word' }}>Compare models</div>
                    </div>
                    <div style={{ color: '#0070FF', fontSize: 12, fontFamily: 'Lato', fontWeight: 400, wordWrap: 'break-word' }}>Save 25% from annual billing</div>
                </div>


            </div>

            <div className="faq-container">
                <div className="faq-title">FAQ</div>
                <div className="faq-questions">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <p
                                className="faq-question"
                                onClick={() => toggleAnswer(index)}
                            >
                                {faq.question}
                            </p>
                            {openIndex === index && (
                                <p className="faq-answer">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default HomePage