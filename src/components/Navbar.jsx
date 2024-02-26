import React, { useState, useEffect } from 'react';
import "../style/Navbar.css";
import { Link, useLocation } from 'react-router-dom';
import Profile from './Profile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleScroll = () => {
        setIsScrolled(window.pageYOffset > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`header ${isOpen ? "open" : ""} ${isScrolled ? "sticky" : ""}`} id='nav-menu'>
            <Link to="/" className="logo" onClick={closeMenu}>Clothy<span>.</span></Link>
            <nav className={`navbar ${isOpen ? "showMenu" : ""}`}>
                <Link to="/" className={`nav-link home ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
                <Link to="/mens" className={`nav-link about ${isActive('/mens') ? 'active' : ''}`} onClick={closeMenu}>Mens</Link>
                <Link to="/womens" className={`nav-link skills ${isActive('/womens') ? 'active' : ''}`} onClick={closeMenu}>Womens</Link>
                <Link to="/accessories" className={`nav-link projects ${isActive('/accessories') ? 'active' : ''}`} onClick={closeMenu}>Accessories</Link>

                <div className="profile-in">
                    <Link to="/cart" onClick={closeMenu}><i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link to="/wishlist" onClick={closeMenu}><i className="fa-regular fa-heart"></i></Link>
                    <Link onClick={closeMenu}><Profile /></Link>
                </div>
            </nav>
            <div className="profile">
                <Link to="/cart" onClick={closeMenu}><i className="fa-solid fa-cart-shopping"></i></Link>
                <Link to="/wishlist" onClick={closeMenu}><i className="fa-regular fa-heart"></i></Link>
                <Link onClick={closeMenu}><Profile /></Link>
            </div>
            <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu}></i>
        </header>
    );
};

export default Navbar;
