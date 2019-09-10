import { ADD_CART_ITEM, REMOVE_CART_ITEM, SUBTRACT_CART_ITEM } from '../actions/actionTypes';
import { addToCart, subtractFromCart } from '../../helpers/generic';

const initState = {
    cartItems: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        case SUBTRACT_CART_ITEM:
            return {
                ...state,
                cartItems: subtractFromCart(state.cartItems, action.payload)
            }
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }
}