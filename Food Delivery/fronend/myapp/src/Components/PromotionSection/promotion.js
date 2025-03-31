import React from 'react'
import './promotion.css'
import img1 from '../assets/FAQ-1.svg'
import img2 from '../assets/FAQ-2.svg'
import img3 from '../assets/FAQ-3.svg'
import img4 from '../assets/Untitled-2.svg'

function Promotion() {
    return (
        <>
            {/* <!-- App Promotion --> */}
            <section className="promotion-section">
                <div className="promotion-container">
                    <div className="promotion-card">
                        <div className="promotion-flex-container">
                            <div className="promotion-image-column">
                                <img src={img4} alt="Couple using app" className="promotion-image" />
                            </div>
                            <div className="promotion-content-column">
                                <h2 className="promotion-title">
                                    Zomato<span className="promotion-dot">.</span> is more
                                </h2>
                                <div className="promotion-badge">
                                    <span className="promotion-highlight">Personalised</span> &
                                    Instant
                                </div>
                                <p className="promotion-description">Download the Zomato app for faster ordering</p>
                                <div className="promotion-app-links">

                                    <section className="youtube-icon-container">
                                        <button className="youtube-button apple-store-btn">
                                            <a href="https://play.google.com/store" target="_blank">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width="150" />
                                            </a>
                                            <span className="youtube-button-text">Play Store</span>
                                        </button>
                                    </section>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Promotion
