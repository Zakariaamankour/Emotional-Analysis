import React, { useState, useRef, useEffect } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null); // Tracks the active menu
    const timeoutRef = useRef(null); // Stores the timeout ID
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Pour le menu mobile
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Sous-menu actif
    const [isMobile, setIsMobile] = useState(false);

    // Menu items and their submenus
    const menuItems = [
        { title: "Dashboard", link: "/dashboard", submenu: [] },
        {
            title: "Tools", submenu: [
                {
                    cat: "Explore Analysis Tools",
                    items: [
                        { name: "Emotional Analysis", link: "/emotional-analysis" },
                        { name: "Bio Optimiser", link: "/bio-optimiser" },
                        { name: "Trinity", link: "/trinity" },
                        { name: "A/B Testing", link: "/a-b-testing-start" },
                        { name: "Audience Persona", link: "/audience-persona" },
                        { name: "Derivative", link: "/derivative" },
                        { name: "Performia", link: "/performia" }
                    ]
                },
                {
                    cat: "Explore Competitor Tools",
                    items: [
                        { name: "Tracker", link: "/competitor-tracker-tool-1" },
                        { name: "Playbook", link: "/competitor-playbook-step-1" },
                        { name: "Comparison", link: "/competitor-comparaison-step-1" },
                        { name: "Selector", link: "/selector" }
                    ]
                },
                {
                    cat: "Explore Feedback Tools",
                    items: [
                        { name: "Horizon", link: "/horizon-post-analyser-start" },
                        { name: "Reflection", link: "/reflection" }
                    ]
                }
            ]
        },
        { title: "Our Impact", link: "/testimonials", submenu: [] },
        {
            title: "Pricing", submenu: [
                {
                    cat: "Explore Pricing",
                    items: [
                        { name: "All Tiers", link: "/pricing" },
                        { name: "Elevate", link: "/elevate-pricing" },
                        { name: "Evolve", link: "/evolve-pricing" },
                        { name: "Core", link: "/core-pricing" },
                        { name: "Basic", link: "/basic-pricing" },
                        { name: "Comparison", link: "/pricing" }
                    ]
                }
            ]
        },
        { title: "Blogs", link: "/blogs", submenu: [] },
        { title: "Support", link: "/support", submenu: [] },
        {
            title: "E-Learning", submenu: [
                {
                    cat: "Explore E-Learning",
                    items: [
                        { name: "All Outcomes", link: "/e-learning" },
                        { name: "Advanced", link: "/e-learning" },
                        { name: "Beginner", link: "/e-learning" }
                    ]
                }
            ]
        },
        { title: "Coming Soon", link: "/coming-soon", submenu: [] },
        { title: "FAQ", link: "/faq", submenu: [] },
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

    return (
        <div className="header">
            <div className="items">
                <div className="item">
                    <Link to='/' onClick={toggleMobileMenu}>
                        <img
                            src="../images/logo.png"
                            className="img-fluid rounded-top logo"
                            alt="Logo"
                        />
                    </Link>
                </div>

                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="menu-container-desktop"
                        onMouseEnter={() => handleMenuEnter(index)} // Show submenu
                        onMouseLeave={handleMenuLeave} // Delay hiding submenu
                    >
                        <div className="item">
                            {
                                item.link ? (
                                    <Link to={item.link}>
                                        {item.title}
                                    </Link>
                                ) : (
                                    <a href="#">{item.title}</a>
                                )
                            }
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
                                                        <Link to={subItem.link}>{subItem.name}</Link> {/* Submenu items */}
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
                        <Link to="/user-settings">
                            <img
                                src="../images/profileicon.png"
                                className="img-fluid rounded-top"
                                alt="Icon"
                            /></Link>
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
                <IoIosCloseCircleOutline className="close-icon-mobile" onClick={()=>{setMobileMenuOpen(!mobileMenuOpen)}}/>
                {menuItems.map((item, index) => (
                    <div key={index} className="mobile-menu-item">
                        <div style={{ display: "flex", alignItems: "center", gap: "20px" }} onClick={() => toggleMenu(index)}>

                            {
                                item.link ? (
                                    <Link to={item.link} className="item-title" onClick={()=>{setMobileMenuOpen(!mobileMenuOpen)}}>
                                        {item.title}
                                    </Link>
                                ) : (
                                    <a href="#" className="item-title" >{item.title}</a>
                                )
                            }
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
                                                    <li key={itemIndex}>
                                                        <Link to={subItem.link}>{subItem.name}</Link>
                                                    </li>
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
