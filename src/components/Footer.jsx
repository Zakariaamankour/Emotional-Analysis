import React, { useState, useEffect } from "react";
import './Footer.css';
import { Link } from "react-router-dom";

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
                    <Link to={'/'}>
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
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
                        <li><Link to="/">My Dashboard</Link></li>
                        <li><Link to="/emotional-analysis">Emotional Analysis</Link></li>
                        <li><Link to="">Competitor Tracker</Link></li>
                    </ul>
                </div>

                <div className="part-2">
                    <p onClick={() => toggleSection('part-2')}>TOOLS</p>
                    <ul className={activeSection === 'part-2' ? "active" : ""}>
                        <li><Link to="/emotional-analysis">Emotional Analysis</Link></li>
                        <li><Link to="/bio-optimiser">Bio Optimizer</Link></li>
                        <li><Link to="/a-b-testing-start">A/B Testing</Link></li>
                        <li><Link to="/reflection-start">Reflect</Link></li>
                        <li><Link to="/horizon-post-analyser-start">Horizon</Link></li>
                        <li><Link to="">Competitor Tracker</Link></li>
                        <li><Link to="">Competitor Playbook</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                    </ul>
                </div>

                <div className="part-3">
                    <p onClick={() => toggleSection('part-3')}>RESOURCES</p>
                    <ul className={activeSection === 'part-3' ? "active" : ""}>
                        <li><Link to="/e-learning">E-learning Hub</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                        <li><Link to="/faq">C7.AI</Link></li>
                        <li><Link to="/faq">Celeste 7 Live</Link></li>
                        <li><Link to="/faq">Celeste 7 vs. Hootsuite</Link></li>
                    </ul>
                </div>

                <div className="part-4">
                    <p onClick={() => toggleSection('part-4')}>COMPANY</p>
                    <ul className={activeSection === 'part-4' ? "active" : ""}>
                        <li><Link to="/testimonials">Our Impact</Link></li>
                        <li><Link to="/our-story">Story</Link></li>
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
                    <Link to="https://facebbok.com"><img src="/images/Facebook Logo Vector.png" alt="" /></Link>
                    <Link to="https://linkedin.com"><img src="/images/LinkIn Logo Vector.png" alt="" /></Link>
                    <Link to="https://instagram.com"><img src="/images/IG Logo Vector.png" alt="" /></Link>
                    <Link to="https://tiktok.com"><img src="/images/TikTok Logo Vector.png" alt="" /></Link>
                    <Link to="https://x.com"><img src="/images/X Logo Vector.png" alt="" /></Link>
                </div>
                <p>Celeste 7. All rights reserved. 2025.</p>
                <Link to="terms-conditions">Terms & Conditions</Link>
                <Link to="privacy-policy">Privacy Policy</Link>
            </div>
        </div>
    );
}

export default Footer;
