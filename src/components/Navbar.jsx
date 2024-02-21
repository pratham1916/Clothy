import React, { useState, useEffect } from 'react';
import "../style/Navbar.css";
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        const sectionElements = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px" });

        sectionElements.forEach(el => {
            observer.observe(el);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sectionElements.forEach(el => {
                observer.unobserve(el);
            });
        };
    }, []);

    const scrollToSection = (e) => {
        e.preventDefault();
        setIsOpen(false)
        const targetSection = e.target.getAttribute('href').substring(1);
        const section = document.getElementById(targetSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={`header ${isOpen ? "open" : ""} ${isScrolled ? "sticky" : ""}`} id='nav-menu'>
            <Link to="/" className="logo">Clothy<span>.</span></Link>
            <nav className={`navbar ${isOpen ? "showMenu" : ""}`}>
                <Link to="/" className="nav-link home" >Home</Link>
                <Link to="/mens" className="nav-link about" >Mens</Link>
                <Link to="/womens" className="nav-link skills" >Womens</Link>
                <Link to="/accessories" className="nav-link projects" >Accessories</Link>

                <div className="social-media-in">
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                    <Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link>
                    <Link><Profile /></Link>
                </div>
            </nav>
            <div className="social-media">
                <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
                <Link to="/wishlist"><i class="fa-regular fa-heart"></i></Link>
                <Link><Profile /></Link>
            </div>
            <i class="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu} ></i>
        </header>
    );
};

export default Navbar;
