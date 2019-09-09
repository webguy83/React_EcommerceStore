import { createSelector } from 'reselect';

const cart = state => state.cart;

export const selectCartItems = createSelector(
    cart,
    cart => cart.cartItems
);

export const selectCartItemAmount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((prev, cur) => {
        return prev + cur.qty
    }, 0)
);