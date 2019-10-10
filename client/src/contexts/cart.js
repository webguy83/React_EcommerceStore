import React, { createContext, useState, useEffect } from 'react';
import { addToCart, subtractFromCart, removeFromCart } from '../helpers/generic';

export const CartContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    subtractItemFromCart: () => { },
    removeItemFromCart: () => { },
    clearCart: () => { },
    miniCartHidden: true,
    toggleMiniCartHidden: () => { },
    setMiniCartHidden: () => { },
    setIconCartHidden: () => { },
    iconCartHidden: false,
    cartItemsAmount: 0,
    cartItemsTotalPrice: 0
});

const getCartItemsAmount = (cartItems) => {
    return cartItems.reduce((prev, cur) => {
        return prev + cur.qty
    }, 0)
}

const getCartItemsTotalPrice = (cartItems) => {
    return cartItems.reduce((prev, cur) => {
        return prev + (cur.qty * cur.price)
    }, 0)
}


const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [miniCartHidden, setMiniCartHidden] = useState(true);
    const [iconCartHidden, setIconCartHidden] = useState(false);
    const [cartItemsAmount, setCartItemsAmount] = useState(0);
    const [cartItemsTotalPrice, setCartItemsTotalPrice] = useState(0);

    const addItemToCart = cartItem => setCartItems(addToCart(cartItems, cartItem));
    const subtractItemFromCart = cartItem => setCartItems(subtractFromCart(cartItems, cartItem));
    const removeItemFromCart = cartItem => setCartItems(removeFromCart(cartItems, cartItem));
    const clearCart = () => setCartItems([]);
    const toggleMiniCartHidden = () => setMiniCartHidden(!miniCartHidden);

    useEffect(() => {
        setCartItemsAmount(getCartItemsAmount(cartItems));
        setCartItemsTotalPrice(getCartItemsTotalPrice(cartItems));
    }, [cartItems])

    return <CartContext.Provider value={{
        cartItems,
        addItemToCart,
        subtractItemFromCart,
        removeItemFromCart,
        clearCart,
        miniCartHidden,
        toggleMiniCartHidden,
        setMiniCartHidden,
        setIconCartHidden,
        iconCartHidden,
        cartItemsAmount,
        cartItemsTotalPrice
    }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;