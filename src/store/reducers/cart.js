import { ADD_CART_ITEM } from '../actions/actionTypes';

const initState = {
    cartItems: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default:
            return state;
    }
}