import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "./cartContext";
import "./foodcard.css";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Foodcard() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const selectedCategoryFromURL = queryParams.get("category") || "all";

    const [selectedCategory, setSelectedCategory] = useState(selectedCategoryFromURL);
    const [foods, setFoods] = useState([]); // Store fetched food data

    useEffect(() => {
        setSelectedCategory(selectedCategoryFromURL);
    }, [selectedCategoryFromURL]);

    // Fetch food data from API
    useEffect(() => {
        fetch("http://localhost:5000/api/foods")
            .then((res) => res.json())
            .then((data) => setFoods(data))
            .catch((error) => console.error("Error fetching food data:", error));
    }, []);

    const handleCategoryChange = (category) => {
        const validCategory = category || "all";
        setSelectedCategory(validCategory);
        navigate(`/menu?category=${validCategory}`);
    };

    // Filter food items based on selected category
    const filteredItems = selectedCategory === "all" ? foods : 
    foods.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

    const { addToCart } = useCart();

    return (
        <>
            <div className="food-item-section-container">
                <h1 className="food-item-section-heading">Find the best food</h1>
                <div className="food-item-section-categories">
                    {["all", "burger", "pizza", "pasta", "sushi", "salad", "breakfast", "soups", "dessert", "drinks", "offers"].map((category) => (
                        <button
                            key={category}
                            className={`food-item-section-category-btn ${selectedCategory === category ? "food-item-section-active" : ""}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Food Items */}
                <div className="food-item-section-grid">
                    {filteredItems.map((item) => (
                        <div key={item._id} className="food-item-section-card" data-id={item._id}>
                            <div className="food-item-section-image-container">
                                <img src={item.image || "/placeholder.svg"} alt={item.name} className="food-item-section-image"/>
                                {item.category === "offers" && (
                                    <div className="discount-badge">{item.discount}</div>
                                )}
                            </div>
                            <div className="food-item-section-content">
                                <div className="food-item-section-header">
                                    <h3 className="food-item-section-title">{item.name}</h3>
                                    <div className="price-container">
                                        {item.category === "offers" ? (
                                            <>
                                                <span className="food-item-section-price-discount">₹{item.price.toFixed(2)}</span>
                                                <span className="food-item-section-price">
                                                    ₹{(item.price - (item.price * Math.abs(parseInt(item.discount)) / 100)).toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="food-item-section-price">₹{item.price}</span>
                                        )}
                                    </div>
                                </div>
                                <p className="food-item-section-description">
                                    {item.description.length > 80 ? item.description.substring(0, 80) + "..." : item.description}
                                </p>
                                <div className="food-item-section-footer">
                                    <div className="food-item-section-rating">
                                        <FontAwesomeIcon icon={faStar} className="food-item-section-star" />
                                        <span>{item.rating}</span>
                                    </div>
                                    <NavLink
                                        to={"/shoppingCart"}
                                        className="food-item-section-add-btn"
                                        onClick={() => addToCart(item._id, item.name, item.image, item.price)}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Foodcard;
