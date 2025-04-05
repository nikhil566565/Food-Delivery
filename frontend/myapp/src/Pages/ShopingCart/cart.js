import { useState, useEffect } from "react"
import { Trash } from "lucide-react"
import { useNavigate } from "react-router-dom";
import "./cart.css"
import { useCart } from "../../Components/Fooditem/cartContext"
export default function ShoppingCart() {
    const navigate = useNavigate();
    useEffect(() => {
        // Check if user is logged in
        const isUserLoggedIn = localStorage.getItem("userLoggedIn");

        if (!isUserLoggedIn || isUserLoggedIn !== "true") {
            // Redirect to login page if not logged in
            navigate("/login");
        }
    }, [navigate]);

    const { cartItems, updateQuantity, removeItem, clearCart } = useCart()
    // Customer information state
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        phone: "",
        wishes: "",
        callConfirm: false,
    })

    // Delivery method state
    const [deliveryMethod, setDeliveryMethod] = useState("delivery")
    const [deliveryInfo, setDeliveryInfo] = useState({
        city: "Jaipur",
        street: "",
        entrance: "",
        houseNo: "",
        apartmentNo: "",
        deliveryTime: "",
    })

    // Payment method state
    const [paymentMethod, setPaymentMethod] = useState("cash")
    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardholderName: "",
    })

    // Order summary state
    const [orderSummary, setOrderSummary] = useState({
        productsTotal: 0,
        deliveryCost: 60,
        totalPayment: 0,
    })

    // Modal state
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        calculateTotals()
    }, [cartItems, deliveryMethod])

    // Calculate totals function
    const calculateTotals = () => {
        const productsTotal = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
        const deliveryCost = deliveryMethod === "delivery" ? 60 : 0
        const totalPayment = productsTotal + deliveryCost

        setOrderSummary({
            productsTotal,
            deliveryCost,
            totalPayment,
        })
    }

    // Handle customer info changes
    const handleCustomerInfoChange = (e) => {
        const { id, value, type, checked } = e.target
        setCustomerInfo({
            ...customerInfo,
            [id]: type === "checkbox" ? checked : value,
        })
    }

    // Handle delivery info changes
    const handleDeliveryInfoChange = (e) => {
        const { id, value } = e.target
        setDeliveryInfo({
            ...deliveryInfo,
            [id]: value,
        })
    }

    // Handle payment info changes
    const handlePaymentInfoChange = (e) => {
        const { id, value } = e.target
        setPaymentInfo({
            ...paymentInfo,
            [id]: value,
        })
    }

    // Handle delivery method 
    const handleDeliveryMethodChange = (e) => {
        setDeliveryMethod(e.target.value)
    }

    // Handle payment method 
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value)
    }

    // Handle quantity change 
    const handleQuantityChange = (id, newQuantity) => {
        if (newQuantity < 1) newQuantity = 1
        updateQuantity(id, newQuantity)
    }

    // Place order
    const placeOrder = () => {
        if (!customerInfo.name || !customerInfo.phone) {
            alert("Please fill in all required fields")
            return
        }

        if (cartItems.length === 0) {
            alert("Your cart is empty")
            return
        }

        if (paymentMethod === "online") {
            const { cardNumber, expiryDate, cvv, cardholderName } = paymentInfo
            if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
                alert("Please fill in all payment details")
                return
            }
        }
        setShowModal(true)
    }

    return (
        <div className="add-to-cart-body">
            <div className="add-to-cart-container">
                <h1 className="add-to-cart-title">Placing an order</h1>

                <div className="add-to-cart-grid">
                    {/* Left Column - Customer Info */}
                    <div className="add-to-cart-column">
                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Contacts</h3>
                            <div className="add-to-cart-form-group">
                                <label htmlFor="name" className="add-to-cart-label">
                                    Name{" "}
                                </label>
                                <input type="text" id="name" className="add-to-cart-input" required value={customerInfo.name} onChange={handleCustomerInfoChange}
                                />
                            </div>
                            <div className="add-to-cart-form-group">
                                <label htmlFor="phone" className="add-to-cart-label">
                                    Phone
                                </label>
                                <input type="tel" id="phone" placeholder="+91 __ ___ __ __" className="add-to-cart-input" required value={customerInfo.phone}
                                    onChange={handleCustomerInfoChange}
                                />
                            </div>
                        </section>

                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Method of delivery</h3>
                            <div className="add-to-cart-radio-group">
                                <input type="radio" id="delivery" name="deliveryMethod" value="delivery" className="add-to-cart-radio"
                                    checked={deliveryMethod === "delivery"} onChange={handleDeliveryMethodChange} />
                                <label htmlFor="delivery" className="add-to-cart-radio-label">
                                    Delivery to the address
                                </label>
                            </div>
                            <div className="add-to-cart-radio-group">
                                <input
                                    type="radio"
                                    id="pickup"
                                    name="deliveryMethod"
                                    value="pickup"
                                    className="add-to-cart-radio"
                                    checked={deliveryMethod === "pickup"}
                                    onChange={handleDeliveryMethodChange}
                                />
                                <label htmlFor="pickup" className="add-to-cart-radio-label">
                                    Pickup
                                </label>
                            </div>

                            {deliveryMethod === "delivery" && (
                                <div className="add-to-cart-address-fields">
                                    <div className="add-to-cart-form-row">
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="city" className="add-to-cart-label">
                                                City / settlement
                                            </label>
                                            <select
                                                id="city"
                                                className="add-to-cart-select"
                                                value={deliveryInfo.city}
                                                onChange={handleDeliveryInfoChange}
                                            >
                                                <option value="Jaipur">Jaipur</option>
                                                <option value="Ajmer">Ajmer</option>
                                                <option value="Kota">Kota</option>
                                            </select>
                                        </div>
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="street" className="add-to-cart-label">
                                                Street
                                            </label>
                                            <input
                                                type="text"
                                                id="street"
                                                className="add-to-cart-input"
                                                value={deliveryInfo.street}
                                                onChange={handleDeliveryInfoChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="add-to-cart-form-row">
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="entrance" className="add-to-cart-label">
                                                Entrance
                                            </label>
                                            <input
                                                type="text"
                                                id="entrance"
                                                className="add-to-cart-input"
                                                value={deliveryInfo.entrance}
                                                onChange={handleDeliveryInfoChange}
                                            />
                                        </div>
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="houseNo" className="add-to-cart-label">
                                                house no
                                            </label>
                                            <input
                                                type="text"
                                                id="houseNo"
                                                className="add-to-cart-input"
                                                value={deliveryInfo.houseNo}
                                                onChange={handleDeliveryInfoChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="add-to-cart-form-row">
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="apartmentNo" className="add-to-cart-label">
                                                apartment no
                                            </label>
                                            <input
                                                type="text"
                                                id="apartmentNo"
                                                className="add-to-cart-input"
                                                value={deliveryInfo.apartmentNo}
                                                onChange={handleDeliveryInfoChange}
                                            />
                                        </div>
                                        <div className="add-to-cart-form-col">
                                            <label htmlFor="deliveryTime" className="add-to-cart-label">
                                                Delivery time
                                            </label>
                                            <input
                                                type="time"
                                                id="deliveryTime"
                                                className="add-to-cart-input"
                                                value={deliveryInfo.deliveryTime}
                                                onChange={handleDeliveryInfoChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Wishes for an order</h3>
                            <textarea
                                id="wishes"
                                rows={4}
                                className="add-to-cart-textarea"
                                value={customerInfo.wishes}
                                onChange={handleCustomerInfoChange}
                            ></textarea>
                        </section>
                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Payment method</h3>
                            {["cash", "online"].map((method) => (
                                <div key={method} className="add-to-cart-radio-group">
                                    <input
                                        type="radio"
                                        id={method + "Payment"}
                                        name="paymentMethod"
                                        value={method}
                                        className="add-to-cart-radio"
                                        checked={paymentMethod === method}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <label htmlFor={method + "Payment"} className="add-to-cart-radio-label">
                                        {method === "cash" ? "Payment in cash" : "Online payment"}
                                    </label>
                                </div>
                            ))}

                            {paymentMethod === "online" && (
                                <div className="add-to-cart-payment-fields active">
                                    {["cardNumber", "expiryDate", "cvv", "cardholderName"].map((field) => (
                                        <div
                                            key={field}
                                            className={
                                                field === "cardNumber" || field === "cardholderName"
                                                    ? "add-to-cart-form-group"
                                                    : "add-to-cart-form-col"
                                            }
                                        >
                                            <label htmlFor={field} className="add-to-cart-label">
                                                {field === "cardNumber"
                                                    ? "Card Number"
                                                    : field === "expiryDate"
                                                        ? "Expiry Date"
                                                        : field === "cvv"
                                                            ? "CVV"
                                                            : "Cardholder Name"}
                                            </label>
                                            <input
                                                type={field === "cvv" ? "password" : "text"}
                                                id={field}
                                                className="add-to-cart-input"
                                                placeholder={
                                                    field === "cardNumber"
                                                        ? "1234 5678 9012 3456"
                                                        : field === "expiryDate"
                                                            ? "MM/YY"
                                                            : field === "cvv"
                                                                ? "123"
                                                                : "Nikhil Kumawat"
                                                }
                                                value={paymentInfo[field]}
                                                onChange={handlePaymentInfoChange}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Right Column - Cart */}
                    <div className="add-to-cart-column">
                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Goods</h3>
                            <div className="add-to-cart-items">
                                {cartItems.length === 0 ? (
                                    <p>Cart is empty</p>
                                ) : (
                                    cartItems.map((item) => (
                                        <div className="add-to-cart-item" key={item.id}>
                                            <div className="add-to-cart-item-info">
                                                <img
                                                    src={item.image || "/placeholder.svg"}
                                                    alt={item.name}
                                                    className="add-to-cart-item-image"
                                                />
                                                <span className="add-to-cart-item-name">{item.name}</span>
                                            </div>
                                            <div className="add-to-cart-item-actions">
                                                <span className="add-to-cart-item-price">{item.price} Rs.</span>
                                                <button
                                                    className="add-to-cart-decrease-btn"
                                                    onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                                                >
                                                    −
                                                </button>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max="10"
                                                    value={item.quantity || 1}
                                                    className="add-to-cart-qty-input"
                                                    onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value))}
                                                />
                                                <button
                                                    className="add-to-cart-increase-btn"
                                                    onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                                                >
                                                    +
                                                </button>
                                                <span className="add-to-cart-item-total">{item.price * (item.quantity || 1)} Rs.</span>
                                                <button className="add-to-cart-remove-btn" onClick={() => removeItem(item.id)}>
                                                    <Trash size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            <div className="add-to-cart-clear-container">
                                <button className="add-to-cart-clear-btn" onClick={clearCart}>
                                    CLEAR THE BASKET
                                </button>
                            </div>
                        </section>

                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">In general</h3>
                            <div className="add-to-cart-summary-row">
                                <span>Products:</span>
                                <span className="add-to-cart-summary-value">{orderSummary.productsTotal} Rs.</span>
                            </div>
                            <div className="add-to-cart-summary-row">
                                <span>Delivery:</span>
                                <span className="add-to-cart-summary-value">{orderSummary.deliveryCost} Rs.</span>
                            </div>
                            <div className="add-to-cart-summary-row add-to-cart-total-row">
                                <span>Together before payment:</span>
                                <span className="add-to-cart-summary-value">{orderSummary.totalPayment} Rs.</span>
                            </div>
                        </section>

                        <section className="add-to-cart-section">
                            <h3 className="add-to-cart-heading">Details</h3>
                            <div className="add-to-cart-checkbox-group">
                                <input type="checkbox" id="callConfirm" className="add-to-cart-checkbox" checked={customerInfo.callConfirm} onChange={handleCustomerInfoChange}
                                />
                                <label htmlFor="callConfirm" className="add-to-cart-checkbox-label"> <i className="fas fa-phone"></i>Call me to confirm </label>
                            </div>
                        </section>

                        <button className="add-to-cart-order-btn" onClick={placeOrder}>
                            TO ORDER
                        </button>
                    </div>
                </div>
            </div>

            {/* Order confirmation modal */}
            {showModal && (
                <div className="add-to-cart-modal active">
                    <div className="add-to-cart-modal-content">
                        <h3 className="add-to-cart-modal-title">Order Confirmation</h3>
                        <p className="add-to-cart-modal-message">Your order has been placed successfully!</p>
                        <div className="add-to-cart-order-summary">
                            <div className="add-to-cart-summary-section">
                                <p> <strong>Name:</strong> {customerInfo.name} </p>
                                <p> <strong>Phone:</strong> {customerInfo.phone} </p>
                                <p> <strong>Delivery Method:</strong> {deliveryMethod === "delivery" ? "Delivery" : "Pickup"} </p>
                                {deliveryMethod === "delivery" && (
                                    <p> <strong>Address:</strong> {deliveryInfo.city}, {deliveryInfo.street}, {deliveryInfo.houseNo} </p>
                                )}
                                <p> <strong>Payment Method:</strong> {paymentMethod === "cash" ? "Cash" : "Online Payment"} </p>
                            </div>
                            <div className="add-to-cart-items-summary">
                                <h4>Items:</h4>
                                {cartItems.map((item) => (
                                    <p key={item.id}>
                                        {item.name} x{item.quantity || 1} - {item.price * (item.quantity || 1)} Rs.
                                    </p>
                                ))}
                            </div>
                            <p className="add-to-cart-total-summary"> <strong>Total: {orderSummary.totalPayment} Rs.</strong> </p>
                        </div>
                        <button className="add-to-cart-modal-close-btn" onClick={() => setShowModal(false)}> Close </button>
                    </div>
                </div>
            )}
        </div>
    )
}

