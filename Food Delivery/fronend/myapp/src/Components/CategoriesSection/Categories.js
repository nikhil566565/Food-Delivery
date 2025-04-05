import React, { useState } from 'react'
import './Categories.css'
import { useNavigate } from "react-router-dom";
// import foodItems from "../FoodData"
import categories from "../CategoryData";
import restaurants from '../FoodData';

function Categories() {
    const [activeFilter, setActiveFilter] = useState("offers").slice(0,3);

    const filters = ["offers"];

    const navigate = useNavigate();
    const handleCategoryClick = (categoryKey) => {
        if (categoryKey) {
            navigate(`/menu?category=${categoryKey}`);
            window.scrollTo(0, 0);
        }
    };
    const offers = restaurants.filter(item => item.category === "offers");
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
                    {offers.map(({ id, name, discount, image, key }) => (
                        <div key={id} className="restaurant-card" onClick={() => handleCategoryClick(key)}>
                            <div className="image-container">
                                <img src={image} alt={name} className="restaurant-image" />
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
                                <p className="Categories-count">{count} Menu</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Categories
