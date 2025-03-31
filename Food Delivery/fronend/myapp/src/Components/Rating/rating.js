import React from 'react'
import './rating.css'
function Rating() {
    return (
        <>
            {/* <!-- Stats Section --> */}
            <section className="stats-section">
                <div className="stats-section-container">
                    <div className="stats-container">
                        <div className="starts-section-grid-container">
                            {/* <!-- Stat 1 --> */}
                            <div className="stat-box">
                                <h3 className="stat-number">546+</h3>
                                <p className="stat-label">Registered Riders</p>
                            </div>

                            {/* <!-- Stat 2 --> */}
                            <div className="stat-box">
                                <h3 className="stat-number">789,900+</h3>
                                <p className="stat-label">Orders Delivered</p>
                            </div>

                            {/* <!-- Stat 3 --> */}
                            <div className="stat-box">
                                <h3 className="stat-number">690+</h3>
                                <p className="stat-label">Restaurant Partners</p>
                            </div>

                            {/* <!-- Stat 4 --> */}
                            <div className="stat-box last">
                                <h3 className="stat-number">17,457+</h3>
                                <p className="stat-label">Food Items</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rating
