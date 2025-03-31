import React from 'react'
import './heroSection.css'
const HeroSection = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-container">
                        <div className="hero-content">
                            {/*  Left Content  */}
                            <div className="hero-text">
                                <p className="hero-tagline">
                                    Order Restaurant food, takeaway and groceries
                                </p>
                                <h1 className="hero-title">
                                    Feast Your Senses, <br /><span className="highlight">Fast and Fresh</span>
                                </h1>
                                <p className="hero-description">
                                    Order a convenient, fast and delicious meal
                                </p>

                                <div className="search-container">
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="E.g. EC1R 3BW" className="search-input" />
                                        <i className="fas fa-map-marker-alt location-icon"></i>
                                    </div>
                                    <button className="search-button">
                                        Search
                                    </button>
                                </div>
                            </div>

                            {/* Right Content (Order Cards) */}
                            <div className="order-cards-container">
                                {/*  Order Cards  */}
                                <div className="cards-wrapper">
                                    {/*  Order Card 1  */}
                                    <div className="order-card rotate-right">
                                        <h3 className="card-title">Orders</h3>
                                        <p className="card-text">Where's your order?</p>
                                        <div className="order-input-container">
                                            <input type="text" placeholder="Enter your order number" className="order-input" />
                                        </div>
                                    </div>

                                    {/*  Order Card 2  */}
                                    <div className="order-card rotate-left">
                                        <h3 className="card-title">Orders</h3>
                                        <div className="status-row">
                                            <span className="status-text">Order received</span>
                                            <span className="status-check">✓</span>
                                        </div>
                                        <div className="status-row">
                                            <span className="status-text">Being prepared</span>
                                            <span className="status-check">✓</span>
                                        </div>
                                    </div>

                                    {/*  Order Card 3  */}
                                    <div className="order-card rotate-slight">
                                        <h3 className="card-title">Orders</h3>
                                        <p className="card-text">
                                            Your order is arriving in:
                                        </p>
                                        <p className="arrival-time">
                                            15 min - get ready!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
