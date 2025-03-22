import React, { useState } from 'react'
import './Categories.css'
function Categories() {
    const [activeFilter, setActiveFilter] = useState("offers");

    const categories = [
        { image: "https://placehold.co/150x150", title: "Burgers & Fast Food", count: "50" },
        { image: "https://placehold.co/150x150", title: "Salads", count: "35" },
        { image: "https://placehold.co/150x150", title: "Pasta & Cuisines", count: "42" },
        { image: "https://placehold.co/150x150", title: "Pizza", count: "38" },
        { image: "https://placehold.co/150x150", title: "Breakfast", count: "25" },
        { image: "https://placehold.co/150x150", title: "Soups", count: "20" }
    ];


    return (
        <>
            {/* <!-- Deals Section --> */}
            <section className="deals-section">
                <div className="section-header">
                    <h2 className="section-title">
                        Up to <span className="highlight">-40%</span> Zomato. exclusive deals
                    </h2>

                    {/* <!-- Filter Pills --> */}
                    <div className="filter-pills">
                        {["offers"].map((filter) => (
                            <span
                                key={filter}
                                className={`filter-pill ${activeFilter === filter ? "active" : ""}`}
                                data-filter={filter}
                                onClick={() => setActiveFilter(filter)}>
                                {filter === "pizza" ? "Pizza & Fast food" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </span>
                        ))}
                    </div>
                </div>

                {/* <!-- Restaurant Cards --> */}
                <div className="restaurant-grid">
                    {/* <!-- Restaurant Card 1 --> */}
                    <div className="restaurant-card">
                        <div className="image-container">
                            <img src="https://placehold.co/400x200" alt="Chef Burgers" className="restaurant-image" />
                            <div className="discount-badge">
                                -40%
                            </div>
                        </div>
                        <div className="restaurant-info">
                            <h3 className="restaurant-name">Chef Burgers London</h3>
                        </div>
                    </div>

                    {/* <!-- Restaurant Card 2 --> */}
                    <div className="restaurant-card">
                        <div className="image-container">
                            <img src="https://placehold.co/400x200" alt="Grand Al Cafe" className="restaurant-image" />
                            <div className="discount-badge">
                                -30%
                            </div>
                        </div>
                        <div className="restaurant-info">
                            <h3 className="restaurant-name">Grand Al Cafe London</h3>
                        </div>
                    </div>

                    {/* <!-- Restaurant Card 3 --> */}
                    <div className="restaurant-card">
                        <div className="image-container">
                            <img src="https://placehold.co/400x200" alt="Butterford Cafe" className="restaurant-image" />
                            <div className="discount-badge">
                                -15%
                            </div>
                        </div>
                        <div className="restaurant-info">
                            <h3 className="restaurant-name">Butterford Cafe London</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Categories Section --> */}
            <section className="Categories-section">
                <h2 className="Categories-heading">
                    Zomato. Popular Categories <span className="Categories-emoji">😋</span>
                </h2>

                <div className="Categories-grid">
                    {categories.map((category, index) => (
                        <div className="Categories-card" key={index}>
                            <img src={category.image} alt={category.title} className="Categories-image" />
                            <div className="Categories-content">
                                <h3 className="Categories-title">{category.title}</h3>
                                <p className="Categories-count">{category.count} restaurants</p>
                            </div>
                        </div>
                    ))}
                </div>
              
            </section>

        </>
    )
}

export default Categories
