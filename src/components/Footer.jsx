import React, { useState, useEffect } from "react";
import './Footer.css';

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Vérifier si l'écran est en version mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Vérification initiale
        window.addEventListener("resize", handleResize); // Ajouter un écouteur sur le redimensionnement

        return () => window.removeEventListener("resize", handleResize); // Nettoyer l'écouteur
    }, []);

    // Fonction pour basculer la section active uniquement sur mobile
    const toggleSection = (section) => {
        if (isMobile) {
            setActiveSection(activeSection === section ? null : section);
        }
    };

    return (
        <div className="footer">
            <div className="first-section">
                <div className="logo-section">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Celeste 7 AI</p>
                </div>

                <div className="search-section">
                    <p>Stay ahead of the game with our exclusive insights</p>
                    <input type="text" />
                    <button>Subscribe me</button>
                </div>
            </div>

            <div className="second-section">
                <div className="part-1">
                    <p onClick={() => toggleSection('part-1')}>GET STARTED</p>
                    <ul className={activeSection === 'part-1' ? "active" : ""}>
                        <li><a href="">My Dashboard</a></li>
                        <li><a href="">Emotional Analysis</a></li>
                        <li><a href="">Competitor Tracker</a></li>
                    </ul>
                </div>

                <div className="part-2">
                    <p onClick={() => toggleSection('part-2')}>TOOLS</p>
                    <ul className={activeSection === 'part-2' ? "active" : ""}>
                        <li><a href="">Emotional Analysis</a></li>
                        <li><a href="">Bio Optimizer</a></li>
                        <li><a href="">A/B Testing</a></li>
                        <li><a href="">Reflect</a></li>
                        <li><a href="">Horizon</a></li>
                        <li><a href="">Competitor Tracker</a></li>
                        <li><a href="">Competitor Playbook</a></li>
                        <li><a href="">Pricing</a></li>
                    </ul>
                </div>

                <div className="part-3">
                    <p onClick={() => toggleSection('part-3')}>RESOURCES</p>
                    <ul className={activeSection === 'part-3' ? "active" : ""}>
                        <li><a href="">E-learning Hub</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">C7.AI</a></li>
                        <li><a href="">Celeste 7 Live</a></li>
                        <li><a href="">Celeste 7 vs. Hootsuite</a></li>
                    </ul>
                </div>

                <div className="part-4">
                    <p onClick={() => toggleSection('part-4')}>COMPANY</p>
                    <ul className={activeSection === 'part-4' ? "active" : ""}>
                        <li><a href="">Our Impact</a></li>
                        <li><a href="">Story</a></li>
                    </ul>
                </div>

                <div className="part-5">
                    <p onClick={() => toggleSection('part-5')}>HELP CENTER AND SUPPORT</p>
                    <ul className={activeSection === 'part-5' ? "active" : ""}>
                        <li><a href="">Submit a Request</a></li>
                        <li><a href="">Account and Billing</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Provide Feedback</a></li>
                        <li><a href="">Improvement Log</a></li>
                    </ul>
                </div>
            </div>

            <div className="last-section">
                <div className="social-media-icons">
                    <a href=""><img src="/images/Facebook Logo Vector.png" alt="" /></a>
                    <a href=""><img src="/images/LinkIn Logo Vector.png" alt="" /></a>
                    <a href=""><img src="/images/IG Logo Vector.png" alt="" /></a>
                    <a href=""><img src="/images/TikTok Logo Vector.png" alt="" /></a>
                    <a href=""><img src="/images/X Logo Vector.png" alt="" /></a>
                </div>
                <p>Celeste 7. All rights reserved. 2025.</p>
                <a href="">Terms & Conditions</a>
                <a href="">Privacy Policy</a>
            </div>
        </div>
    );
}

export default Footer;
