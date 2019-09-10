import { createSelector } from 'reselect';

const cart = state => state.cart;
const user = state => state.user;
const miniCart = state => state.miniCart;

export const selectCartItems = createSelector(
    cart,
    cart => cart.cartItems
);

export const selectMiniCartHidden = createSelector(
    miniCart,
    miniCart => miniCart.miniCartHidden
)

export const selectIconCartHidden = createSelector(
    miniCart,
    miniCart => miniCart.iconCartHidden
)

export const selectCurrentUser = createSelector(
    user,
    user => user.currentUser
)

export const selectCartItemAmount = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((prev, cur) => {
        return prev + cur.qty
    }, 0)
);

export const selectCartItemsTotal = createSelector(
    selectCartItems,
    cartItems => cartItems.reduce((prev, cur) => {
        return prev + (cur.qty * cur.price)
    }, 0)
);