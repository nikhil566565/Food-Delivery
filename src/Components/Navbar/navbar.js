import React, { useState } from 'react'
import { createBrowserRouter, NavLink, Link } from 'react-router-dom'
import "./navbar.css"
import Login from '../Login/login'
// import Signup from'../Login/signup'

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("overlay")) {
            setShowLogin(false);
        }
    };
    return (
        <>
            {/* Header */}
            <header className="header">
                <nav className="navbar">
                    <Link to="/" className="navbar-logo">Zomato.</Link>

                    <ul className={isNavbarOpen ? "nav-links show" : "nav-links"}>
                        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink></li>
                        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/menu">Menu</NavLink></li>
                        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/aboutUs">About Us</NavLink></li>
                        <li><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="nav-buttons">
                        <button className="search-button" onClick={() => setShowLogin(true)}> Login</button>
                        <span className="navbar-cart">
                            <i className="fas fa-shopping-cart text-blue-500 w-5 h-5"></i>
                        </span>
                        <button className="navbar-menu-btn" onClick={toggleNavbar}>&#9776;</button>
                    </div>
                </nav>
            </header >

            {showLogin && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <Login />
                </div>
            )}
        </>
    )
}

export default Navbar
