import React, { useState, useRef, useEffect } from "react";
import './Header.css';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null); // Tracks the active menu
    const timeoutRef = useRef(null); // Stores the timeout ID
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Pour le menu mobile
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Sous-menu actif
    const [isMobile, setIsMobile] = useState(false);

    // Menu items and their submenus
    const menuItems = [
        { title: "Dashboard", submenu: [] },
        {
            title: "Tools", submenu: [
                { cat: "Explore Analysis Tools", items: ["Emotional Analysis", "Bio Optimiser", "Trinity", "A/B Testing", "Audience Persona", "Derivative", "Performia"] },
                { cat: "Explore Competitor Tools", items: ["Tracker", "Playbook", "Comparison", "Selector"] },
                { cat: "Explore Feedback Tools", items: ["Horizon", "Reflection"] }
            ]
        },
        { title: "Our Impact", submenu: [] },
        {
            title: "Pricing", submenu: [
                { cat: "Explore Pricing", items: ["All Tiers", "Elevate", "Evolve", "Core", "Basic", "Comparison"] }
            ]
        },
        { title: "Blogs", submenu: [] },
        { title: "Support", submenu: [] },
        {
            title: "E-Learning", submenu: [
                { cat: "Explore E-Learning", items: ["All Outcomes", "Advanced", "Beginner"] }
            ]
        },
        { title: "Coming Soon", submenu: [] },
        { title: "FAQ", submenu: [] },
    ];


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize(); // Vérification initiale
        window.addEventListener("resize", handleResize); // Ajouter un écouteur sur le redimensionnement

        return () => window.removeEventListener("resize", handleResize); // Nettoyer l'écouteur
    }, []);

    // Show submenu immediately
    const handleMenuEnter = (index) => {
        clearTimeout(timeoutRef.current); // Clear any existing timeout
        setActiveMenu(index); // Show submenu
    };

    // Hide submenu with delay
    const handleMenuLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null); // Hide submenu after delay
        }, 100); // Delay in milliseconds
    };

    // Afficher/masquer le menu mobile
    const toggleMobileMenu = () => {
        if (isMobile) {
            setMobileMenuOpen(!mobileMenuOpen);
        }
    };


    // Toggle pour le menu principal
    const toggleMenu = (index) => {
        setActiveMenu(activeMenu === index ? null : index);
    };

    // Toggle pour le sous-menu
    const toggleSubmenu = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.position = 'fixed';
            document.body.style.top = '0';
        } else {
            document.body.style.position = 'static';
            document.body.style.top = 'initial';
        }

        // Clean up the styles when the component unmounts or menu is closed
        return () => {
            document.body.style.position = 'static';
            document.body.style.top = 'initial';
        };
    }, [mobileMenuOpen]);
    return (
        <div className="header">
            <div className="items">
                <div className="item">
                    <a href="/" onClick={toggleMobileMenu}>
                        <img
                            src="../images/logo.png"
                            className="img-fluid rounded-top logo"
                            alt="Logo"
                        />
                    </a>
                </div>

                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="menu-container-desktop"
                        onMouseEnter={() => handleMenuEnter(index)} // Show submenu
                        onMouseLeave={handleMenuLeave} // Delay hiding submenu
                    >
                        <div className="item">
                            <a href="#">{item.title}</a>
                        </div>

                        {/* Display submenu only if it exists */}
                        {activeMenu === index && item.submenu.length > 0 && (
                            <div className="submenu">
                                <ul>
                                    {item.submenu.map((sub, subIndex) => (
                                        <li key={subIndex}>
                                            <p className="categorie-item">{sub.cat}</p> {/* Category name */}
                                            <ul className="subitems">
                                                {sub.items.map((subItem, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a href="#">{subItem}</a> {/* Submenu items */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}




                <div className="last-section-menu">

                    <div className="item">
                        <img
                            src="../images/profileicon.png"
                            className="img-fluid rounded-top"
                            alt="Icon"
                        />
                    </div>
                    <div className="item">
                        <img
                            src="../images/iconpanie.png"
                            className="img-fluid rounded-top"
                            alt="Icon"
                        />
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}

            <div className={`menu-container-mobile ${mobileMenuOpen ? 'open' : 'close'}`}>
                {menuItems.map((item, index) => (
                    <div key={index} className="mobile-menu-item">
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }} onClick={() => toggleMenu(index)}>
                            <a href="#" className="item-title">{item.title}</a>
                            {item.submenu.length > 0 && (
                                <img src="../images/downicon.png" alt="submenu icon" />
                            )}
                        </div>

                        {activeMenu === index && item.submenu.length > 0 && (
                            <ul className="mobile-submenu">
                                {item.submenu.map((sub, subIndex) => (
                                    <li key={subIndex}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                            <p onClick={() => toggleSubmenu(subIndex)}>{sub.cat}</p>
                                            {sub.items.length > 0 && (
                                                <img src="../images/downicon.png" alt="submenu icon" />
                                            )}
                                        </div>
                                        {activeSubmenu === subIndex && (
                                            <ul>
                                                {sub.items.map((subItem, itemIndex) => (
                                                    <li key={itemIndex}><a href="#">{subItem}</a></li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default Header;
