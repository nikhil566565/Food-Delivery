import React from "react";
import { useCart } from "./cartContext";

const DisplayCart = () => {
    const { cartItems } = useCart();

    return (
        <>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} width="50" />
                            {item.name} - ₹{item.price}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default DisplayCart;
