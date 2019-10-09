import React, { createContext, useState } from 'react';
import { addToCart, subtractFromCart, removeFromCart } from '../helpers/generic';

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    subtractItemFromCart: () => { },
    removeItemFromCart: () => { },
    clearCart: () => {}
});

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = cartItem => setCartItems(addToCart(cartItems, cartItem));
    const subtractItemFromCart = cartItem => setCartItems(subtractFromCart(cartItems, cartItem));
    const removeItemFromCart = cartItem => setCartItems(removeFromCart(cartItems, cartItem));
    const clearCart = () => setCartItems([]);

    return <CartContext.Provider value={{
        cartItems, addItemToCart, subtractItemFromCart, removeItemFromCart, clearCart
    }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;