import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons"
import { useCart } from './cartContext'
import "./foodcard.css"
import { NavLink } from "react-router-dom"

// import foodItems from '../../Data/foodItems'

function Foodcard() {
    const foodItems = [
        {
            id: 1,
            name: "Royal Cheese Burger with extra Fries",
            price: 99,
            description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks",
            image: "https://i.ytimg.com/vi/SvOx7tA_Cv8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAUi4DTtB9e2mnIAe3JoxUoj6nbNA",
            rating: 4.8,
            category: "burger",
        },
        {
            id: 2,
            name: "The Gramercy Tavern Burger - 4 Pack",
            price: 109,
            description:
                "Premium beef patty with special sauce, lettuce, cheese, pickles, onions on a sesame seed bun. Comes with fries and drink.",
            image: "https://rhubarbandcod.com/wp-content/uploads/2022/06/The-Classic-Cheeseburger-1.jpg",
            rating: 4.9,
            category: "burger",
        },
        {
            id: 3,
            name: "Margherita Pizza",
            price: 499,
            description: "Classic delight with 100% real mozzarella cheese and fresh tomato sauce on a crispy base",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
            rating: 4.5,
            category: "pizza",
        },
        {
            id: 4,
            name: "Pepperoni Pizza",
            price: 249,
            description: "A classic favorite with spicy pepperoni, mozzarella, and tomato sauce",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",
            rating: 4.7,
            category: "pizza",
        },
        {
            id: 5,
            name: "Spaghetti Carbonara",
            price: 199,
            description: "Creamy pasta with pancetta, egg, parmesan cheese, and black pepper",
            image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=1000",
            rating: 4.6,
            category: "pasta",
        },
        {
            id: 6,
            name: "California Roll",
            price: 699,
            description: "Crab, avocado, and cucumber wrapped in seaweed and rice",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000",
            rating: 4.3,
            category: "sushi",
        },
        {
            id: 7,
            name: "Caesar Salad",
            price: 199,
            description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese",
            image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=1000",
            rating: 4.4,
            category: "salad",
        },
        {
            id: 8,
            name: "Chocolate Lava Cake",
            price: 259,
            description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000",
            rating: 4.9,
            category: "dessert",
        },
        {
            id: 9,
            name: "Coca-Cola",
            price: 59,
            description: "Refreshing classic cola drink, served with ice",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000",
            rating: 4.2,
            category: "drinks",
        },
        {
            id: 10,
            name: "Coca-Cola",
            price: 59,
            description: "Refreshing classic cola drink, served with ice",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000",
            rating: 4.2,
            category: "drinks",
        },
    ]

    const [selectedCategory, setSelectedCategory] = useState("all")
    

    const filteredItems =
        selectedCategory === "all" ? foodItems : foodItems.filter((item) => item.category === selectedCategory);

    const { addToCart } = useCart();
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <div className="food-item-section-container">
                <h1 className="food-item-section-heading">Find the best food</h1>

                <div className="food-item-section-categories">
                    {["all", "burger", "pizza", "pasta", "sushi", "salad", "breakfast","soups", "dessert", "drinks"].map((category) => (
                        <button
                            key={category} className={`food-item-section-category-btn ${selectedCategory === category ? "food-item-section-active" : ""}`}
                            onClick={() => handleCategoryChange(category)} >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>


                <div className="food-item-section-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="food-item-section-card" data-id={item.id}>
                            <div className="food-item-section-image-container">
                                <img src={item.image || "/placeholder.svg"} alt={item.name} className="food-item-section-image" />
                            </div>
                            <div className="food-item-section-content">
                                <div className="food-item-section-header">
                                    <h3 className="food-item-section-title">{item.name}</h3>
                                    <span className="food-item-section-price">₹{item.price.toFixed(2)}</span>
                                </div>
                                <p className="food-item-section-description">
                                    {item.description.length > 80 ? item.description.substring(0, 80) + "..." : item.description}
                                </p>
                                <div className="food-item-section-footer">
                                    <div className="food-item-section-rating">
                                        <FontAwesomeIcon icon={faStar} className="food-item-section-star" />
                                        <span>{item.rating}</span>
                                    </div>
                                    <NavLink to={"/shoppingCart"} className="food-item-section-add-btn"
                                        onClick={() => addToCart(item.id, item.name, item.image, item.price)}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Foodcard

