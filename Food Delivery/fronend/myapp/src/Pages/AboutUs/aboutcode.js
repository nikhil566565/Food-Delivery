import React from 'react'
import img from '../../Components/assets/aboutbg.png'
import img1 from '../../Components/assets/aboutInfo.png'
import './aboutcode.css'

function Aboutcode() {
    const features = [
        {
            icon: "fas fa-utensils",
            title: "Multi Cuisine",
            text: "In the new era of technology we look in the future with certainty life.",
        },
        {
            icon: "fas fa-clipboard-list",
            title: "Easy To Order",
            text: "In the new era of technology we look in the future with certainty life.",
        },
        {
            icon: "fas fa-truck",
            title: "Fast Delivery",
            text: "In the new era of technology we look in the future with certainty life.",
        },
    ];
    const aboutStats = [
        { number: "10+", label: "Locations" },
        { number: "1995", label: "Founded" },
        { number: "65+", label: "Staff Members" },
        { number: "100%", label: "Satisfied Customers" },
    ];
    return (
        <>
            <div className='about-container'>
                {/* <!-- Hero Section --> */}
                <section className="about-section-hero">
                    <div className="about-section-overlay"></div>
                    <img src={img} alt="Restaurant Interior" className="about-section-hero-image" />

                    <div className="about-section-hero-content">
                        <h1 className="about-section-hero-title">
                            Feel the authentic &amp; original taste from us
                        </h1>
                    </div>
                </section>

                {/* <!-- Features Section --> */}
                <section className="about-section-features">
                    {features.map((feature, index) => (
                        <div className="about-section-feature" key={index}>
                            <div className="about-section-feature-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="about-section-feature-title">{feature.title}</h3>
                            <p className="about-section-feature-text">{feature.text}</p>
                        </div>
                    ))}
                </section>

                {/* <!-- Info Section --> */}
                <section className="about-section-info">
                    <div className="about-section-info-container">
                        <div className="about-section-info-content">
                            <h2 className="about-section-info-title">
                                Guest info
                            </h2>
                            <p className="about-section-info-text">
                                Dining here is about experience, not just food. Our warm, dedicated staff ensures unforgettable visits.
                            </p>

                            <div className="about-section-stats">
                                {aboutStats.map((stat, index) => (
                                    <div className="about-section-stat" key={index}>
                                        <h3 className="about-section-stat-number">{stat.number}</h3>
                                        <p className="about-section-stat-label">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about-section-info-image-container">
                            <img
                                src={img1}
                                alt="Chef preparing food"
                                className="about-section-info-image"
                            />
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Aboutcode
