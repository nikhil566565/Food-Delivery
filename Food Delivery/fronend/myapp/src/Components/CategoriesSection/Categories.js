import React, { useState } from 'react'
import './Categories.css'
import { useNavigate } from "react-router-dom";

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
    const restaurants = [
        { name: "Chef Burgers London", discount: "-40%", img: "https://placehold.co/400x200" },
        { name: "Grand Al Cafe London", discount: "-30%", img: "https://placehold.co/400x200" },
        { name: "Butterford Cafe London", discount: "-15%", img: "https://placehold.co/400x200" }
    ];

    const filters = ["offers"];
    const navigate = useNavigate();

    const handleCategoryClick = (categoryKey) => {
        navigate(`/menu?category=${categoryKey}`);
    };
    return (
        <>
            {/* <!-- Deals Section --> */}
            <section className="deals-section">
                <div className="section-header">
                    <h2 className="section-title">
                        Up to <span className="highlight">-40%</span> Zomato. exclusive deals
                    </h2>
                    <div className="filter-pills">
                        {filters.map(filter => (
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
                <div className="restaurant-grid">
                    {restaurants.map(({ name, discount, img }) => (
                        <div key={name} className="restaurant-card">
                            <div className="image-container">
                                <img src={img} alt={name} className="restaurant-image" />
                                <div className="discount-badge">{discount}</div>
                            </div>
                            <div className="restaurant-info">
                                <h3 className="restaurant-name">{name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* <!-- Categories Section --> */}
            <section className="Categories-section">
                <h2 className="Categories-heading">
                    Zomato. Popular Categories <span className="Categories-emoji">😋</span>
                </h2>
                <div className="Categories-grid">
                    {categories.map(({ image, title, count, key }) => (
                        <div className="Categories-card" key={key} onClick={() => handleCategoryClick(key)}>
                            <img src={image} alt={title} className="Categories-image" />
                            <div className="Categories-content">
                                <h3 className="Categories-title">{title}</h3>
                                <p className="Categories-count">{count} restaurants</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Categories
