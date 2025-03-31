import React, { useState, useEffect } from 'react'
import { createBrowserRouter, NavLink, Link, useNavigate } from 'react-router-dom'
import "./navbar.css"
import Login from '../Login/login'
import avtar from '../assets/avtar.png'
// import Shopingcart from '../../Pages/ShopingCart/shopingcart'

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()
    // This code is navbar Logout dropdown....
    useEffect(() => {
        // user is logged in (from localStorage)
        const user = localStorage.getItem("userLoggedIn");
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem("userLoggedIn");
        setIsLoggedIn(false);
        navigate('/login')
    };

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
                        <Link to="/shoppingCart" className="navbar-cart">
                            <i className="fas fa-shopping-cart text-blue-500 w-5 h-5"></i>
                        </Link>
                        {!isLoggedIn ?
                            (<Link to="/login">
                                <button className="search-button"> Login</button>
                            </Link>) : (<a href="#" class="navbar-custom-btn">
                                <img src={avtar} alt='avtar-img' />
                                <div className="navbar-dropdown-menu">
                                    <a href="#" className="navbar-dropdown-item" onClick={handleLogout}>Logout</a>
                                </div>
                            </a>)
                        }
                        <button className="navbar-menu-btn" onClick={toggleNavbar}> &#9776; </button>
                    </div>
                </nav>
            </header>

            {showLogin && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <Login />
                </div>
            )}
        </>
    )
}

export default Navbar
