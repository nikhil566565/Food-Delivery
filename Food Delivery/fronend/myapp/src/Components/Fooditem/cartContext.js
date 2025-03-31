"use client"

import { createContext, useContext, useState } from "react"
const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    // add to cart
    const addToCart = (id, name, image, price) => {
        // Check if item already exists in cart
        const existingItemIndex = cartItems.findIndex((item) => item.id === id)

        if (existingItemIndex !== -1) {
            // increase quantity
            const updatedCart = [...cartItems]
            updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 1) + 1
            setCartItems(updatedCart)
        } else {
            setCartItems((prevCart) => [...prevCart, { id, name, image, price, quantity: 1 }])
        }
    }

    // Update qua
    const updateQuantity = (id, quantity) => {
        const updatedCart = cartItems.map((item) => (item.id === id ? { ...item, quantity: quantity } : item))
        setCartItems(updatedCart)
    }

    // Remove item 
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    // clear cart
    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, updateQuantity, removeItem, clearCart, }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}

