import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="footer-bar-footer">
                <div className="footer-bar-container">
                    <div className="footer-bar-main-content">
                        {/* <!-- Logo Section --> */}
                        <div className="footer-bar-logo-section">
                            <a href="#" className="footer-bar-logo">Zomato<span className="footer-bar-logo-dot">.</span></a>

                            <div className="footer-bar-social-icons">
                                <a href="https://www.facebook.com/zomato/" className="footer-bar-social-link"><i
                                    className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/zomato/" className="footer-bar-social-link"><i
                                    className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/zomato" className="footer-bar-social-link"><i
                                    className="fab fa-youtube"></i></a>
                                <a href="https://play.google.com/store/apps/details?id=com.application.zomato"
                                    className="footer-bar-social-link"><i className="fab fa-google-play"></i></a>
                                <a href="https://apps.apple.com/app/zomato/id434613896" className="footer-bar-social-link"><i
                                    className="fab fa-app-store-ios"></i></a>
                            </div>
                        </div>

                        {/* <!-- Links Grid --> */}
                        <div className="footer-bar-links-grid">
                            {/* <!-- Col- 1 --> */}
                            <div className="footer-bar-link-column">
                                <h3 className="footer-bar-column-title">Useful Links</h3>
                                <ul className="footer-bar-link-list">
                                    <li><Link to="/" className="footer-bar-link">Home</Link></li>
                                    <li><Link to="/menu" className="footer-bar-link">Menu</Link></li>
                                    <li><Link to="/contact" className="footer-bar-link">Contact</Link></li>
                                </ul>
                            </div>

                            {/* <!-- Col 2 --> */}
                            <div className="footer-bar-link-column">
                                <h3 className="footer-bar-column-title">Opening Hours</h3>
                                <ul className="footer-bar-link-list">
                                    <li><strong>Monday-Friday</strong> : 10.00 - 16.00</li>
                                    <li><strong>Saturday</strong> : 10.00 - 18.00</li>
                                    <li><strong>Sunday</strong> : 10.00 -20.00</li>
                                </ul>
                            </div>

                            {/* <!-- Col 3 --> */}
                            <div className="footer-bar-link-column">
                                <h3 className="footer-bar-column-title">Contact</h3>
                                <ul className="footer-bar-link-list">
                                    <li>North Indian, </li>
                                    <li>Jaipur, Rajasthan</li>
                                    <li>support@Zomato.</li>
                                    <li>+919929990106</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Copyright --> */}
                    <div className="footer-bar-copyright">
                        <p>Zomato. Copyright 2025. All Rights Reserved.</p>
                        <div className="footer-bar-legal-links">
                            <a href="#" className="footer-bar-legal-link">Do not sell or share my personal information</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
